'use client'
import React, { ReactNode, useState } from 'react'
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { baselightTheme } from '@/utils/theme/DefaultColors';
import Header from '@/components/(dashboard layout)/layout/header/Header';
import Sidebar from '@/components/(dashboard layout)/layout/sidebar/Sidebar';
import Notifications from '@/sections/notifications/Notifications';

const SellerLayout = ({ children }: { children: ReactNode }) => {
    const [isNavbarToggled, setIsNavbarToggled] = useState(false)

    const toggleNavbarOpenAndClose = () => {
        setIsNavbarToggled(!isNavbarToggled)
    }
    return (
        <ThemeProvider theme={baselightTheme}>
            <CssBaseline />
            <div className=''>

                <div className="flex justify-between  ">
                    <div className='w-0 '>
                        <Sidebar isMobileSidebarOpen={isNavbarToggled} onSidebarClose={toggleNavbarOpenAndClose} isSidebarOpen={false} />
                    </div>
                    <div className='w-[100%] xl:w-[80%] bg-white'>
                        <Header toggleMobileSidebar={toggleNavbarOpenAndClose} />

                        {children}
                    </div>
                </div>
            </div>
        </ThemeProvider >
    )
}

export default SellerLayout