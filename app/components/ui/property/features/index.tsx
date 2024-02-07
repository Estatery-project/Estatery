import React from 'react'
import { BedIcon, BathIcon, AreaIcon } from '@/public/assets/icons/icons'

type FeaturesProps = {
    area: string
    bedroom: number
    bathroom: number
    repaired: boolean
    status: boolean
}

const Features = ({
    bedroom,
    area,
    bathroom,
    repaired,
    status,
}: FeaturesProps) => {
    console.log(bathroom, 'bathroom')

    return (
        <div className="flex justify-between items-center border rounded-[8px] lg:min-w-[738px] mt-[24px] border-[#F0EFFB] px-4 py-2">
            {bedroom && (
                <div className="flex flex-col gap-y-3">
                    <p className="lg:text-4 font-[500] text-[#000929] opacity-[0.5]">
                        Bedroom
                    </p>
                    <div className="flex items-center space-x-3">
                        <BedIcon />
                        <span className="font-[700]">{bedroom}</span>
                    </div>
                </div>
            )}

            {bathroom && (
                <div className="flex flex-col gap-y-3">
                    <p className="lg:text-4 font-[500] text-[#000929] opacity-[0.5]">
                        Bathroom
                    </p>
                    <div className="flex items-center space-x-3">
                        <BedIcon />
                        <span className="font-[700]">{bathroom}</span>
                    </div>
                </div>
            )}
            {area && (
                <div className="flex flex-col gap-y-3">
                    <p className="lg:text-4 font-[500] text-[#000929] opacity-[0.5]">
                        Area
                    </p>
                    <div className="flex items-center space-x-3">
                        <BedIcon />
                        <span className="font-[700]">{area}</span>
                    </div>
                </div>
            )}
            <div className="flex flex-col gap-y-3">
                <p className="lg:text-4 font-[500] text-[#000929] opacity-[0.5]">
                    Repaired
                </p>
                <div className="flex items-center space-x-3">
                    <BedIcon />
                    <span className="font-[700]">
                        {repaired ? 'Yes' : 'No'}
                    </span>
                </div>
            </div>
            <div className="flex flex-col gap-y-3">
                <p className="lg:text-4 font-[500] text-[#000929] opacity-[0.5]">
                    Status
                </p>
                <div className="flex items-center space-x-3">
                    <BedIcon />
                    <span className="font-[700]">
                        {status ? 'active' : 'not active'}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Features
