import {useEffect, useState} from "react";
import {useUpdate} from "../hooks/useUpdate";
import {nanoid} from "nanoid";

const useTags = () => {
    const [tags, setTags] = useState<{ id: string, name: string }[]>([])
    useEffect(() => {
        setTags(JSON.parse(window.localStorage.getItem('tags') || '[]'))
    }, []);
    useUpdate(() => {
        window.localStorage.setItem('tags', JSON.stringify(tags))
    }, tags)
    const addTag = () => {
        const tagName = window.prompt('新标签的名称为')
        if (tagName) {
            const newTagName = {id: nanoid(5), name: tagName}
            setTags([...tags, newTagName])
        }
    }
    const findTag = (id: string) => {
        return tags.filter((tag) => tag.id === id)[0]
    }
    const updateTag = (id: string, {name}: { name: string }) => {
        // TODO map是深拷贝的吗
        setTags(tags.map(tag => tag.id === id ? {id, name} : tag))
    };
    const deleteTag = (id: string) => {
        setTags(tags.filter(tag => tag.id !== id))
    }
    return {tags, setTags, findTag, updateTag, deleteTag, addTag}
}
export default useTags
