import FilterBar from '@/app/components/ui/filter-bar'
import React from 'react'
import { Suspense } from 'react'
import ListEstates from '@/app/components/futures/estates/estates-list'
import FilterState from '@/app/types/FilterEstate'
import FavoriteEstates from '@/app/components/futures/estates/estate-favorite'

const Favorite = ({ searchParams }: { searchParams: FilterState }) => {
    return (
        <section className="bg-[#F7F7FD] pt-40">
            <div className="container flex flex-col mx-auto ">
                <div className="flex flex-col space-x-4 items-center">
                    <h1 className="text-[#000929] lg:text-[40px] font-[700]">
                        Favorites
                    </h1>
                    <p className=" text-[#000929] text-[24px] opacity-[0.7]">
                        Here all your favorite estates!!!
                    </p>
                </div>
                <div>
                    <FilterBar
                    paramType=''
                        className="mb-20 mt-12"
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


                        <FavoriteEstates estatesSearchParams={searchParams} />
                        {/* <ListEstates
                            className="pb-20"
                            searchParams={searchParams}
                        /> */}


                    </Suspense>
                    {/* <EstateCard estateData={data}/> */}
                </div>
            </div>
        </section>
    )
}

export default Favorite
