'use client'

import React, { useState } from 'react'
import Button from '../../Button'
import { MapFilterState } from '@/app/types/MapFilter'
import { useRouter, useSearchParams } from 'next/navigation'

const MapFilter = () => {
    const searchParams = useSearchParams();
    const location = searchParams.get('location');

    const [isOpen, setIsOpen] = useState({
        openEstateType: false,
        openPriceDegree: false,
        openEstateFeature: false,
        openEstateBedrooms: false,
    })
    const [selectedFilter, setSelectedFilter] = useState<MapFilterState>({
        estateType: null,
        bedrooms: null,
        minPrice: null,
        maxPrice: null,
        estateFeature: null,
    })
    const router = useRouter()

    const EstateTypes: string[] = [
        'house',
        'villa',
        'apartment',
        'condo',
        'townhouse',
        'land',
        'commercial',
    ]

    const EstateFeatures: string[] = [
        'Newest',
        'Lowest Price',
        'Highets Price',
        'Largest',
        'Smallest',
    ]

    const EstateBedrooms: number[] = [1, 2, 3, 4, 5, 6, 7, 8]

    const handleHomeTypeClick = (homeType: any) => {
        setSelectedFilter({ ...selectedFilter, estateType: homeType })
        setIsOpen({ ...isOpen, openEstateType: false })
    }

    const handleChangeEstateFeature = (feature: any) => {
        setSelectedFilter({ ...selectedFilter, estateFeature: feature })
        setIsOpen({ ...isOpen, openEstateFeature: false })
    }

    const handleChangeBedroomCount = (bedroom: any) => {
        setSelectedFilter({ ...selectedFilter, bedrooms: bedroom })
        setIsOpen({ ...isOpen, openEstateBedrooms: false })
    }
    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        router.push(
            `?${
                selectedFilter.estateType
                    ? 'propertyType=' + selectedFilter.estateType
                    : ''
            }${
                selectedFilter.bedrooms != null
                    ? '&bedroom=' + selectedFilter.bedrooms
                    : ''
            }${location ? '&location=' + location : ''}`
        )

        // setSelectedFilter({
        //     estateType: null,
        //     bedrooms: null,
        //     minPrice: null,
        //     maxPrice: null,
        //     estateFeature: null,
        // })
    }

    return (
        <div>
            <form
                action=""
                className="flex justify-between"
                onSubmit={handleSubmitForm}
            >
                <div className="flex  space-x-4">
                    <div className="min-w-[120px]">
                        <div className="flex flex-col">
                            {/* <span className="rounded-md  cursor-pointer text-start text-blue-black  font-[500] opacity-[0.5] px-4 py-2 text-gray-700 hover:bg-gray-100">
                            Price
                        </span> */}
                            <span
                                onClick={() =>
                                    setIsOpen({
                                        ...isOpen,
                                        openPriceDegree:
                                            !isOpen.openPriceDegree,
                                    })
                                }
                                className="rounded-md w-full border-[2px] border-[#E0DEF7] whitespace-nowrap  cursor-pointer text-start   font-[500] opacity-[0.5] px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                                {selectedFilter.minPrice &&
                                selectedFilter.maxPrice
                                    ? selectedFilter.minPrice +
                                      '$' +
                                      '-' +
                                      selectedFilter.maxPrice +
                                      '$'
                                    : 'Price Range'}
                            </span>
                        </div>
                        {isOpen.openPriceDegree && (
                            <div className="absolute z-10 flex-col flex gap-y-2 max-w-[120px] bg-[#fff] p-4 rounded-[8px] shadow-lg">
                                <input
                                    type="number"
                                    placeholder="500"
                                    className=" px-2  border-[1px] border-[#000] opacity-[0.7] rounded-lg"
                                    min={0}
                                    value={selectedFilter.minPrice?.toString()}
                                    onChange={(e) =>
                                        setSelectedFilter({
                                            ...selectedFilter,
                                            minPrice: +e.target.value,
                                        })
                                    }
                                />
                                <input
                                    type="number"
                                    placeholder="2500"
                                    className=" px-2  border-[1px] border-[#000] opacity-[0.7] rounded-lg"
                                    min={selectedFilter.minPrice!==null ? +selectedFilter.minPrice + 100: ''}
                                    value={selectedFilter.maxPrice!=null ? +selectedFilter.maxPrice: ''}
                                    onChange={(e) =>
                                        setSelectedFilter({
                                            ...selectedFilter,
                                            maxPrice: +e.target.value,
                                        })
                                    }
                                />
                            </div>
                        )}
                        {/* <input type="number" />
                        <input type="number" /> */}
                    </div>
                    <div className="relative inline-block text-left max-w-[180px]">
                        <div className="w-[120px] ">
                            <div className="flex flex-col">
                                {/* <span className="rounded-md  cursor-pointer text-start text-blue-black  font-[500] opacity-[0.5] px-4 py-2 text-gray-700 hover:bg-gray-100">
                                        Property
                                    </span> */}
                                <span
                                    onClick={() =>
                                        setIsOpen({
                                            ...isOpen,
                                            openEstateType:
                                                !isOpen.openEstateType,
                                        })
                                    }
                                    className="rounded-md whitespace-nowrap border-[2px] border-[#E0DEF7]  cursor-pointer text-start   font-[500] opacity-[0.5] px-4 py-2 text-gray-700 hover:bg-gray-100"
                                >
                                    {selectedFilter.estateType == null
                                        ? 'Select type'
                                        : selectedFilter.estateType}
                                </span>
                            </div>
                        </div>
                        {isOpen.openEstateType && (
                            <ul className="origin-top-right absolute w-full right-0 mt-2  max-h-[200px] z-10 overflow-y-scroll rounded-md  bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {EstateTypes.map(
                                    (property: string, index: number) => (
                                        <li
                                            key={index}
                                            onClick={() =>
                                                handleHomeTypeClick(property)
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
                    <div className="relative inline-block text-left max-w-[180px]">
                        <div className="min-w-[120px] ">
                            <div className="flex flex-col">
                                {/* <span className="rounded-md  cursor-pointer text-start text-blue-black  font-[500] opacity-[0.5] px-4 py-2 text-gray-700 hover:bg-gray-100">
                                        Property
                                    </span> */}
                                <span
                                    onClick={() =>
                                        setIsOpen({
                                            ...isOpen,
                                            openEstateFeature:
                                                !isOpen.openEstateFeature,
                                        })
                                    }
                                    className="rounded-md whitespace-nowrap border-[2px] border-[#E0DEF7]  cursor-pointer text-start   font-[500] opacity-[0.5] px-4 py-2 text-gray-700 hover:bg-gray-100"
                                >
                                    {selectedFilter.estateFeature == null
                                        ? 'Select Feature'
                                        : selectedFilter.estateFeature}
                                </span>
                            </div>
                        </div>
                        {isOpen.openEstateFeature && (
                            <ul className="origin-top-right absolute min-w-[100%]  right-0 mt-2 whitespace-nowrap  max-h-[180px] z-10 overflow-y-scroll rounded-md  bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {EstateFeatures.map(
                                    (feature: string, index: number) => (
                                        <li
                                            key={index}
                                            onClick={() =>
                                                handleChangeEstateFeature(
                                                    feature
                                                )
                                            }
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                        >
                                            {feature}
                                        </li>
                                    )
                                )}
                            </ul>
                        )}
                    </div>

                    <div className="relative inline-block text-left max-w-[180px]">
                        <div className="min-w-[120px] ">
                            <div className="flex flex-col">
                                {/* <span className="rounded-md  cursor-pointer text-start text-blue-black  font-[500] opacity-[0.5] px-4 py-2 text-gray-700 hover:bg-gray-100">
                                        Property
                                    </span> */}
                                <span
                                    onClick={() =>
                                        setIsOpen({
                                            ...isOpen,
                                            openEstateBedrooms:
                                                !isOpen.openEstateBedrooms,
                                        })
                                    }
                                    className="rounded-md whitespace-nowrap border-[2px] border-[#E0DEF7]  cursor-pointer text-start   font-[500] opacity-[0.5] px-4 py-2 text-gray-700 hover:bg-gray-100"
                                >
                                    {selectedFilter.bedrooms == null
                                        ? 'Bedrooms'
                                        : selectedFilter.bedrooms}
                                </span>
                            </div>
                        </div>
                        {isOpen.openEstateBedrooms && (
                            <ul className="origin-top-right absolute min-w-[100%]  right-0 mt-2 whitespace-nowrap  max-h-[180px] z-10 overflow-y-scroll rounded-md  bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {EstateBedrooms.map(
                                    (bedrooms: number, index: number) => (
                                        <li
                                            key={index}
                                            onClick={() =>
                                                handleChangeBedroomCount(
                                                    bedrooms
                                                )
                                            }
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                        >
                                            {bedrooms}
                                        </li>
                                    )
                                )}
                            </ul>
                        )}
                    </div>
                </div>

                <Button className="px-4 py-2" type="submit">
                    Search
                </Button>
            </form>
        </div>
    )
}

export default MapFilter
