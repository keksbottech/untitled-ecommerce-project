import React, { ChangeEventHandler } from 'react'

type InputTypes = {
    onChange: ChangeEventHandler<HTMLInputElement> | undefined;
    value: string;
    updateStyle: string;
    placeholder: string;
    type: string;
    id: string;
}
const Input = ({ onChange, value, placeholder = "Type here...", updateStyle, type, id }: InputTypes) => {

    return (
        <input type={type} placeholder={placeholder} className={`border-[.5px] border-gray-300 p-2 rounded-lg ${updateStyle}`} value={value} onChange={onChange} id={id} />
    )
}

export default Input