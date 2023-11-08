'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'

import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useFilter } from './useFilter'
import { useFilterEstates } from './useFilterEstates'
import FilterState from '@/app/types/FilterEstate'
import Estate from '@/app/types/Estate'
import Button from '../Button'

export interface FilterBarProps {
    className?: string
    location: boolean
    when: boolean
    price: boolean
    propertyType: boolean
    type: boolean
}

const FilterBar = ({
    className,
    location,
    price,
    when,
    propertyType,
    type,
}: FilterBarProps) => {
    const [selectedFilter, setSelectedFilter] = useState<FilterState>({
        type: '',
        location: '',
        calendar: '',
        minPrice: '',
        maxPrice: '',
        propertyType: '',
    })
    const [isOpen, setIsOpen] = useState({
        openLocation: false,
        openPrice: false,
        openPropertyType: false,
    })
    const [enabled, setEnabled] = useState(false)
    const router = useRouter()

    const handleLocationClick = (location: any) => {
        setSelectedFilter({ ...selectedFilter, location: location })
        setIsOpen({ ...isOpen, openLocation: false })
    }

    const handleHomeTypeClick = (homeType: any) => {
        setSelectedFilter({ ...selectedFilter, propertyType: homeType })
        setIsOpen({ ...isOpen, openPropertyType: false })
    }

    const formatDate = (date: any) => {
        const myDate = date?.$d
        const day = myDate?.getDate()?.toString()?.padStart(2, '0')
        const month = (myDate?.getMonth() + 1)?.toString()?.padStart(2, '0')
        const year = myDate?.getFullYear()
        return `${month}/${day}/${year}`
    }

    const propertyTypes: string[] = [
        'house',
        'villa',
        'apartment',
        'condo',
        'townhouse',
        'land',
        'commercial',
        'other',
    ]

    const { data, isLoading, error, refetch } = useFilter()

    const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setEnabled(true)

        router.push(
            `?type=${selectedFilter.type}&location=${selectedFilter?.location}&calendar=${selectedFilter?.calendar}&minPrice=${selectedFilter.minPrice}&maxPrice=${selectedFilter.maxPrice}&propertyType=${selectedFilter?.propertyType}`
        )
    }

    console.log(selectedFilter)

    return (
        <div>
            {type && (
                <div>
                    <div className="flex justify-between items-center max-w-[150px]">
                        <div
                            className={`bg-[#fff] px-8 py-3 cursor-pointer  rounded-tl-[8px] ${
                                selectedFilter.type == 'rent'
                                    ? 'border-b-[2px] border-[#7065F0] text-[#7065F0] font-[500]'
                                    : ''
                            } `}
                            onClick={() => {
                                setSelectedFilter({
                                    ...selectedFilter,
                                    type: 'rent',
                                })
                            }}
                        >
                            <span className="cursor-pointer">Rent</span>
                        </div>
                        <div
                            className={`bg-[#fff] px-8 py-3 rounded-tr-[8px] cursor-pointer ${
                                selectedFilter.type == 'buy'
                                    ? 'border-b-[2px] border-[#7065F0] text-[#7065F0] font-[500]'
                                    : ''
                            } `}
                            onClick={() => {
                                setSelectedFilter({
                                    ...selectedFilter,
                                    type: 'buy',
                                })
                            }}
                        >
                            <span className="cursor-pointer">Buy</span>
                        </div>
                    </div>
                </div>
            )}
            <div
                className={`bg-white rounded-[8px] p-5  shadow-lg ${className}`}
            >
                <form
                    onSubmit={handleSubmitForm}
                    action=""
                    className="flex items-center justify-between gap-x-4 w-full"
                >
                    {location && (
                        <div className="relative inline-block text-left max-w-[180px]  ">
                            <div className="w-[180px] ">
                                <div className="flex flex-col gap-y-2">
                                    <span className="rounded-md  cursor-pointer text-start text-blue-black  font-[500] opacity-[0.5] px-4  py-2 text-gray-700 hover:bg-gray-100">
                                        Location
                                    </span>
                                    <span
                                        onClick={() =>
                                            setIsOpen({
                                                ...isOpen,
                                                openLocation:
                                                    !isOpen.openLocation,
                                            })
                                        }
                                        className="rounded-md whitespace-nowrap  cursor-pointer text-start   font-[500] opacity-[0.5] px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    >
                                        {selectedFilter.location == ''
                                            ? 'Select location'
                                            : selectedFilter.location}
                                    </span>
                                </div>
                            </div>
                            {isOpen.openLocation && (
                                <ul className="origin-top-right absolute w-full right-0 mt-2  max-h-[200px] z-10 overflow-y-scroll rounded-md  bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    {data.map(
                                        (
                                            location: {
                                                id: number
                                                location: string
                                                createdAt: string
                                            },
                                            index: number
                                        ) => (
                                            <li
                                                key={location.id}
                                                onClick={() =>
                                                    handleLocationClick(
                                                        location.location
                                                    )
                                                }
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                            >
                                                {location?.location}
                                            </li>
                                        )
                                    )}
                                </ul>
                            )}
                        </div>
                    )}
                    {when && (
                        <div className="max-w-[180px]">
                            <div className="flex flex-col items-start gap-y-2">
                                <div>
                                    {' '}
                                    <span className="rounded-md  cursor-pointer text-start text-blue-black  font-[500] opacity-[0.5]  py-2 text-gray-700 hover:bg-gray-100">
                                        When
                                    </span>{' '}
                                </div>
                                <LocalizationProvider
                                    dateAdapter={AdapterDayjs}
                                >
                                    <DatePicker
                                        className="max-h-[40px] "
                                        value={selectedFilter.calendar}
                                        onChange={(newValue) =>
                                            setSelectedFilter({
                                                ...selectedFilter,
                                                calendar: formatDate(newValue),
                                            })
                                        }
                                    />
                                </LocalizationProvider>
                            </div>
                        </div>
                    )}

                    {price && (
                        <div className="w-[180px]">
                            <div className="flex flex-col">
                                <span className="rounded-md  cursor-pointer text-start text-blue-black  font-[500] opacity-[0.5] px-4 py-2 text-gray-700 hover:bg-gray-100">
                                    Price
                                </span>
                                <span
                                    onClick={() =>
                                        setIsOpen({
                                            ...isOpen,
                                            openPrice: !isOpen.openPrice,
                                        })
                                    }
                                    className="rounded-md whitespace-nowrap  cursor-pointer text-start   font-[500] opacity-[0.5] px-4 py-2 text-gray-700 hover:bg-gray-100"
                                >
                                    {selectedFilter.minPrice &&
                                    selectedFilter.maxPrice
                                        ? selectedFilter.minPrice +
                                          '$' +
                                          '-' +
                                          selectedFilter.maxPrice +
                                          '$'
                                        : 'Select'}
                                </span>
                            </div>
                            {isOpen.openPrice && (
                                <div className="absolute z-10 flex-col flex gap-y-2 max-w-[180px] bg-[#fff] p-4 rounded-[8px] shadow-lg">
                                    <input
                                        type="number"
                                        placeholder="500"
                                        className=" px-2  border-[1px] border-[#000] opacity-[0.7] rounded-lg"
                                        min={0}
                                        value={selectedFilter.minPrice}
                                        onChange={(e) =>
                                            setSelectedFilter({
                                                ...selectedFilter,
                                                minPrice: e.target.value,
                                            })
                                        }
                                    />
                                    <input
                                        type="number"
                                        placeholder="2500"
                                        className=" px-2  border-[1px] border-[#000] opacity-[0.7] rounded-lg"
                                        min={+selectedFilter.minPrice + 100}
                                        value={selectedFilter.maxPrice}
                                        onChange={(e) =>
                                            setSelectedFilter({
                                                ...selectedFilter,
                                                maxPrice: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            )}
                            {/* <input type="number" />
                        <input type="number" /> */}
                        </div>
                    )}

                    {propertyType && (
                        <div className="relative inline-block text-left max-w-[180px]">
                            <div className="w-[180px] ">
                                <div className="flex flex-col">
                                    <span className="rounded-md  cursor-pointer text-start text-blue-black  font-[500] opacity-[0.5] px-4 py-2 text-gray-700 hover:bg-gray-100">
                                        Property
                                    </span>
                                    <span
                                        onClick={() =>
                                            setIsOpen({
                                                ...isOpen,
                                                openPropertyType:
                                                    !isOpen.openPropertyType,
                                            })
                                        }
                                        className="rounded-md whitespace-nowrap  cursor-pointer text-start   font-[500] opacity-[0.5] px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    >
                                        {selectedFilter.propertyType == ''
                                            ? 'Select type'
                                            : selectedFilter.propertyType}
                                    </span>
                                </div>
                            </div>
                            {isOpen.openPropertyType && (
                                <ul className="origin-top-right absolute w-full right-0 mt-2  max-h-[200px] z-10 overflow-y-scroll rounded-md  bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    {propertyTypes.map(
                                        (property: string, index: number) => (
                                            <li
                                                key={index}
                                                onClick={() =>
                                                    handleHomeTypeClick(
                                                        property
                                                    )
                                                }
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                            >
                                                {property}
                                            </li>
                                        )
                                    )}
                                </ul>
                            )}
                        </div>
                    )}

                    <div>
                        <Button type="submit" className="px-8 py-4">
                            Search
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FilterBar
