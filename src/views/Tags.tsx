import Layout from "../components/Layout";
import React from "react";
import useTags from "./useTags";

function Tags() {
    const {tags, setTags} = useTags()
    return (
        <>
            {tags.map((tag, index) => {
                return (<h2 key={index}>{tag}</h2>)
            })}
        </>
    )
}


export default Tags