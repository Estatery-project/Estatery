import { useQuery } from '@tanstack/react-query'

import getData from '@/app/services/estatesApi'

import FilterState from '@/app/types/FilterEstate'

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
