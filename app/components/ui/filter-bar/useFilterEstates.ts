import React from 'react'
import getData from '@/services/estatesApi'
import { useQuery } from '@tanstack/react-query'

export interface FilterState {
    location: string
    calendar: any | null
    minPrice: string
    maxPrice: string
    propertyType: string
}
export const useFilterEstates = (selectedFilter: FilterState, Enabled: any) => {
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: [
            'estates',
            selectedFilter.propertyType,
            selectedFilter.location,
        ],
        queryFn: () =>
            getData(selectedFilter.propertyType, selectedFilter.location),
    })

    return { data, isLoading, error, refetch }
}
