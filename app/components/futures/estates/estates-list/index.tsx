'use client'

import React, { useEffect } from 'react'
import { Suspense } from 'react'
import { useQuery } from '@tanstack/react-query'

const EstatesList = () => {
    // const cachedData = queryClient.getQueryData(['estates', 'propertyType','location']);

    //  const useEstes = (selectedFilter: FilterState, Enabled: any) => {
    //     const { data, isLoading, error, refetch } = useQuery({
    //         queryKey: [
    //             'estates',
    //             selectedFilter.propertyType,
    //             selectedFilter.location,
    //         ],
    //         queryFn: () =>
    //             getData(selectedFilter.propertyType, selectedFilter.location),
    //     })
    //     Enabled

    //     return { data, isLoading, error, refetch }
    // }

    // const {data} = useEstes('', true)

    // console.log(data,'data');

    return <div></div>
}

export default EstatesList
