import React from 'react';
import {useParams} from "react-router-dom";
import useTags from "./useTags";

const Tag: React.FC = () => {
    const {findTag} = useTags()
    const {id} = useParams()
    const tag = id ? findTag(parseInt(id)) : {id: 0, name: null}
    return (
        <div>{tag.name}</div>
    );
}

export default Tag;