'use client'
import Button from '@/components/button/Button'
import Input from '@/components/input/Input'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SignUp = () => {

    const enableGoogleAuth = () => {

    }

    const registerUserThroughEmailAndPassword = () => {

    }
    return (
        <section className=' flex flex-col justify-center items-center w-full h-[100dvh]'>
            <div className='bg-white shadow-2xl flex flex-col items-center w-full justify-center max-w-[600px] p-5 rounded-lg'>
                <span className='font-bold'>Create your account</span>
                <p className="font-light text-sm text-gray-500 mt-1">Welcome! Please fill in the details to get started</p>
                <div className="">
                    <Button onClick={enableGoogleAuth} updateStyle={'px-10 my-5 flex items-center justify-center'}>
                        <div className='flex items-center'>
                            <Image src={"/google/google.png"} width={40} height={40} alt="google btn" />
                            <span>Google</span>
                        </div>
                    </Button>
                </div>

                <div className='flex items-center w-full px-10'>
                    <div className='h-[1px] w-full bg-gray-300'></div>
                    <span className='mx-4'>or</span>
                    <hr />
                    <div className='h-[1px] w-full bg-gray-300'></div>
                </div>

                <form action="">
                    <div className='flex items-center flex-col lg:flex-row'>
                        <div className='flex flex-col mr-0 lg:mr-4'>
                            <label className='my-2 text-sm font-semibold' htmlFor="first name">First name</label>
                            <Input type="text"
                                id="first name" onChange={undefined} value={''} updateStyle={'my-2'} placeholder={''} />
                        </div>
                        <div className='flex flex-col'>
                            <label className='my-2 text-sm font-semibold' htmlFor="last name">Last name</label>
                            <Input type="text"
                                id="last name" onChange={undefined} value={''} updateStyle={'my-2'} placeholder={''} /></div>
                    </div>
                    <div className='flex flex-col'>
                        <label className='my-2 text-sm font-semibold' htmlFor="email">Email address</label>
                        <Input type="text"
                            id="email" onChange={undefined} value={''} updateStyle={'my-2'} placeholder={''} /></div>
                    <div className='flex flex-col'>
                        <label className='my-2 text-sm font-semibold' htmlFor="password">
                            Password
                        </label>
                        <div className='relative w-full'>
                            <Input type="text"
                                id="password" onChange={undefined} value={''} updateStyle={'my-2 w-full'} placeholder={''} />
                            <i className="fa fa-eye absolute right-5 top-5" aria-hidden="true"></i>
                        </div>
                    </div>
                    <Button onClick={registerUserThroughEmailAndPassword} updateStyle='bg-[#7D76F3] w-full my-5 text-white text-sm'>
                        <span>Continue</span>
                    </Button>
                </form>
                <div className='text-sm'>
                    <p>Already have an account? <Link className="text-[#7D76F3]" href={'/sign-in'}>Sign in</Link></p>
                </div>
            </div>
        </section >
    )
}

export default SignUp