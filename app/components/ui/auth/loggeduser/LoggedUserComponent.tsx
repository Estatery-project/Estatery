'use client'

import React, { useState } from 'react'
import FilterBar from '@/app/components/ui/filter-bar'
import { DropDownIcon, HeartLogo } from '@/public/assets/icons/icons'
import { HelpIcon, LogOutIcon, ProfileIcon } from '@/public/assets/icons/icons'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { useSelector } from 'react-redux'

interface Props {
    userData: any
}

const LoggedUserComponent = ({ userData }: Props) => {
    const [isOpen, setIsOpen] = useState(false)
    const favorite = useSelector((state: any) => state?.favorites?.items)

    const handleOpenLogOutBox = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className="">
            <div className="flex space-x-5 items-center relative w-[255px]">
                <div>Dashboard</div>
                <div className="border-[1px] border-[#E0DEF7] h-[40px]" />
                <div className="border-[2px] border-[#E0DEF7] rounded-[8px] ">
                    {/* <img src={data?.user?.image} alt='' />
                     */}
                    <div className="flex space-x-3 items-center p-2 ">
                        <span className="bg-indigo rounded-[50%] px-3 py-1 text-[#fff] font-[600]">
                            {userData?.user?.name?.split('')[0]}
                        </span>
                        <div
                            className="space-x-2 flex items-center cursor-pointer"
                            onClick={handleOpenLogOutBox}
                        >
                            <span className="text-[500]">
                                {userData?.user?.name?.split(' ')[0]}
                            </span>
                            <span>
                                <DropDownIcon className="" />
                            </span>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <ul className="absolute top-[55px] right-0 border-[2px] bg-[#fff]  border-[#E0DEF7] rounded-[8px] px-4 py-1 w-[200px]">
                        <li className="border-b-[1px] border-[#E0DEF7] py-3 text-[#000929] flex item-center space-x-4">
                            <ProfileIcon /> <span>My Profile</span>
                        </li>
                        <li className="border-b-[1px] border-[#E0DEF7] py-3 text-[#000929] flex item-center space-x-4">
                            <HelpIcon /> <span>My Info</span>
                        </li>
                        <li
                            className=" border-[#E0DEF7] py-3 text-[#000929] flex item-center space-x-4 cursor-pointer"
                            onClick={() => signOut()}
                        >
                            <LogOutIcon /> <span>Log out</span>
                        </li>
                        {/* <li
                            className=" border-[#E0DEF7] py-3 text-[#000929] flex item-center space-x-4 cursor-pointer"
                            onClick={() => signOut()}
                        >
                            <span>Favorites</span>
                           <div className={`relative`}>
                                <Link href="/favorites">
                                    <HeartLogo className="w-[40px] h-[40px]" />
                                    {favorite.length > 0 && (
                                        <span className="bg-[#7065F0] rounded-full flex w-[24px] h-[24px] top-[-4px] right-[-8px] items-center text-[#fff] justify-center absolute">
                                            {favorite.length}
                                        </span>
                                    )}
                                </Link>
                            </div>
                        </li> */}
                    </ul>
                )}

                <div className={`relative`}>
                    <Link href="/favorites">
                        <HeartLogo className="w-[50px] h-[50px]" />
                        {favorite.length > 0 && (
                            <span className="bg-[#7065F0] rounded-full flex w-[24px] h-[24px] top-[-4px] right-[-8px] items-center text-[#fff] justify-center absolute">
                                {favorite.length}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LoggedUserComponent
