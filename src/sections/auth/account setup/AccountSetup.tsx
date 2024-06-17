'use client'
import Button from '@/components/button/Button'
import Container from '@/components/container/Container'
import Input from '@/components/input/Input'
import React from 'react'

const AccountSetup = () => {
    return (
        <section className='flex items-center flex-col justify-center'>
            <Container updatedStyle='p-10 rounded-lg flex items-center justify-center flex-col'>
                <p className='font-bold text-3xl'>Come on in Joe Doe! Choose an account to continue</p>
                <p className='w-3/4 mb-5 text-sm text-gray-500 font-light mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A soluta, cum aut et dolorem dolor voluptatibus delectus facilis, vel porro perferendis. Minus cumque dicta temporibus reiciendis tempore expedita voluptate alias.</p>
                <div className='flex flex-col lg:flex-row items-center mt-20'>
                    <div className="flex items-center  justify-between bg-gray-100 shadow-md p-5 py-10 rounded-lg mr-5 hover:bg-[#eee] duration-200 lg:cursor-pointer">
                        <div className='flex items-center w-3/4'>
                            <i className="fa fa-user text-3xl mr-5" aria-hidden="true"></i>
                            <div>
                                <p className='font-semibold'>Seller Account</p>
                                <p className='text-sm mt-1'>I want to open a {"seller's"} account to reach out to millions of customers </p>
                            </div>
                        </div>
                        <Input type='radio' onChange={undefined} value={''} updateStyle={''} placeholder={''} id={''} />

                    </div>

                    <div className="flex items-center  justify-between bg-gray-100 shadow-md p-5 rounded-lg py-10 hover:bg-[#eee] duration-200 lg:cursor-pointer">
                        <div className='flex items-center w-3/4'>
                            <i className="fa fa-user text-3xl mr-5" aria-hidden="true"></i>
                            <div>
                                <p className='font-bold
                                '>Consumer Account</p>
                                <p className='text-wrap
                                mt-1   text-sm'>I want to open a {"consumer's"} account to find and buy goods based on my taste </p>
                            </div>
                        </div>
                        <Input type='radio' onChange={undefined} value={''} updateStyle={''} placeholder={''} id={''} />

                    </div>
                </div>
                <Button updateStyle="mt-5 px-20 bg-primary text-white py-3" onClick={() => null}>
                    <span>Create account</span>
                </Button>
            </Container>
        </section >
    )
}

export default AccountSetup