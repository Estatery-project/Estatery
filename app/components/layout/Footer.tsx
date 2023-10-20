'use client'

import React from 'react'
import { MainLogo } from '@/app/public/assets/icons/icons'

const Footer = () => {
    return (
        <footer className="flex mx-auto sticky   bottom-0 container   justify-center items-center">
            <div className="flex">
                <div className="">
                    <MainLogo />
                </div>
                <div className="grid grid-cols-3 gap-x-2 gap-y-9">
                    <div className=''>
                        <h1 className='font-[700]'>SELL A HOME</h1>
                        <span className='text-[#000929]'>Buy</span>
                        <span className='text-[#000929]'>Buy</span>

                    </div>
                    <div>
                        <h1>SELL A HOME</h1>
                        <span>Buy</span>
                        <span>Builder trade-up</span>
                        <span>Builder trade-up</span>
                    </div>
                    <div>
                        <h1>SELL A HOME</h1>
                        <span>Buy</span>
                        <span>Builder trade-up</span>
                        <span>Builder trade-up</span>
                    </div>
                    <div>
                        <h1>SELL A HOME</h1>
                        <span>Buy</span>
                        <span>Builder trade-up</span>
                        <span>Builder trade-up</span>
                    </div>
                    <div>
                        <h1>SELL A HOME</h1>
                        <span>Buy</span>
                        <span>Builder trade-up</span>
                        <span>Builder trade-up</span>
                    </div>
                </div>
            </div>

            <div></div>
        </footer>
    )
}

export default Footer
