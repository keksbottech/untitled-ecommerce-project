import Card from '@/components/card/Card'
import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PageContainer from '@/components/(dashboard layout)/components/container/PageContainer';
import Blog from '@/components/(dashboard layout)/components/dashboard/Product';
import MonthlyEarnings from '@/components/(dashboard layout)/components/dashboard/MonthlyEarnings';
import ProductPerformance from '@/components/(dashboard layout)/components/dashboard/ProductPerformance';
import RecentTransactions from '@/components/(dashboard layout)/components/dashboard/RecentTransactions';
import SalesOverview from '@/components/(dashboard layout)/components/dashboard/SalesOverview';
import YearlyBreakup from '@/components/(dashboard layout)/components/dashboard/YearlyBreakup';
import Header from '@/components/(dashboard layout)/layout/header/Header';
import Sidebar from '@/components/(dashboard layout)/layout/sidebar/Sidebar';
import { Grid, Box } from '@mui/material';
import { MouseEvent } from 'react';

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard" >

      <Box sx={{ padding: ".5rem" }}>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4  my-10 w-full">
          <Card updateStyles='relative py-10 p-5 w-full xl:w-[250px] my-2 xl:my-0 '>
            <div className="">
              <p className='a uppercase text-gray-500
                            mb-2 text-[12px]'>Revenue</p>
              <p className='font-semibold text-2xl'>N 240k</p>

              <div className="flex items-center text-sm justify-between relative top-7">
                <p className='flex items-center text-red-500'>
                  <ArrowUpwardIcon className="text-sm" />
                  <span className='font-semibold text-sm'>12%</span>
                </p>
                <p className="text-gray text-[12px]">Since last month</p>
              </div>
            </div>
            <div className="b absolute top-5 right-5 bg-secondary-purple text-white w-[60px] h-[60px] flex items-center justify-center rounded-full">
              <AttachMoneyIcon />
            </div>
          </Card>

          <Card updateStyles='relative py-10 p-5 w-full xl:w-[250px] my-2 xl:my-0'>
            <div className="">
              <p className='a uppercase text-gray
                            mb-2 text-[12px]'>total customers</p>
              <p className='font-semibold text-2xl'>2.4k</p>

              <div className="flex items-center text-sm justify-between relative top-7">
                <p className='flex items-center text-green-500'>
                  <ArrowUpwardIcon className="text-sm" />
                  <span className="text-sm">12%</span>
                </p>
                <p className='text-gray text-[12px]'>Since last month</p>
              </div>
            </div>
            <div className="b absolute top-5 right-5 bg-green-500 text-white w-[60px] h-[60px] flex items-center justify-center rounded-full">
              <PeopleOutlinedIcon />
            </div>
          </Card>


          <Card updateStyles='relative py-10 p-5 w-full xl:w-[250px] my-2 xl:my-0'>
            <div className="">
              <p className='a uppercase text-gray
                            mb-2 text-[12px]'>items ordered</p>
              <p className='font-semibold text-2xl'>$24k</p>

              {/* <div className="">
                                <p>
                                    <ArrowUpwardIcon />
                                    <span>12%</span>
                                </p>
                                <p>Since last month</p>
                            </div> */}
            </div>
            <div className="b absolute top-5 right-5 bg-yellow-500 text-white w-[60px] h-[60px] flex items-center justify-center rounded-full">
              <ShoppingCartOutlinedIcon />
            </div>
          </Card>

          <Card updateStyles='relative py-10 p-5 w-full xl:w-[250px] my-2 xl:my-0'>
            <div className="">
              <p className="a uppercase text-gray
                            mb-2 text-[12px]">total profit</p>
              <p className='font-semibold text-2xl'>$24k</p>

            </div>
            <div className="b absolute top-5 right-5 bg-secondary-purple text-white w-[60px] h-[60px] flex items-center justify-center rounded-full">
              <ReceiptOutlinedIcon />
            </div>
          </Card>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <SalesOverview />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <YearlyBreakup />
              </Grid>
              <Grid item xs={12}>
                <MonthlyEarnings />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <RecentTransactions />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductPerformance />
          </Grid>
          <Grid item xs={12}>
            <Blog />
          </Grid>
        </Grid>
      </Box>

    </PageContainer >
  )
}

export default Dashboard;
