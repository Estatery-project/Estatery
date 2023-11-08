import React from 'react'
import Button from '../../Button'

import { FilterState } from '../../filter-bar/useFilterEstates'

import Link from 'next/link'
import {
    AreaIcon,
    BathIcon,
    BedIcon,
    EstatePopularity,
    HeartLogo,
} from '@/app/public/assets/icons/icons'
import EstateCard from '../../estate-card'
import Estate from '@/app/types/Estate'
import getData from '@/services/estatesApi'

interface FilterState {
    location: string
    calendar: any | null
    minPrice: string
    maxPrice: string
    propertyType: string
}

const HomeEstates = async ({ searchParams }: { searchParams: FilterState }) => {
    const data = await getData(
        searchParams?.propertyType,
        searchParams?.location
    )

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
                        <Button type="button" className="px-8 py-4">
                            Browse more properties
                        </Button>
                    </div>
                </div>

                {/* ESTATES */}
                <div className="grid grid-cols-3 gap-8 container mx-auto">
                    {data &&
                        data?.map((estate: Estate) => {
                            return (
                                <EstateCard
                                    key={estate.id}
                                    estateData={estate}
                                />
                            )
                        })}
                </div>
            </div>
        </section>
    )
}

export default HomeEstates
