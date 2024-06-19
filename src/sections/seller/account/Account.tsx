import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from 'next/image'
import React from 'react'

const Account = () => {
    return (
        <section className='flex flex-col xl:flex-row flex-items justify-between mt-10'>
            <Card className='xl:w-[40%] w-full flex flex-col items-center justify-center'>
                <CardHeader>
                    <CardTitle>
                        <Image src="/images/profile/user-1.jpg" alt="image" width={200} height={200} className='rounded-full' />
                    </CardTitle>
                    <CardDescription className='text-center text-2xl text-black capitalize font-medium'>Sofia rivers</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-center capitalize">los angeles USA</p>
                </CardContent>
                <CardFooter >
                    <Button variant={'purple'}>
                        Upload picture
                    </Button>
                </CardFooter>
            </Card>

            <Card className='w-full xl:w-[60%] mt-10 xl:mt-0 mx-0 xl:mx-10'>
                <CardHeader>
                    <CardTitle>Profile</CardTitle>
                    <CardDescription>The information can be edited</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col xl:flex-row my-3">
                            <Input className='p-5 py-7 mr-3' placeholder='First name*' />
                            <Input className='p-5 py-7 mr-3' placeholder='Last name*' />
                        </div>
                        <div className="flex flex-col xl:flex-row my-3">
                            <Input className='p-5 py-7 mr-3' placeholder='Email Address*' />
                            <Input className='p-5 py-7 mr-3' placeholder='Phone number' />
                        </div>
                        <div className="flex flex-col xl:flex-row my-3">
                            <Select >
                                <SelectTrigger className="p-5 py-7 mr-3">
                                    <SelectValue className="" placeholder="State" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Fruits</SelectLabel>
                                        <SelectItem value="apple">Apple</SelectItem>
                                        <SelectItem value="banana">Banana</SelectItem>
                                        <SelectItem value="blueberry">Blueberry</SelectItem>
                                        <SelectItem value="grapes">Grapes</SelectItem>
                                        <SelectItem value="pineapple">Pineapple</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Input className='p-5 py-7 mr-3' placeholder='City' />
                        </div>
                    </form>
                </CardContent>
                <CardFooter className='flex items-end justify-end w-full '>
                    <Button variant={'purple'} className="mr-3">
                        Save details
                    </Button>
                </CardFooter>
            </Card>

        </section >
    )
}

export default Account