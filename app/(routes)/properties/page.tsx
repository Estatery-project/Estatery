import React from 'react'
import Estate from '../../types/Estate'
import EstateCard from '@/app/components/futures/estates/estate-card'
import FilterBar from '@/app/components/ui/filter-bar'
import getData from '@/app/services/estatesApi'
import FilterState from '@/app/types/FilterEstate'
import Link from 'next/link'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Properties = async ({ searchParams }: { searchParams: FilterState }) => {
    const data = await getData(
        searchParams?.propertyType,
        searchParams?.location,
        searchParams?.type
    )
    return (
        <section className="">
            <div className="container mx-auto flex flex-col ">
                <div className="flex items-center justify-between mb-10 mt-20">
                    <h2 className="text-[#000929] text-[40px] font-[700] ">
                        All Properties
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
                    className="mb-20 "
                    type={false}
                    location={true}
                    price={true}
                    when={true}
                    propertyType={true}
                />

                <div className="grid grid-cols-3 gap-8 container mx-auto mt-10 mb-20">
                    {data.length > 0
                        ? data?.map((estate: any) => {
                              //change type to Estate here
                              return (
                                  <EstateCard
                                      key={estate.id}
                                      estateData={estate}
                                  />
                              )
                          }) //change null validation to data
                        : 'There is no estate for filtering states'}
                </div>

                <Stack spacing={2} className='mx-auto mb-10'>
                    <Pagination count={10} color='primary' 

                    //Add items here
                    //  renderItem={(item) => (
                    //     <EstateCard
                    //       slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                    //       {...item}
                    //     />
                    //   )}
                    
                    />
                </Stack>
            </div>
        </section>
    )
}

export default Properties
