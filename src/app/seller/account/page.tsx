import Account from '@/sections/seller/account/Account'
import PageHeader from '@/sections/seller/header/Header'
import React from 'react'

const AccountPage = () => {
    return (
        <main>
            <section className="p-5">
                <PageHeader title='account' placeholder='' />
                <Account />
            </section>
        </main>
    )
}

export default AccountPage