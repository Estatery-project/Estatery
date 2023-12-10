import { useQuery } from '@tanstack/react-query'

import getData from '@/app/services/estatesApi'

export const useSimiliarProperties = (
    propertyType:any,
    location:any,
    type:any,
) => {
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ['similiarProperties'],
        queryFn: () => getData(propertyType, location, type,''),
    })

    return { data, isLoading, error, refetch }
}
