'use client'

import Estate from '@/app/types/Estate'
import React from 'react'
import EstateCard from '@/app/components/futures/estates/estate-card'
import { useSimiliarProperties } from './useSimiliarProperties'

interface Props {
    propertyType: string
    propertyId: number
}

const SimilarEstates = ({ propertyType, propertyId }: Props) => {
    const {
        data: similiarEstateData,
        isLoading,
        error,
    } = useSimiliarProperties(propertyType, '', '')

    if (isLoading) {
        return <div>Loading...</div>
    }

    const filteredData = similiarEstateData.filter(
        (estate: Estate) => estate.id !== propertyId
    )
    return (
        <section className="bg-[#F7F7FD] px-32 py-16 mt-16">
            <div className="flex flex-col container mx-auto">
                <div className="">
                    <h2 className="lg:text-[24px] font-[700] text-[#000929] mb-8">
                        Similar listings
                    </h2>
                </div>
                <div className="lg:flex justify-between  ">
                    {filteredData && filteredData.length > 0
                        ? filteredData.slice(0, 3).map((estate: Estate) => {
                              return (
                                  <EstateCard
                                      key={estate.id}
                                      estateData={estate}
                                  />
                              )
                          })
                        : 'There is no estate for filtering states'}
                </div>
            </div>
        </section>
    )
}

export default SimilarEstates
