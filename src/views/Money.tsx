import Layout from '../components/Layout';
import React, {useState} from 'react';
import {TagsSection} from './Money/TagsSection';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {CategorySection} from "./Money/CategorySection";

type Category = '+' | '-'

function Money() {
    const [value, setValue] = useState({
        tags: [] as string[],
        note: '',
        category: '-' as Category,
        output: '0'
    })
    const onChange = (obj: Partial<typeof value>) => {
        setValue({...value, ...obj})
    }
    const {tags, note, category, output} = value
    return (
        <Layout>
            <TagsSection value={tags} onChange={tags => onChange({tags})}/>
            <NoteSection value={note} onChange={note => onChange({note})}/>
            <CategorySection value={category} onChange={category => onChange({category})}/>
            <NumberPadSection value={output} onChange={output => onChange({output})}/>
        </Layout>
    );
}

export default Money;