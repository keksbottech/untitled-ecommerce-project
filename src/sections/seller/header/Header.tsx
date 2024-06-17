'use client'
import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PersonIcon from '@mui/icons-material/Person';
import { IconSearch } from '@tabler/icons-react';
import { Input } from '@/components/ui/input';
import { usePathname } from 'next/navigation';

type PageHeaderPropsType = {
    title: string;
    placeholder: string;
}
const PageHeader = ({ title, placeholder }: PageHeaderPropsType) => {
    const pathname = usePathname()


    return (
        <header className=''>
            <h1 className="font-bold text-3xl capitalize">{title}</h1>
            {pathname === '/seller/settings' || pathname === "/seller/account" ? "" :
                < div className="border-[.5px] bg-[#F9FAFB] p-4 relative rounded-lg mt-10">
                    <Input placeholder={placeholder} className="p-7 pl-10 max-w-[50%]" />
                    <IconSearch className="absolute left-7 text-xl  top-[50%] translate-y-[-50%]" />
                </div>
            }
        </header >
    )
}

export default PageHeader