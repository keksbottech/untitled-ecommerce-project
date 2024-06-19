import { PlusIcon } from '@radix-ui/react-icons';
import { IconClock } from '@tabler/icons-react'
import Image from 'next/image'
import React from 'react'

type NotificationsPropTypes = {
    isBtnClicked: boolean;
    setIsBtnClicked: (arg1: boolean) => void;
}
const Notifications = ({ isBtnClicked, setIsBtnClicked }: NotificationsPropTypes) => {

    const toggleNotifications = () => {
        setIsBtnClicked(!isBtnClicked)
    }
    return (
        <section className={`absolute bg-white shadow-xl h-[100dvh] top-0 z-[10000] p-5 left-0 ${isBtnClicked ? "block" : "hidden"}`}>
            <div className="flex items-center justify-between">
                <div>
                    <h2 className='font-bold text-lg'>Notifications</h2>
                    <p className="">You have 9 unread messages</p>
                </div>
                <PlusIcon className="rotate-45 text-3xl" onClick={toggleNotifications} fontSize={30} />

            </div>
            <div className='mt-5'>
                <p className='uppercase font-bold text-lg'>new</p>
                <div className='flex items-center bg-[#eee] p-6 rounded-lg mt-5'>
                    <Image
                        width={50}
                        height={50}
                        className='rounded-full' alt=""
                        src="/images/profile/user-1.jpg"
                    />
                    <div className="ml-3">
                        <p className='capitalize'>your account was credited by automated bank transfer 1950.00</p>
                        <div className="flex items-center mt-2">
                            <IconClock className='mr-2' size={20} />
                            <span>2024-06-15 </span>
                            <span className="ml-2">16:35:06</span>
                        </div>
                    </div>
                </div>

                <div className='flex items-center bg-[#eee] p-6 rounded-lg mt-5'>
                    <Image
                        width={50}
                        height={50}
                        className='rounded-full' alt=""
                        src="/images/profile/user-1.jpg"
                    />
                    <div className="ml-3">
                        <p className='capitalize'>your account was credited by automated bank transfer 1950.00</p>
                        <div className="flex items-center mt-2">
                            <IconClock className='mr-2' size={20} />
                            <span>2024-06-15 </span>
                            <span className="ml-2">16:35:06</span>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Notifications