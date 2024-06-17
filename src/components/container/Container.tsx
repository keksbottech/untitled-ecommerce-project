import React, { ReactNode } from 'react'

const Container = ({ children, updatedStyle }: Readonly<{ children: ReactNode, updatedStyle: string }>) => {
    return (
        <section className={`max-w-[1100px] w-full ${updatedStyle}`}>
            {children}
        </section>
    )
}

export default Container