import { useQuery } from '@tanstack/react-query'

import getTodos from '@/app/services/locationsApi'

export const useFilter = () => {
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ['locations'],
        queryFn: () => getTodos(),
    })

    return { data, isLoading, error, refetch }
}
