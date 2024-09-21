import Layout from "../components/Layout";
import React, {useState} from "react";
import {CategorySection} from "./Money/CategorySection";
import styled from "styled-components";
import day from "dayjs";
import {useRecords, RecordItem} from "../hooks/useRecords";
import {nanoid} from "nanoid";

const CategoryWrapper = styled.div`
    background: white;
`
const Item = styled.div`
    display: flex;
    justify-content: space-between;
    background: white;
    font-size: 18px;
    line-height: 20px;
    padding: 10px 16px;

    > .note {
        margin-right: auto;
        margin-left: 16px;
        color: #999;
    }
`
const Header = styled.h3`
    font-size: 18px;
    line-height: 20px;
    padding: 10px 16px;
`;

function Statistics() {
    const [category, setCategory] = useState<'-' | '+'>('-')
    const {records} = useRecords()
    const hash: { [K: string]: RecordItem[] } = {};
    const selectedRecords = records.filter(r => r.category === category)
    //时间分类排序
    selectedRecords.map(r => {
        const key = day(r.createAt).format('YYYY年MM月DD日');
        if (!(key in hash)) {
            hash[key] = [];
        }
        hash[key].push(r);
        return 0;
    });
    //entries:将对象变成数组
    //比较字符串
    const array = Object.entries(hash).sort((a, b) => {
        if (a[0] === b[0]) return 0;
        if (a[0] > b[0]) return -1;
        if (a[0] < b[0]) return 1;
        return 0
    })
    console.log(array);
    return (
        <Layout>
            <CategoryWrapper>
                <CategorySection value={category} onChange={value => setCategory(value)}/>
            </CategoryWrapper>
            {
                array.map(([date, records]) =>
                    <div key={nanoid()}>
                        <Header key={date}>{date}</Header>
                        <div>
                            {records.map(r => {
                                return <Item key={r.createAt}>
                                    <span className="tags">
                                        {r.tagIds}
                                    </span>
                                    {r.note ? <div className="amount">¥{r.amount}</div> : null}
                                    <div className="note">
                                        {r.note}
                                    </div>
                                    {day(r.createAt).format('YYYY年MM月DD日')}
                                </Item>
                            })}
                        </div>
                    </div>
                )}
        </Layout>
    );
}

export default Statistics
