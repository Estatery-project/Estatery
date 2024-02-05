'use client'

import React, { useEffect, useState } from 'react'
// import { useSearchParams } from 'next/navigation'
import { useSelector } from 'react-redux'
import EstateCard from '../estate-card'
import FilterState from '@/app/types/FilterEstate'
import { useFilterEstates } from '@/app/components/ui/filter-bar/useFilterEstates'

type FavoriteEstatesProps = {
    estatesSearchParams: FilterState
}

const FavoriteEstates = ({ estatesSearchParams }: FavoriteEstatesProps) => {
    const favorite = useSelector((state: any) => state?.favorites?.items)

    // const searchParams = useSearchParams()
    // const location = searchParams.get('location')
    console.log(estatesSearchParams, 'estatesSearchParams')
    const {
        data: FilteredData,
        isLoading,
        error,
    } = useFilterEstates(estatesSearchParams, false)

    

    if (isLoading) {
        return <p style={{ textAlign: 'center' }}>loading...</p>
    }



    const resultData =
        favorite?.filter(
            (item: any, index: number) => item.id == FilteredData?.[index]?.id
        ) || []

    console.log(resultData, 'resultData')

    return (
        <section>
            <div className="mb-12">
                <div className="grid grid-cols-3 gap-8 container mx-auto">
                    {(resultData.length > 0 ? resultData : favorite).map(
                        (estate: any) => {
                            return <EstateCard estateData={estate} />
                        }
                    )}
                </div>
            </div>
        </section>
    )
}

export default FavoriteEstates
