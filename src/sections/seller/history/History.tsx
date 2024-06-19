import { Checkbox } from '@/components/ui/checkbox';
import { TableCell, TableRow } from '@/components/ui/table';
import Image from 'next/image';
import React from 'react'

type HistoryPropsTypes = {
    description: string;
    date: string;
    productName: string;
    price: string;
    imageUrl: string;
    alt: string;
}
const History = ({ description, date, productName, price, alt, imageUrl }: HistoryPropsTypes) => {
    return (
        <TableRow>
            <TableCell className='p-6'>
                <Image src={imageUrl} alt={alt} height={70} width={70} className="rounded-lg" />
            </TableCell>
            <TableCell className='p-6 capitalize max-w-[150px]'>{productName}</TableCell>
            <TableCell className="p-6 max-w-[150px]">{description}</TableCell>
            <TableCell className="p-6 max-w-[150px]">{price}</TableCell>
            <TableCell className="p-6 max-w-[150px]">{date}</TableCell>
        </TableRow>
    )
}

export default History