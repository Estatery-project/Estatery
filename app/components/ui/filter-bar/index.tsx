'use client'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import getTodos from '@/services/locationsApi'

const FilterBar = () => {
    const query = useQuery({ queryKey: ['todos'], queryFn: getTodos })
    const { data, isLoading, error } = query
    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error</div>
    }


    return <div>
        
    </div>
}

export default FilterBar
