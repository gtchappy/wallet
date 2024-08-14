import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import Icon from '../components/Icon';
import {Link} from 'react-router-dom';
import useTags from "./useTags";
import Button from "../components/Button";
import Center from "../components/Center";
import Space from "../components/Space";
const TagList = styled.ol`
    font-size: 16px;
    background: white;
    padding-inline-start: 0;
    > li {
        border-bottom: 1px solid #d5d5d9;
        line-height: 20px;
        margin-left: 16px;

        > a {
            padding: 12px 16px 12px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            >svg{
                transform: scaleX(-1);
            }
        }
    }
`;

function Tags() {
    const {tags} = useTags();
    return (
        <Layout>
            <TagList>
                {
                    tags.map((tag) =>
                    <li key={tag.id}>
                        <Link to={'/tags/' + tag.id}>
                            <span className="oneLine">{tag.id+1}:{tag.name}</span>
                            <Icon name="left"/>
                        </Link>
                    </li>
                )}
            </TagList>
            <Center>
                <Space/>
                <Space/>
                <Space/>
                <Button>新增标签</Button>
            </Center>
        </Layout>
    );
}

export default Tags;