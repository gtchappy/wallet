import styled from 'styled-components';
import React, {ChangeEventHandler } from "react";
import Input from "../../components/Input";

const Wrapper = styled.section`
    background: #f5f5f5;
    padding: 0 16px;
    font-size: 14px;
`;
type Props = {
    value: string,
    onChange: (value: string) => void
}
const NoteSection: React.FC<Props> = (props) => {
    const value = props.value
    const onChange:ChangeEventHandler<HTMLInputElement>= (e) => {
            props.onChange(e.target.value)
    }
    return (
        <Wrapper>
           <Input label="备注" type="text" value={value } onChange={onChange} placeholder="在此输入备注"></Input>
        </Wrapper>
    )
}

export {NoteSection}