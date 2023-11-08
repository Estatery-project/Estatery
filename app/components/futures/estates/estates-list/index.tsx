import React from 'react'
import { Suspense } from 'react'
import { useQuery } from '@tanstack/react-query'
import FilterState from '@/app/types/FilterEstate'
import getData from '@/app/services/estatesApi'
import EstateCard from '../estate-card'
import Estate from '@/app/types/Estate'

interface EstateListProps{
    searchParams: FilterState,
    className?: string
}

const EstatesList = async ({searchParams, className}: EstateListProps) => {
    const data = await getData(
        searchParams?.propertyType,
        searchParams?.location,
        searchParams?.type
    )

    return (
        <div className={`${className}`}>
            <div className="grid grid-cols-3 gap-8 container mx-auto">
                {data.length > 0
                    ? data?.map((estate: Estate) => {
                          return (
                              <EstateCard key={estate.id} estateData={estate} />
                          )
                      })
                    : 'There is no estate for filtering states'}
            </div>
        </div>
    )
}

export default EstatesList
