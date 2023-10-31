'use client'
import React from 'react'
import { useQuery } from '@tanstack/react-query'

const FilterBar = () => {
    const getTodos = async () => {
        const res = await fetch('http://localhost:8000/locationsRoute')
        return res.json()
    }

    const query = useQuery({ queryKey: ['todos'], queryFn: getTodos })
    const { data, isLoading, error } = query
    if (isLoading) {
        return <div>Loading...</div>
    }

    console.log(data, 'daataaa')

    return <div></div>
}

export default FilterBar
