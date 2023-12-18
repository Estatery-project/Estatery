'use client'
import { useQuery } from '@tanstack/react-query'

import getUsers from '@/app/services/usersApi'

export const useUsers = () => {
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: () => getUsers(),
    })

    return { data, isLoading, error, refetch }
}
