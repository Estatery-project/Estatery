import React from 'react'
import Link from 'next/link'
import {
    AreaIcon,
    BathIcon,
    BedIcon,
    EstatePopularity,
    HeartLogo,
} from '@/app/public/assets/icons/icons'
import Estate from '@/app/types/Estate'

type EstateCardProps = {
    estateData: Estate
}

const EstateCard = ({ estateData }: EstateCardProps) => {
    console.log(estateData,'estateData');
    
    return (
        <div className="text-[#000929]">
            <Link href={'#'}>
                <div className="relative">
                    {/* <img
                        className="w-[352px] rounded-t-xl"
                        src={estateData?.baseImg}
                    /> */}
                    <img className='w-[352px] h-[235px] object-cover rounded-t-lg' src={estateData?.baseImg} alt={estateData?.title} />
                    <EstatePopularity className="absolute bottom-[-20px] left-[-15px]" />
                </div>
            </Link>

            <div className="bg-[#fff] px-4 rounded-b-xl">
                <div className="relative flex flex-col justify-between pt-8 space-y-2 py-1">
                    <p className="text-[#7065F0] text-[24px] font-[800] ">
                        {estateData?.price}$
                        <span className="font-[400] text-[#000929] text-[16px] opacity-[0.5]">
                            {estateData?.type === 'rent'
                                ? ' /month'
                                : estateData?.type === 'buy'
                                ? ' /sale'
                                : ''}
                        </span>
                    </p>
                    <span className="text-[24px] font-[700]">
                        {estateData?.title}
                    </span>
                    <p className="text-[16px] opacity-[0.5]">
                        {estateData?.description}
                    </p>
                    <HeartLogo className="absolute right-0 top-4 cursor-pointer" />
                </div>

                <div className="flex flex-col pb-4">
                    <hr className="border-[#F0EFFB] border-[1.5px] my-3" />
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <BedIcon />
                            <span className="opacity-[0.7] text-[14px]">
                                {estateData?.bedroom} Beds
                            </span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <BathIcon />
                            <span className="opacity-[0.7] text-[14px]">
                                {estateData?.bathroom} Bathrooms
                            </span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <AreaIcon />
                            <span className="opacity-[0.7] text-[14px]">
                                {estateData?.area}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EstateCard
