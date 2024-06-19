import { Checkbox } from '@/components/ui/checkbox';
import { TableCell, TableRow } from '@/components/ui/table';
import Image from 'next/image';
import React from 'react'

type CustomerPropsTypes = {
    isCheckBoxClicked: boolean;
    name: string;
    email: string;
    location: string;
    phone: string;
    imageUrl: string;
    alt: string;
}
const Customer = ({ isCheckBoxClicked, name, email, location, phone, imageUrl, alt }: CustomerPropsTypes) => {
    return (
        <TableRow>
            <TableCell className='capitalize font-medium p-6 '> <Checkbox /></TableCell>
            <TableCell className="font-medium p-6  flex flex-col  w-[150px]">
                <Image src={imageUrl} alt={alt} width={50} height={50} className="rounded-full" />
                <p className="capitalize mt-3">{name}</p>
            </TableCell>
            <TableCell className='p-6  w-[150px]'>{email}</TableCell>
            <TableCell className="p-6 w-[150px]">{location}</TableCell>
            <TableCell className="p-6 ">{phone}</TableCell>
        </TableRow>
    )
}

export default Customer