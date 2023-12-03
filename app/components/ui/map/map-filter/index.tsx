'use client'

import React, { useState } from 'react'
import Button from "../../Button"

export interface EstateFuture {
    Newest: string
    LowestPrice: string
    HighestPrice: string
    Largest: string
    Smallest: string
}

export interface EstateType {
    Apartment: string
    House: string
    Condo: string
    Townhouse: string
    Coop: string
    Loft: string
    MultiFamily: string
}

export interface MapFilterState {
    estateType: EstateType //apartment, house, condo, townhouse, co-op, loft, multi-family
    bedrooms: number
    minPrice: string
    maxPrice: string
    estateFeature: EstateFuture // Newest, Lowest Price, Highets Price, Largest, Smallest,
}

const MapFilter = () => {
    const [isOpen, setIsOpen] = useState({
        openEstateType: false,
        openPriceDegree: false,
        openEstateFeature: false,
        openEstateBedrooms: false,
    })
    const [selectedFilter, setSelectedFilter] = useState<MapFilterState>({
        estateType: {
            Apartment: '',
            House: '',
            Condo: '',
            Townhouse: '',
            Coop: '',
            Loft: '',
            MultiFamily: '',
        },
        bedrooms: 0,
        minPrice: '',
        maxPrice: '',
        estateFeature: {
            Newest: '',
            LowestPrice: '',
            HighestPrice: '',
            Largest: '',
            Smallest: '',
        },
    })

    return (
        <div>
            <form action="" className="flex justify-between ">
                <div className="flex  space-x-4">
                    <div className="w-[120px]">
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
                    <div className="w-[120px]">
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
                                className="rounded-md border-[2px] border-[#E0DEF7] whitespace-nowrap  cursor-pointer text-start   font-[500] opacity-[0.5] px-4 py-2 text-gray-700 hover:bg-gray-100"
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
                    <div className="w-[120px]">
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
                                className="rounded-md border-[2px] border-[#E0DEF7] whitespace-nowrap  cursor-pointer text-start   font-[500] opacity-[0.5] px-4 py-2 text-gray-700 hover:bg-gray-100"
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
                </div>

                <Button className='px-4 py-2'>
                    Search
                </Button>
            </form>
        </div>
    )
}

export default MapFilter
