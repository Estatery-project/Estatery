'use client'
import React, { useEffect, useState } from 'react'
import { GlassIcon } from '@/public/assets/icons/icons'
import { useRouter, useSearchParams } from 'next/navigation'
import { useDebounce } from 'use-debounce'

const MapSearch = ({ Data }: any) => {
    const [searchTerm, setSearchTerm] = useState('')
    const router = useRouter()
    const [query] = useDebounce(searchTerm, 800)
    const searchParams = useSearchParams()
    const bedroom = searchParams.get('bedroom')
    const bathroom = searchParams.get('bathroom')
    const location = searchParams.get('location')
    const propertyType = searchParams.get('propertyType')

    useEffect(() => {
        router.push(
            `?${searchTerm != '' ? `&location=${searchTerm}` : ''}${
                bedroom != null ? `&bedroom=${bedroom}` : ''
            }${bathroom != null ? `&bathroom=${bathroom}` : ''}${
                propertyType != null ? `&propertyType=${propertyType}` : ''
            }`
        )
    }, [query, router])


    const handleInputChange = (e: any) => {
        setSearchTerm(e.target.value)
    }

    return (
        <form className="relative">
            <input
                value={searchTerm}
                onChange={handleInputChange}
                type="text"
                placeholder="Search Location"
                className="border-[2px] rounded-[8px] w-full py-2 px-10 border-[#E0DEF7]"
            />
            <GlassIcon className="absolute top-3 left-3" />
        </form>
    )
}

export default MapSearch
