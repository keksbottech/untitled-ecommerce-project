import { Checkbox } from '@/components/ui/checkbox';
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
        <>
            <div className="border-b-[.5px] p-6">
                <Checkbox />
            </div>
            <div className="border-b-[.5px] p-6 flex items-center ">
                <Image src={imageUrl} alt={alt} width={50} height={50} className="rounded-full" />
                <p className='capitalize ml-3 font-medium'>{name}</p>
            </div >
            <div className="border-b-[.5px] p-6">
                <p className="">{email}</p>
            </div>
            <div className="border-b-[.5px] p-6">
                <p className="">{location}</p>
            </div>
            <div className="border-b-[.5px] p-6">
                <p className="">{phone}</p>
            </div>

        </>
    )
}

export default Customer