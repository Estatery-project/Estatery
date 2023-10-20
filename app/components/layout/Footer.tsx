'use client'

import React from 'react'
import { MainLogo } from '@/app/public/assets/icons/icons'
import {
    TwitterIcon,
    FacebookIcon,
    LinkedinIcon,
    InstagramIcon,
} from '@/app/public/assets/icons/icons'

const Footer = () => {
    return (
        <section className="flex justify-center items-center   mx-auto absolute  bottom-0 w-full">
            <footer className="container flex flex-col justify-center items-center  ">
                <div className="flex justify-between w-full py-20">
                    <div className="">
                        <MainLogo />
                    </div>
                    <div className="grid grid-cols-3 gap-x-40 gap-y-9">
                        <div className="flex flex-col text-4">
                            <h1 className="font-[700] pb-4">SELL A HOME</h1>
                            <span className="text-[#000929] opacity-[0.7] font-[500]">
                                Request an offer
                            </span>
                            <span className="text-[#000929] opacity-[0.7] font-[500]">
                                Buy
                            </span>
                            <span className="text-[#000929] opacity-[0.7] font-[500]">
                                Pricing
                            </span>
                            <span className="text-[#000929] opacity-[0.7] font-[500]">
                                Stories
                            </span>
                        </div>
                        <div className="flex flex-col text-4">
                            <h1 className="font-[700] pb-4">SELL A HOME</h1>
                            <span className="text-[#000929] opacity-[0.7] font-[500]">
                                Request an offer
                            </span>
                            <span className="text-[#000929] opacity-[0.7] font-[500]">
                                Buy
                            </span>
                            <span className="text-[#000929] opacity-[0.7] font-[500]">
                                Pricing
                            </span>
                            <span className="text-[#000929] opacity-[0.7] font-[500]">
                                Stories
                            </span>
                        </div>
                        <div className="flex flex-col text-4">
                            <h1 className="font-[700] pb-4">SELL A HOME</h1>
                            <span className="text-[#000929] opacity-[0.7] font-[500]">
                                Request an offer
                            </span>
                            <span className="text-[#000929] opacity-[0.7] font-[500]">
                                Buy
                            </span>
                            <span className="text-[#000929] opacity-[0.7] font-[500]">
                                Pricing
                            </span>
                            <span className="text-[#000929] opacity-[0.7] font-[500]">
                                Stories
                            </span>
                        </div>
                        <div className="flex flex-col text-4">
                            <h1 className="font-[700] pb-4">SELL A HOME</h1>
                            <span className="text-[#000929] opacity-[0.7] font-[500]">
                                Request an offer
                            </span>
                            <span className="text-[#000929] opacity-[0.7] font-[500]">
                                Buy
                            </span>
                            <span className="text-[#000929] opacity-[0.7] font-[500]">
                                Pricing
                            </span>
                            <span className="text-[#000929] opacity-[0.7] font-[500]">
                                Stories
                            </span>
                        </div>
                        <div className="flex flex-col text-4">
                            <h1 className="font-[700] pb-4">SELL A HOME</h1>
                            <span className="text-[#000929] opacity-[0.7] font-[500]">
                                Request an offer
                            </span>
                            <span className="text-[#000929] opacity-[0.7] font-[500]">
                                Buy
                            </span>
                            <span className="text-[#000929] opacity-[0.7] font-[500]">
                                Pricing
                            </span>
                            <span className="text-[#000929] opacity-[0.7] font-[500]">
                                Stories
                            </span>
                        </div>
                        <div className="flex flex-col text-4">
                            <h1 className="font-[700] pb-4">SELL A HOME</h1>
                            <span className="text-[#000929] opacity-[0.7] font-[500]">
                                Request an offer
                            </span>
                            <span className="text-[#000929] opacity-[0.7] font-[500]">
                                Buy
                            </span>
                            <span className="text-[#000929] opacity-[0.7] font-[500]">
                                Pricing
                            </span>
                            <span className="text-[#000929] opacity-[0.7] font-[500]">
                                Stories
                            </span>
                        </div>
                    </div>
                </div>
                <hr className="border-[1px] w-full absolute bottom-16 border-[#E8E6F9]" />

                <div className="flex container justify-between ">
                    <div className='opacity-[0.5] text-[#000929] font-[500]'>©2021 Estatery. All rights reserved</div>
                    <div className="flex justify-between w-[216px] pb-5">
                        <FacebookIcon className="opacity-[0.5]" />
                        <TwitterIcon className="opacity-[0.5]" />
                        <InstagramIcon className="opacity-[0.5]" />
                        <LinkedinIcon className="opacity-[0.5]" />
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default Footer
