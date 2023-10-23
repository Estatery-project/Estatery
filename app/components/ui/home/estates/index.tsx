import React from 'react'
import Button from '../../Button'
import Link from 'next/link'
import {
    AreaIcon,
    BathIcon,
    BedIcon,
    EstatePopularity,
    HeartLogo,
} from '@/app/public/assets/icons/icons'
import EstateCard from '../../estateCard'

const HomeEstates = () => {
    return (
        <section className="bg-custom-gradient-estates ">
            <div className="container mx-auto ">
                {/* HOME PAGE ESTATE TITLE */}
                <div className="flex justify-between items-center pb-16">
                    <div>
                        <h1 className="text-[#000929] text-[40px] font-[700]">
                            Based on your location
                        </h1>
                        <p className="text-[16px] text-[#000929] opacity-[0.7]">
                            Some of our picked properties near you location.
                        </p>
                    </div>
                    <div>
                        <Button
                            type="button"
                            content="Browse more properties"
                            className="bg-[#7065F0] text-[#fff] rounded-[8px] px-8 py-4 text-4 font-[700]"
                        />
                    </div>
                </div>

                {/* ESTATES */}
                <div className="grid grid-cols-3 gap-8 container mx-auto">
                    {/* <div className="text-[#000929]">
                        <Link href={'#'}>
                            <div className="relative">
                                <img
                                    className="w-[352px] rounded-t-xl"
                                    src="https://s3-alpha-sig.figma.com/img/e241/f7e9/15b9d6b174b856e0c2a88b8d48db6d25?Expires=1698624000&Signature=pKmDU4XMgGCgJaXxv7ItBh7-us0gJi-FBN8bYx63pTxl2g0-6rcUl49wnvadvAxjJH85KGgT2WNZq1nLR6UxZBMNuvNROox6PWNLzjp57Kvwi~dOegmOt2WTNyvLwzwLS60q3Px4jB5xh9-Tc5i0fh5OSKSyGdYTN9fnciOhgwUe1wNYiZjzpLOpHTFYYA-6tTOW8~RfZP3Yb-tq2-5Ejw4sKRzD~swj2g0Gtd0A-zhm8ut3hEcB1xUcOQKU2fHF~kJNxXWY87taptazPtHAXZO6I1sPRDeoS66KaKxPpW3jhkgvfc8wAqFIFyKvihlZT3dQhELAbYhcwp3-cR1Vxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                />
                                <EstatePopularity className="absolute bottom-[-20px] left-[-15px]" />
                            </div>
                        </Link>

                        <div className="bg-[#fff] px-4 rounded-b-xl">
                            <div className="relative flex flex-col justify-between pt-8 space-y-2 py-1">
                                <p className="text-[#7065F0] text-[24px] font-[800] ">
                                    $2,095
                                    <span className="font-[400] text-[#000929] text-[16px] opacity-[0.5]">
                                        {' '}
                                        /month
                                    </span>
                                </p>
                                <span className="text-[24px] font-[700]">
                                    Palm Harbor
                                </span>
                                <p className="text-[16px] opacity-[0.5]">
                                    2699 Green Valley, Highland Lake, FL
                                </p>
                                <HeartLogo className="absolute right-0 top-4 cursor-pointer" />
                            </div>

                            <div className="flex flex-col pb-4">
                                <hr className="border-[#F0EFFB] border-[1.5px] my-3" />
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center space-x-2">
                                        <BedIcon />
                                        <span className="opacity-[0.7] text-[14px]">
                                            4 beds
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <BathIcon />
                                        <span className="opacity-[0.7] text-[14px]">
                                            2 Bathrooms
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <AreaIcon />
                                        <span className="opacity-[0.7] text-[14px]">
                                            5x7 m²
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <EstateCard />
                    <EstateCard />
                    <EstateCard />
                    <EstateCard />
                    <EstateCard />
                    <EstateCard />
                </div>
            </div>
        </section>
    )
}

export default HomeEstates
