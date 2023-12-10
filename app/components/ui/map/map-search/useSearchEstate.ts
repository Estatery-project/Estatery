import { useQuery } from '@tanstack/react-query'

import  searchEstates  from '../../../../services/searchApi'

export const useSearchEstates = (search: any, ) => {
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: [
            'estates',
  
        ],
        queryFn: () =>
        searchEstates(search),
        enabled: search.length !=='',
    }, )

    return { data, isLoading, error, refetch }
}