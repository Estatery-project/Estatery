import Estate from '@/app/types/Estate'
import getData from '@/app/services/estatesApi'

import FilterState from '@/app/types/FilterEstate'

import EstateCard from '../../../futures/estates/estate-card'
import Button from '../../Button'

const HomeEstates = async ({ searchParams }: { searchParams: FilterState }) => {
    const data = await getData(
        searchParams?.propertyType,
        searchParams?.location,
        searchParams?.type
    )

    return (
        <section className="bg-custom-gradient-estates ">
            <div className="container mx-auto ">
                {/* HOME PAGE ESTATE TITLE */}
                <div className="flex justify-between items-center pb-16">
                    <div>
                        <h1 className="text-blue-black text-4xl">
                            Based on your location
                        </h1>
                        <p className="text-base text-blue-black opacity-[0.7]">
                            Some of our picked properties near you location.
                        </p>
                    </div>
                    <div>
                        <Button
                            type="button"
                            className="px-8 py-4" //Properties params should be Link from this page 
                        >
                            Browse more properties 
                        </Button>
                    </div>
                </div>

                {/* ESTATES */}
                <div className="grid grid-cols-3 gap-8 container mx-auto">
                    {data.length > 0
                        ? data?.map((estate: Estate) => {
                              return (
                                  <EstateCard
                                      key={estate.id}
                                      estateData={estate}
                                  />
                              )
                          })
                        : 'There is no estate for filtering states'}
                </div>
            </div>
        </section>
    )
}

export default HomeEstates
