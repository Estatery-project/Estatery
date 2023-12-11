'use client'

import React from 'react'
import { DropDownIcon, HeaderLogoIcon } from '@/public/assets/icons/icons'
import Button from '../ui/Button'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const Header = () => {
    //     const searchParams = useSearchParams()
    //     const type = searchParams.get('type')
    //     const location=searchParams.get('location');
    //     const minPrice=searchParams.get('minPrice');
    //     const maxPrice=searchParams.get('maxPrice');
    //     const propertyType=searchParams.get('propertyType');

    // console.log(type,location,minPrice,maxPrice,propertyType);

    const handlefunc = () => {}

    return (
        <header className="bg-white  border-b border-[#E0DEF7] py-4  border-opacity-[0.7] fixed top-0 w-full z-10">
            <div className="xl:max-w-[1280px] md:container mx-auto flex justify-between items-center">
                <div className="">
                    <Link href="/">
                        <HeaderLogoIcon />
                    </Link>
                </div>

                <div>
                    <ul className="flex gap-x-12 items-center text-[16px] font-[500] text-[#000929]">
                        <Link
                            prefetch={true}
                            href={{
                                pathname: '/buy',
                                query: { type: 'rent' },
                            }}
                        >
                            <li>Rent</li>
                        </Link>

                        <Link
                            href={{
                                pathname: '/buy',
                                query: { type: 'buy' },
                            }}
                        >
                            <li>Buy</li>
                        </Link>

                        <li>Sell</li>
                        <Link
                            href={{
                                pathname: '/properties',
                            }}
                        >
                            <li>All Properties</li>
                        </Link>
                        <li className="flex items-center">
                            Manage Property <DropDownIcon className="ml-2" />
                        </li>
                        <li className="flex items-center">
                            Resources <DropDownIcon className="ml-2" />
                        </li>
                    </ul>
                </div>
                <div className=" flex space-x-3">
                    <Link
                        href="/auth/signin"
                        className="!bg-[#fff] border-[#E0DEF7] rounded-[8px] border-[2px] px-6 py-3 !text-[#7065F0]"
                    >
                        Log In
                    </Link>

                    <Link
                        href="/register"
                        className="px-6 py-3 text-white bg-indigo  rounded-[8px] text-4 font-[700]"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header
