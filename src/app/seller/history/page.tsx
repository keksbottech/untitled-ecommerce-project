import PageHeader from '@/sections/seller/header/Header'
import History from '@/sections/seller/history/History'
import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import history from '@/site data/historydummy.json'
import RowsPerPage from '@/components/rows per page/RowsPerPage'

const HistoryPage = () => {
    return (
        <main>
            <section className="p-5">
                <PageHeader title='Transaction History' placeholder='' />
                <Table>
                    <TableCaption>A list of your recent transactions.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="p-6 capitalize">Product Image</TableHead>
                            <TableHead className="p-6 capitalize">Product Name</TableHead>
                            <TableHead
                                className="p-6 capitalize">Description</TableHead>
                            <TableHead className="p-6 capitalize">Price</TableHead>
                            <TableHead className="p-6 capitalize">Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {history?.map(h => (
                            <History key={h.id} description={h.description} date={h.date} productName={h.productName} imageUrl={h.image} alt={`${h.productName} image`} price={h.price} />
                        ))
                        }
                    </TableBody>
                </Table>

                <RowsPerPage />
            </section>
        </main>
    )
}

export default HistoryPage