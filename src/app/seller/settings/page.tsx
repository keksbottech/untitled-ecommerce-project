import PageHeader from '@/sections/seller/header/Header'
import Settings from '@/sections/seller/settings/Settings'
import React from 'react'

const SettingsPage = () => {
    return (
        <main>
            <section className='p-5'>
                <PageHeader title='Settings' placeholder={''} />
                <Settings />
            </section>
        </main>
    )
}

export default SettingsPage