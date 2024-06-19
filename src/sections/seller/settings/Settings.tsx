import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import React from 'react'



const Settings = () => {


    return (
        <section className='mt-10'>
            <Card className=' w-full '>
                <CardHeader className='border-b-[.5px] '>
                    <CardTitle className='font-bold text-2xl'>
                        Notification
                    </CardTitle>
                    <CardDescription className=''>Manage the notifications</CardDescription>
                </CardHeader>
                <CardContent className='grid grid-cols-2 border-b-[.5px] p-10'>
                    <div className=''>
                        <p className="font-bold text-lg">Email</p>
                        <div className='flex items-center mt-5'>
                            <Checkbox />
                            <p className='ml-3'>Product updates</p>
                        </div>
                        <div className='flex items-center  mt-5'>
                            <Checkbox />
                            <p className='ml-3'>Security updates</p>
                        </div>
                    </div>

                    <div>
                        <p className="font-bold text-lg">Phone</p>
                        <div className='flex items-center mt-5'>
                            <Checkbox />
                            <p className='ml-3'>Product updates</p>
                        </div>
                        <div className='flex items-center mt-5'>
                            <Checkbox />
                            <p className='ml-3'>Security updates</p>
                        </div>
                    </div>

                </CardContent>
                <CardFooter className='p-5 flex items-end justify-end'>
                    <Button variant={'purple'}>
                        Save changes                    </Button>
                </CardFooter>
            </Card>

            <Card className=' w-full mt-10'>
                <CardHeader className='border-b-[.5px] '>
                    <CardTitle className='font-bold text-2xl'>
                        Password
                    </CardTitle>
                    <CardDescription className=''>Update password</CardDescription>
                </CardHeader>
                <CardContent className='border-b-[.5px] py-10 '>
                    <Input placeholder='Password' className='p-5 py-7 text-lg w-full xl:w-[60%]' />
                    <Input placeholder='Confirm password' className='p-5 py-7 text-lg mt-5 w-full xl:w-[60%]' />
                </CardContent>
                <CardFooter className='flex items-end justify-end p-5' >
                    <Button variant={'purple'}>
                        Update
                    </Button>
                </CardFooter>
            </Card>
        </section>
    )
}

export default Settings