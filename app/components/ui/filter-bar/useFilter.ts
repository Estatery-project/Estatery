import { useQuery } from '@tanstack/react-query'
import getData from '@/services/estatesApi'
import getTodos from '@/services/locationsApi'

interface FilterState {
    location: string
    calendar: any | null
    minPrice: string
    maxPrice: string
    propertyType: string
}

export const useFilter = () => {
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ['locations'],
        queryFn: () => getTodos(),
    })

    return { data, isLoading, error, refetch }
}
