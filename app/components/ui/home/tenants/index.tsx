'use client'

import { useState } from 'react'

import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

import {
    ArrowRigtIcon,
    FindTheBestDealIcon,
    VirtualHomeTourIcon,
} from '@/public/assets/icons/icons'

import Image from 'next/image'
import HomeImage from '@/public/assets/images/Home-1.png'
import Button from '../../Button'

const Tenants = () => {
    const [tabIndex, setTabIndex] = useState(0)

    return (
        <section className="container mx-auto py-[100px] ">
            <div className="flex flex-col xl:flex-row items-center  gap-20 px-10 xl:px-0">
                <figure className="bg-gradient-to-b from-[#c9c4f4] to-[#f2e3f9]   xl:w-[100%] rounded-lg  relative ">
                    <Image src={HomeImage} alt="" className="  xl:w-[100%]  rounded-lg" />

                    <VirtualHomeTourIcon className="absolute xl:w-[100%] px-4 top-[-40px] hidden xl:block  left-[-160px]" />
                    <div className="absolute bottom-[-22%] hidden xl:block left-[-10%]">
                        <FindTheBestDealIcon />
                    </div>
                </figure>

                <div className="flex flex-col items-center  xl:items-start gap-8 xl:px-[40px]">
                    <div>
                        <Tabs
                            value={tabIndex}
                            onChange={(e, index) => setTabIndex(index)}
                        >
                            <Tab disableRipple label={'For tenants'} />
                            <Tab disableRipple label={'For landlors'} />
                        </Tabs>
                    </div>
                    <h2 className="text-blue-black text-center xl:text-start text-3xl xl:text-[40px] font-bold">
                        We make it easy for tenants and landlords.
                    </h2>
                    <p className="text-blue-gray-500 text-base text-center xl:text-start font-medium leading-6 xl:w-[80%]">
                        Whether it’s selling your current home, getting
                        financing, or buying a new home, we make it easy and
                        efficient. The best part? you’ll save a bunch of money
                        and time with our services.
                    </p>
                    <Button
                        type="button"
                        className="py-3 px-6 flex items-center xl:self-start gap-2 "
                    >
                        See more <ArrowRigtIcon />
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Tenants
