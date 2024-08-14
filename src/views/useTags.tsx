import {useState} from "react";

const useTags = () => {
    const [tags, setTags] = useState<{ id: number, name: string }[]>(
        [
            {id: 0, name: '衣'},
            {id: 1, name: '食'},
            {id: 2, name: '住'},
            {id: 3, name: '行'},
        ]
    )
    const findTag = (id: number) => {
        return tags.filter((tag) => tag.id === id)[0]
    }
    const updateTag = (id: number, {name}: { name: string }) => {
        //map是深拷贝的吗
        setTags(tags.map(tag => tag.id === id ? {id, name} : tag))
    };
    const deleteTag = (id: number) => {
        setTags(tags.filter(tag => tag.id !== id))
    }
    return {tags, setTags, findTag, updateTag, deleteTag}
}
export default useTags
