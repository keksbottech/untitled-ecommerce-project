import type { Metadata } from "next";
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import React from 'react'
import { IconArrowElbowLeft, IconSearch } from "@tabler/icons-react";
import customers from '@/site data/dummycustomers.json'
import Customer from "@/sections/seller/customer/Customer";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import PageHeader from "@/sections/seller/header/Header";
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
import Image from "next/image";
import RowsPerPage from "@/components/rows per page/RowsPerPage";

export const metadata: Metadata = {
    title: "Your customers",
    description: "View your customers easily",
};


const CustomersPage = () => {
    return (
        <main className={'w-full p-5 font-normal'}>
            <PageHeader title="customers" placeholder="Search Customers" />
            <div className="border-2 shadow-lg mt-10  rounded-lg ">



                <Table>
                    <TableCaption>A list of your recent customers.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="p-6 capitalize w-[150px]"><Checkbox /></TableHead>
                            <TableHead className="p-6 capitalize w-[150px]">name</TableHead>
                            <TableHead
                                className="p-6 w-[150px] capitalize">email</TableHead>
                            <TableHead className="p-6 capitalize w-[150px]">location</TableHead>
                            <TableHead className="p-6 capitalize w-[150px]">phone</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {customers.map((customer) => (
                            <Customer key={customer.id} isCheckBoxClicked={false} name={customer.name} email={customer.email} location={customer.location} phone={customer.phone} imageUrl={customer.profileImage} alt={customer.name + "image"} />
                        ))}
                    </TableBody>

                </Table>

                <RowsPerPage />

            </div>
        </main >
    )
}

export default CustomersPage