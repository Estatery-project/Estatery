'use client'

import {
    TwitterIcon,
    FacebookIcon,
    LinkedinIcon,
    InstagramIcon,
    MainLogo,
} from '@/public/assets/icons/icons'

import { usePathname } from 'next/navigation'

const Footer = () => {
    const pathname = usePathname()

    return (
        <>
            {pathname != '/auth/signin' && pathname !=='/auth/signup' && (
                <section className="flex justify-center items-center   mx-auto relative  bottom-0 w-full ">
                    <footer className="container flex flex-col justify-center items-center  ">
                        <div className="flex flex-col xl:flex-row gap-y-16 xl:gap-y-0 justify-between w-full py-20">
                            <div className="px-4 xl:px-0">
                                <MainLogo />
                            </div>
                            <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-4 xl:gap-x-40 gap-y-9 px-4 xl:px-0">
                                <div className="flex flex-col text-4">
                                    <h1 className="font-[700] pb-4">
                                        SELL A HOME
                                    </h1>
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
                                    <h1 className="font-[700] pb-4">
                                        SELL A HOME
                                    </h1>
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
                                    <h1 className="font-[700] pb-4">
                                        SELL A HOME
                                    </h1>
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
                                    <h1 className="font-[700] pb-4">
                                        SELL A HOME
                                    </h1>
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
                                    <h1 className="font-[700] pb-4">
                                        SELL A HOME
                                    </h1>
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
                                    <h1 className="font-[700] pb-4">
                                        SELL A HOME
                                    </h1>
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
                            <div className="opacity-[0.5] text-[#000929] font-[500]">
                                ©2021 Estatery. All rights reserved
                            </div>
                            <div className="flex justify-between w-[216px] pb-5">
                                <FacebookIcon className="opacity-[0.5]" />
                                <TwitterIcon className="opacity-[0.5]" />
                                <InstagramIcon className="opacity-[0.5]" />
                                <LinkedinIcon className="opacity-[0.5]" />
                            </div>
                        </div>
                    </footer>
                </section>
            )}
        </>
    )
}

export default Footer
