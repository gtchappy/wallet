import Layout from '../components/Layout';
import React, {useState} from 'react';
import {TagsSection} from './Money/TagsSection';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {CategorySection} from "./Money/CategorySection";
import {useRecords} from "../hooks/useRecords";

type Category = '+' | '-'
const defaultFormData = {
    tagIds: [] as string[],
    note: '',
    category: '-' as Category,
    amount: '0'
}

function Money() {
    const [value, setValue] = useState(defaultFormData)
    const onChange = (obj: Partial<typeof value>) => {
        setValue({...value, ...obj})
    }
    const {records, addRecord} = useRecords()
    const submit = () => {
        addRecord(value)
        alert('保存成功')
        setValue(defaultFormData)
    }
    const {tagIds, note, category, amount} = value
    return (
        <Layout>
            {JSON.stringify(value)}
            <TagsSection value={tagIds}
                         onChange={tagIds => onChange({tagIds})}/>
            <NoteSection value={note}
                         onChange={note => onChange({note})}/>
            <CategorySection value={category}
                             onChange={category => onChange({category})}/>
            <NumberPadSection value={value.amount}
                              onChange={amount => onChange({amount})}
                              onOk={submit}
            />
        </Layout>
    );
}

export default Money;