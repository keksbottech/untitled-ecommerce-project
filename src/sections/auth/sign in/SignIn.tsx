'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SignIn = () => {

    const enableGoogleAuth = () => {

    }

    const signInUserThroughEmailAndPassword = () => {

    }
    return (
        <section className=' flex flex-col justify-center items-center w-full h-[100dvh]'>
            <div className='bg-white shadow-2xl flex flex-col items-center w-full justify-center max-w-[600px] p-5 rounded-lg'>
                <span className='font-bold'>Sign in to Title</span>
                <p className="font-light text-sm mt-1 text-gray-500">Welcome! Please sign in to continue</p>
                <div className="">
                    <Button variant={'outline'} onClick={enableGoogleAuth} className={'px-10 my-5 flex items-center justify-center'}>
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

                <form action="" className='w-full px-10'>
                    <div className='flex flex-col'>

                        <div className='flex flex-col w-full'>
                            <label className='my-2 text-sm  font-semibold' htmlFor="email">Email address</label>
                            <Input type="text"
                                id="email" onChange={undefined} value={''} className={'my-2 w-full'} placeholder={''} /></div>
                        <div className='flex flex-col'>
                            <label className='my-2 text-sm font-semibold' htmlFor="password">
                                Password
                            </label>
                            <div className='relative w-full'>
                                <Input type="text"
                                    id="password" onChange={undefined} value={''} className={'my-2 w-full'} placeholder={''} />
                                <i className="fa fa-eye absolute right-5 top-5" aria-hidden="true"></i>
                            </div>
                        </div>
                        <Button onClick={signInUserThroughEmailAndPassword} className='bg-[#7D76F3] w-full my-5 text-white text-sm'>
                            <span>Continue</span>
                        </Button>
                    </div>
                </form>
                <div className='text-sm'>
                    <p>{"Don't"} have an account? <Link className="text-[#7D76F3]" href={'/sign-up'}>Sign up</Link></p>
                </div>
            </div>
        </section >
    )
}

export default SignIn