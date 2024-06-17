import React, { ReactNode } from 'react'

type CardTypes = {
    updateStyles: string;
    children: ReactNode
}
const Card = ({ updateStyles, children }: CardTypes) => {
    return (
        <div className={`rounded-2xl border-[.5px] shadow-sm ${updateStyles}`}>
            {children}
        </div>
    )
}

export default Card