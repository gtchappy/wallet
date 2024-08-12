import Layout from '../components/Layout';
import React from 'react';
import {TagsSection} from './Money/TagsSection';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {CategorySection} from "./Money/CategorySection";


function Money() {
    return (
        <Layout>
            <TagsSection/>
            <NoteSection/>
            <CategorySection/>
            <NumberPadSection/>
        </Layout>
    );
}

export default Money;