import { data } from '@/mocks/data'
import React from 'react'
import { cookies } from 'next/headers'
import FilterBar from '@/app/components/ui/filter-bar'



const page = async () => {
    
    return (
        <section className="bg-[#F7F7FD]">
            <div className="mx-auto container flex flex-col pt-20">
                <div>
                    <h2 className='text-[#000929] text-[40px] font-[700]'>Search properties to rent</h2>
                </div>

                <FilterBar />
            </div>
        </section>
    )
}

export default page
