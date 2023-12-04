import React from 'react'
import MapFilter from '@/app/components/ui/map/map-filter'
import MapComponent from '@/app/components/ui/map/custom-map'
import MapSearch from '@/app/components/ui/map/map-search'
import { ArrowRigtIcon } from '@/public/assets/icons/icons'
import EstateCard from '@/app/components/futures/estates/estate-card'
// import MapSearchInput from '@/app/components/ui/search-Input'
// import MapComponent from '@/app/components/ui/map'
import Estate from '@/app/types/Estate'
import FilterState from '@/app/types/FilterEstate'
import getData from '@/app/services/estatesApi'

// const mockEstate: Estate = {
//     id: 1,
//     price: 250000,
//     title: 'Scenic Mountain Cabin',
//     location: 'Downtown, Example City',
//     bedroom: 2,
//     bathroom: 1,
//     area: '1200 sqft',
//     type: 'buy',
//     propertyType: 'apartment',
//     isPopular: true,
//     baseImg:
//         'https://ik.imagekit.io/wnivejxts/homeImg.png?updatedAt=1698677468092',
//     images: [
//         'https://example.com/image1.jpg',
//         'https://example.com/image2.jpg',
//         // Add more image URLs as needed
//     ],
//     longitude: -73.98513,
//     latitude: 40.748817,
//     description: 'This stunning apartment offers a spacious living area...',
//     createdAt: '2023-01-15',
//     owner: {
//         ownerName: 'John Doe',
//         ownerImg: 'https://example.com/owner-image.jpg',
//     },
//     similarEstates: [
//         // Array of similar estates (empty in this mock data)
//     ],
//     rentalFeatures: {
//         dateAvailable: '2023-02-01',
//         laundry: true,
//         parking: true,
//         estateType: 'apartment',
//         deposit: 1500,
//         heating: true,
//         cooling: true,
//         yearBuilt: 2010,
//         size: 1200,
//         lotSize: 0.5,
//         city: 'Example City',
//     },
// }

const Map = async ({ searchParams }: { searchParams: FilterState }) => {
    const data = await getData(
        searchParams?.propertyType,
        searchParams?.location,
        searchParams?.type,
        searchParams?.bedroom || '',
    )
    return (
        <section className="my-2  overflow-x-hidden bg-[#F7F7FD]">
            <div className=" pt-20 mx-auto flex items-start justify-between">
                {/* Map  */}
                <div className="max-w-[700px] h-[900px] ">
                    <MapComponent estateData={data} />
                </div>

                <div className="flex flex-col pt-12 min-w-[736px] lg:px-[20px] space-y-6">
                    <div>
                        <p className="flex pb-4">
                            <span className="text-[#100A55] opacity-[0.5] flex items-center">
                                Home{' '}
                                <ArrowRigtIcon
                                    className="opacity-[0.5]"
                                    stroke="#100A55"
                                />
                            </span>

                            <span className="text-[#100A55] font-[500] flex items-center">
                                Map Search
                                <ArrowRigtIcon
                                    className="opacity-[0.5]"
                                    stroke="#100A55"
                                />
                            </span>

                            <span className="text-[#100A55] font-[500] flex items-center">
                                Map Result
                            </span>
                        </p>
                        <h1 className="text-[#100A55] font-[700] lg:text-[32px]">
                            1,780 listings in Houston
                        </h1>
                        <p className="text-[#100A55] opacity-[0.7] font-[500]">
                            10,325 properties available to rent
                        </p>
                    </div>

                    <div>
                        <MapSearch/>
                    </div>

                    <div>
                        <MapFilter />
                    </div>

                    {/* ESTATES  */}
                   {data.length>0? <div className="grid grid-cols-3 gap-4 overflow-y-scroll max-h-[580px]">
                        {data.map((estate: Estate, index: number) => {
                            return (
                                <EstateCard
                                    estateData={estate}
                                    className="max-w-[280px]  "
                                />
                            )
                        })}
                    </div> : <p className="text-[#100A55] font-[500] text-[20px] opacity-[0.5]">There is no estate for filtering states</p>}
                </div>
            </div>
        </section>
    )
}

export default Map
