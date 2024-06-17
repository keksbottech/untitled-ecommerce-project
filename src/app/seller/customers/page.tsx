import type { Metadata } from "next";
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import React from 'react'
import { IconArrowElbowLeft, IconSearch } from "@tabler/icons-react";
import customers from '@/site data/dummycustomers.json'
import Customer from "@/sections/seller/customer/Customer";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PageHeader from "@/sections/seller/header/Header";
export const metadata: Metadata = {
    title: "Your customers",
    description: "View your customers easily",
};


const CustomersPage = () => {
    return (
        <main className={'w-full p-5 font-normal'}>
            <PageHeader title="customers" placeholder="Search Customers" />
            <div className="border-2 shadow-lg mt-10  rounded-lg">
                <div className="grid grid-cols-5  ">
                    <div className="border-b-[.5px] bg-[#F9FAFB] p-6">
                        <Checkbox />
                    </div>
                    <div className="border-b-[.5px] bg-[#F9FAFB] p-6 ">
                        <p>Name</p>
                    </div>
                    <div className="border-b-[.5px] bg-[#F9FAFB] p-6 ">
                        <p className="">Email</p>
                    </div>
                    <div className="border-b-[.5px] bg-[#F9FAFB] p-6 ">
                        <p className="">Location</p>
                    </div>
                    <div className="border-b-[.5px] bg-[#F9FAFB] p-6 ">
                        <p className="">Phone</p>
                    </div>
                    {customers?.map(customer => <Customer key={customer.id} isCheckBoxClicked={false} name={customer.name} email={customer.email} location={customer.location} phone={customer.phone} imageUrl={customer.profileImage} alt={customer.name + "image"} />)}

                </div>

                <div className="flex items-center w-full justify-end p-6">
                    <div className="mx-5">
                        <span className="">Rows per page:</span>
                    </div>
                    <div className="">
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select a fruit" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Fruits</SelectLabel>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    <SelectItem value="banana">Banana</SelectItem>
                                    <SelectItem value="blueberry">Blueberry</SelectItem>
                                    <SelectItem value="grapes">Grapes</SelectItem>
                                    <SelectItem value="pineapple">Pineapple</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex mx-5 items-center">
                        <span>1</span>
                        <span>-</span>
                        <span>5</span>
                    </div>
                    <div className="flex items-center text-sm">
                        <ArrowBackIosIcon className="text-sm text-gray-500" />
                        <ArrowForwardIosIcon className="text-sm text-gray-500" />
                    </div>
                </div>
            </div>
        </main >
    )
}

export default CustomersPage