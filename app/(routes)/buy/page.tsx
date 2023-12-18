import { data } from '@/mocks/data'
import React from 'react'
import { cookies } from 'next/headers'
import FilterBar from '@/app/components/ui/filter-bar'
import EstateCard from '@/app/components/futures/estates/estate-card'
import { useQueryClient } from '@tanstack/react-query'
import ListEstates from '@/app/components/futures/estates/estates-list'
import { Suspense } from 'react'
import FilterState from '@/app/types/FilterEstate'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const RootLayout = dynamic(() => import('../../layout'), { ssr: false })

const page = async ({ searchParams }: { searchParams: FilterState }) => {
    const { type } = searchParams
    return (
        <section className="bg-[#F7F7FD] pt-16">
            <div className="mx-auto container flex flex-col pt-20">
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-[#000929] text-[40px] font-[700] ">
                        Search properties to rent
                    </h2>
                    <Link
                        className="text-[#7065F0] font-[700] flex items-center gap-x-2"
                        href="/"
                    >
                        <svg
                            width="20"
                            height="21"
                            viewBox="0 0 20 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12.5 5.5L7.5 10.5L12.5 15.5"
                                stroke="#7065F0"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        Back to home
                    </Link>
                </div>

                <FilterBar
                    paramType={type}
                    className="mb-20"
                    type={false}
                    location={true}
                    price={true}
                    when={true}
                    propertyType={true}
                />
            </div>

            <div>
                <Suspense
                    fallback={
                        <p style={{ textAlign: 'center' }}>
                            loading... on initial request
                        </p>
                    }
                >
                    <ListEstates
                        className="pb-20"
                        searchParams={searchParams}
                    />
                </Suspense>
                {/* <EstateCard estateData={data}/> */}
            </div>
        </section>
    )
}

export default page
