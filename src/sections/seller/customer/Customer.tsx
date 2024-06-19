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
            <TableCell className='capitalize ml-3 font-medium p-6'> <Checkbox /></TableCell>
            <TableCell className="font-medium p-6 flex flex-col items-center justify-center">
                <Image src={imageUrl} alt={alt} width={50} height={50} className="rounded-full" />
                <p className="capitalize mt-3">{name}</p>
            </TableCell>
            <TableCell className='p-6'>{email}</TableCell>
            <TableCell className="p-6">{location}</TableCell>
            <TableCell className="p-6">{phone}</TableCell>
        </TableRow>
    )
}

export default Customer