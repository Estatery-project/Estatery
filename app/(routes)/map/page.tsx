import React from 'react'
// import MapFilter from '@/app/components/ui/map-filter'
// import MapSearchInput from '@/app/components/ui/search-Input'
// import MapComponent from '@/app/components/ui/map'

const Map = () => {
    return (
        <section>
            <div className="container pt-20 mx-auto flex items-start justify-between">
                {/* Map  */}
                <div className="">{/* <MapComponent /> */}</div>

                <div className="flex flex-col pt-20 min-w-[736px] lg:px-[47px] space-y-6">
                    <div>
                        <span>home {'<'} Home </span>
                        <h1 className="text-[#100A55] font-[700] lg:text-[32px]">
                            1,780 listings in Houston
                        </h1>
                        <p className="text-[#100A55] opacity-[0.7] font-[500]">
                            10,325 properties available to rent
                        </p>
                    </div>

                    <div>{/* <MapSearchInput /> */}</div>

                    <div>{/* <MapFilter /> */}</div>
                </div>
            </div>
        </section>
    )
}

export default Map
