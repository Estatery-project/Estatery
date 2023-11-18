import { useQuery } from '@tanstack/react-query'

import getData from '@/app/services/estatesApi'
import FilterState from '@/app/types/FilterEstate'

export const useFilterEstates = (selectedFilter: any, Enabled: any) => {
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: [
            'estates',
            selectedFilter.propertyType,
            selectedFilter.location,
            selectedFilter.type,
        ],
        queryFn: () =>
            getData(
                selectedFilter.propertyType,
                selectedFilter.location,
                selectedFilter.type
            ),
    })

    return { data, isLoading, error, refetch }
}
