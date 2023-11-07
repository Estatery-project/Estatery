import { data } from '@/mocks/data'
import React from 'react'
import { cookies } from 'next/headers'
import FilterBar from '@/app/components/ui/filter-bar'
import EstateCard from '@/app/components/ui/estate-card'
import { useQueryClient } from '@tanstack/react-query'
import ListEstates from '@/app/components/ui/ListEstates'
import { Suspense } from 'react'

const page = async () => {
    return (
        <section className="bg-[#F7F7FD]">
            <div className="mx-auto container flex flex-col pt-20">
                <div>
                    <h2 className="text-[#000929] text-[40px] font-[700]">
                        Search properties to rent
                    </h2>
                </div>

                <FilterBar />
            </div>

            <div>
                <Suspense
                    fallback={
                        <p style={{ textAlign: 'center' }}>
                            loading... on initial request
                        </p>
                    }
                >
                    <ListEstates />
                </Suspense>
                {/* <EstateCard estateData={data}/> */}
            </div>
        </section>
    )
}

export default page
