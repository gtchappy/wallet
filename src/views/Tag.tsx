import React from 'react';
import {useParams, useNavigate} from "react-router-dom";
import useTags from "./useTags";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Icon from "../components/Icon";
import styled from "styled-components";
import Input from "../components/Input";
import Center from "../components/Center";
import Space from "../components/Space";

const Topbar = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 20px;
    padding: 14px;
    background: white;
`;
const InputWrapper = styled.div`
    background: white;
    margin-top: 8px;
`
const Tag: React.FC = () => {
    const {findTag, updateTag, deleteTag} = useTags()
    const {id} = useParams()
    const tag = id ? findTag(id) : {id:'123', name: "error"}
    const navigate = useNavigate()
    const onClickBack = () => {
        navigate('/tags')
    }
    if (tag) {
        return (
            <Layout>
                <Topbar>
                    <Icon name="left" className="frank" onClick={onClickBack}/>
                    <span>编辑标签</span>
                    <Icon name=""/>
                </Topbar>
                <InputWrapper>
                    <Input label="标签名" type="text" placeholder="标签名" value={tag.name} onChange={(e) => {
                        updateTag(tag.id, {name: e.target.value});
                    }}
                    ></Input>
                </InputWrapper>
                <Space/>
                <Space/>
                <Space/>
                <Center>
                    <Button onClick={() => {
                        deleteTag(tag.id)
                    }}>删除标签</Button>
                </Center>
            </Layout>
        );
    } else {
        return (
            <div>tag不存在 </div>
        )
    }

}

export default Tag;