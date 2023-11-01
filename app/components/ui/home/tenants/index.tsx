'use client'
import { useState } from 'react'

import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

import Image from 'next/image'
import HomeImage from '../../../../public/assets/images/Home-1.png'
import Button from '../../button'

import {
    ArrowRigtIcon,
    FindTheBestDealIcon,
    VirtualHomeTourIcon,
} from '@/app/public/assets/icons/icons'

const Tenants = () => {
    const [tabIndex, setTabIndex] = useState(0)

    return (
        <section className="container mx-auto py-[100px] ">
            <div className="flex items-center  gap-20">
                <figure className="bg-gradient-to-b from-[#c9c4f4] to-[#f2e3f9]  w-[100%] rounded-lg  relative ">
                    <Image src={HomeImage} alt="" className="w-[100%]" />

                    <VirtualHomeTourIcon className="absolute top-[-40px] left-[-160px]" />
                    <div className="absolute bottom-[-22%] left-[-10%]">
                        <FindTheBestDealIcon />
                    </div>
                </figure>

                <div className="flex flex-col gap-8 px-[40px]">
                    <div>
                        <Tabs
                            value={tabIndex}
                            onChange={(e, index) => setTabIndex(index)}
                        >
                            <Tab disableRipple label={'For tenants'} />
                            <Tab disableRipple label={'For landlors'} />
                        </Tabs>
                    </div>
                    <h2 className="text-blue-black text-[40px] font-bold">
                        We make it easy for tenants and landlords.
                    </h2>
                    <p className="text-blue-gray-500 text-base font-medium leading-6 w-[80%]">
                        Whether it’s selling your current home, getting
                        financing, or buying a new home, we make it easy and
                        efficient. The best part? you’ll save a bunch of money
                        and time with our services.
                    </p>
                    <Button className="py-3 px-6 flex items-center self-start gap-2 ">
                        See more <ArrowRigtIcon />
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Tenants

{
    /* <div className="flex items-center gap-6 bg-[#fff] shadow-[rgba(112, 101, 240, 0.20)] z-10 rounded-lg py-6 ps-8 pr-14 absolute top-6 left-[-120px] ">
                        <VideoVirtualIcon />
                        <div className="">
                            <h3 className="font-bold text-xl text-[#100A55] mb-[2px]">
                                Virtual home tour
                            </h3>
                            <p className="text-base text-[#4D5461] font-normal">
                                We provide you with virtual tour
                            </p>
                        </div>
                    </div> */
}
