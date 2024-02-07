import React from 'react'

type RentalFeatures = {
    rentalFeaturesData: { [key: string]: string | number | boolean | null }
}

const RentalFeatures = ({ rentalFeaturesData }: RentalFeatures) => {
    if (!rentalFeaturesData) {
        return <div className="mt-8 font-bold">No rental features available!</div>
    }

    console.log(rentalFeaturesData, 'rentalFeaturesData')

    return (
        <section className="border-t-[2px] mt-16  border-opacity-5 border-t-[#000929] ">
            <div className="flex flex-col">
                <div className="lg:text-[24px] font-[700] text-[#000929] mb-4 lg:mt-16 ">
                    Rental Features
                </div>

                <div className="grid grid-cols-2 gap-x-20 gap-y-4">
                    {Object?.entries(rentalFeaturesData)?.map(
                        ([key, value]) => {
                            return (
                                <div className="flex items-center justify-between ">
                                    <h3 className="lg:text-4 font-[500] text-[#000929] opacity-[0.5]">
                                        {key}
                                    </h3>
                                    <span className="lg:text-[16px] font-[700] text-[#000929] ">
                                        {typeof value === 'boolean'
                                            ? value
                                                ? 'Yes'
                                                : 'No'
                                            : value}
                                    </span>
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
        </section>
    )
}

export default RentalFeatures
