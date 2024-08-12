import styled from 'styled-components';
import React, {useState} from "react";

const Wrapper = styled.section`
    font-size: 24px;

    > ul {
        display: flex;
        background: #c4c4c4;
        padding-inline-start: 0;

        > li {
            width: 50%;
            text-align: center;
            padding: 16px 0;
            position: relative;

            &.selected::after {
                content: '';
                display: block;
                height: 3px;
                background: #333;
                position: absolute;
                bottom: 0;
                width: 100%;
                left: 0;
            }
        }
    }
`;
type Category = '+' | '-'
type Props={
    value:Category,
    onChange:(value:Category) => void
}
const CategorySection: React.FC<Props> = (props) => {
    const {value,onChange}=props
    const categoryMap = {'-': '支出', '+': '收入'}
    type X = keyof typeof categoryMap
    const [categoryList] = useState<X[]>(['-', '+'])
    return (
        <Wrapper>
            <ul>
                {categoryList.map((c) => {
                    return (
                        <li key={c} className={value === c ? 'selected' : ''}
                            onClick={() => {
                                onChange(c)
                            }}>
                            {categoryMap[c]}
                        </li>
                    )
                })}
            </ul>
        </Wrapper>
    )
}

export {CategorySection}