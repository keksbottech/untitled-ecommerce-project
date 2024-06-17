import Product from '@/components/(dashboard layout)/components/dashboard/Product'
import PageHeader from '@/sections/seller/header/Header'
import React from 'react'

const ProductPage = () => {
    return (
        <main>
            <section className="p-5">
                <PageHeader title='Products' placeholder="Search Products" />
                <div className="mt-10">
                    <Product />
                    <Product />
                    <Product />
                </div>
            </section>
        </main>
    )
}

export default ProductPage