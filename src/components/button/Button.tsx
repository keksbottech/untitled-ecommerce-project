'use client'
import React, { ReactNode } from 'react'

type ButtonType = {
    onClick: () => void;
    updateStyle: string;
    children: ReactNode
}
const Button = ({ onClick, updateStyle, children }: ButtonType) => {
    return (
        <button onClick={onClick} type='button' className={`border-gray-300 border-[.5px] p-2 rounded-lg ${updateStyle}`}>
            {children}
        </button>
    )
}

export default Button