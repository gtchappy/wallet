import Layout from '../components/Layout';
import React, {useState} from 'react';
import {TagsSection} from './Money/TagsSection';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {CategorySection} from "./Money/CategorySection";
import {useRecords} from "../hooks/useRecords";
import styled from "styled-components";

type Category = '+' | '-'
const defaultFormData = {
    tagIds: [] as string[],
    note: '',
    category: '-' as Category,
    amount: '0',
    createAt: ''
}
const CategoryWrapper = styled.div`
    background: #c4c4c4;
`

function Money() {
    const [value, setValue] = useState(defaultFormData)
    const onChange = (obj: Partial<typeof value>) => {
        setValue({...value, ...obj})
    }
    const {addRecord} = useRecords()
    const submit = () => {
        const createAt = {createAt: (new Date()).toISOString()}
        addRecord({...value, ...createAt})
        setValue(defaultFormData)
    }
    const {tagIds, note, category} = value
    return (
        <Layout scrollTop={1000}>
            <TagsSection value={tagIds}
                         onChange={tagIds => onChange({tagIds})}/>
            <NoteSection value={note}
                         onChange={note => onChange({note})}/>
            <CategoryWrapper>
                <CategorySection value={category}
                                 onChange={category => onChange({category})}/>
            </CategoryWrapper>
            <NumberPadSection value={value.amount}
                              onChange={amount => onChange({amount})}
                              onOk={submit}
            />
        </Layout>
    );
}

export default Money;