import styled from 'styled-components';
import React from "react";
import useTags from "../../hooks/useTags";

const Wrapper = styled.section`
    background: #FFFFFF;
    padding: 12px 16px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;

    > ol {
        margin: 0 -12px;

        > li {
            background: #D9D9D9;
            border-radius: 18px;
            display: inline-block;
            padding: 3px 18px;
            font-size: 14px;
            margin: 8px 12px;

            &.selected {
                color: red;
            }
        }
    }

    > button {
        background: none;
        border: none;
        padding: 2px 4px;
        border-bottom: 1px solid #333;
        color: #666;
        margin-top: 8px;
    }
`;
type Props = {
    value: string[];
    onChange: (value: string[]) => void;
}
const TagsSection: React.FC<Props> = (props) => {
    const {value, onChange} = props
    const {tags,addTag} = useTags()

    const onToggleTag = (tag: string) => {
        if (value.indexOf(tag) < 0 || value.length === 0) {
            onChange([tag])
        }
    }
    const selected = (tag: string) => value.indexOf(tag) >= 0 ? 'selected' : undefined
    return (
        <Wrapper>
            <ol>
                {tags.map((tag) => {
                    return (<li key={tag.id}
                                onClick={() => {
                                    onToggleTag(tag.name)
                                }}
                                className={selected(tag.name)}
                    >
                        {tag.name}
                    </li>)
                })}
            </ol>
            <button onClick={addTag}>新增标签</button>
        </Wrapper>
    )
}


export {TagsSection};