'use client'

import React, { useState } from 'react'
import {
    CloseHamburgerMenuIcon,
    DropDownIcon,
    FavoriteIcon,
    HamburgerMenuIcon,
    HeaderLogoIcon,
    HeartLogo,
} from '@/public/assets/icons/icons'
import Button from '../ui/Button'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import LoggedUserComponent from '@/app/components/ui/auth/loggeduser/LoggedUserComponent'
import { useSelector } from 'react-redux'
const Header = () => {
    //     const searchParams = useSearchParams()
    //     const type = searchParams.get('type')
    //     const location=searchParams.get('location');
    //     const minPrice=searchParams.get('minPrice');
    //     const maxPrice=searchParams.get('maxPrice');
    //     const propertyType=searchParams.get('propertyType');

    // console.log(type,location,minPrice,maxPrice,propertyType);
    const pathname = usePathname()
    const { data } = useSession()
    const favorite = useSelector((state: any) => state?.favorites?.items)
    const [openMenu, setOpenMenu] = useState<boolean>(false)

    const handleOpenMobileMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <div className="">
            {pathname != '/auth/signin' && pathname !== '/auth/signup' && (
                <div className="bg-[#fff]   border-b border-[#E0DEF7] xl:py-4  border-opacity-[0.7] fixed top-0 w-full z-[40] ">
                    <div className={`xl:max-w-[1280px]  z-[40] md:container mx-auto flex justify-between items-center whitespace-nowrap p-4 xl:p-0`}>
                        <Link href="/"  onClick={()=>  setOpenMenu(false)}>
                            <HeaderLogoIcon />
                        </Link>

                        <div className=" xl:block absolute xl:static z-[-10] xl:z-[50] bg-[#fff]  w-full  bottom-0 left-0 ">
                            <ul className={ `${openMenu ? 'translate-y-[100%] w-full transition-all duration-50 ':' translate-y-[-100%] z-[10] xl:z-[70] transition-all duration-50'}  xl:z-[70] xl:translate-y-[0] flex space-y-4 xl:space-y-0 flex-col bg-[#fff] px-8 py-2   xl:flex-row gap-x-12 xl:items-center text-[16px] font-[500] text-[#000929] `}>
                                <li className='text-[]' onClick={()=>  setOpenMenu(false)}>
                                    {' '}
                                    <Link
                                        prefetch={true}
                                        href={{
                                            pathname: '/buy',
                                            query: { type: 'rent' },
                                        }}
                                        
                                    >
                                        Rent
                                    </Link>
                                </li>

                                <li onClick={()=>  setOpenMenu(false)}>
                                    {' '}
                                    <Link
                                        href={{
                                            pathname: '/buy',
                                            query: { type: 'buy' },
                                        }}
                                      
                                    >
                                        Buy
                                    </Link>
                                </li>

                                <li>Sell</li>
                                <li>
                                    {' '}
                                    <Link
                                        href={{
                                            pathname: '/properties',
                                        }}
                                    >
                                        All Properties
                                    </Link>
                                </li>
                                <li className="flex items-center">
                                    Manage Property{' '}
                                    <DropDownIcon className="ml-2" />
                                </li>
                                <li className="flex items-center">
                                    Resources <DropDownIcon className="ml-2" />
                                </li>
                            </ul>
                        </div>

                        <div className="hidden  xl:flex space-x-3">
                            {!data?.user ? (
                                <Link
                                    href="/auth/signin"
                                    className="!bg-[#fff] border-[#E0DEF7] rounded-[8px] border-[2px] px-6 py-3 !text-[#7065F0]"
                                >
                                    Log In
                                </Link>
                            ) : (
                                <LoggedUserComponent userData={data} />
                                // <div className='flex space-x-5 items-center'>
                                //  <div>Dashboard</div>
                                //  <div className='border-[1px] border-[#000]'>
                                //         {/* <img src={data?.user?.image} alt='' />
                                //          */}
                                //          <div className='flex space-x-3'>
                                //            <span className='bg-indigo rounded-[50%] px-[20px] py-1 text-[#fff] font-[600]'>{data?.user?.name?.split('')[0]}</span>
                                //            <p className='text-[500]'>{data?.user?.name?.split(' ')[0]}</p>
                                //          </div>

                                //  </div>
                                // </div>
                            )}

                            {!data?.user && (
                                <Link
                                    href="/auth/signup"
                                    className="px-6 py-3 text-white bg-indigo  rounded-[8px] text-4 font-[700]"
                                >
                                    Sign Up
                                </Link>
                            )}

                            {!data?.user && (
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
                            )}
                        </div>

                        <div
                            className="xl:hidden"
                            onClick={handleOpenMobileMenu}
                        >
                         {!openMenu ?  <HamburgerMenuIcon /> : <CloseHamburgerMenuIcon />}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Header
