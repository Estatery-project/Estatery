import {
    ApartmentIcon,
    DollarSquareIcon,
    HomeHeroIcon,
    InComeToRentIcon,
} from '@/public/assets/icons/icons'

const Benefit = () => {
    return (
        <section className="py-[80px]">
            <div className="container mx-auto border-purple-300-[1px] flex bg-purple-50 py-5 border border-purple-300 rounded-lg">
                <div className="flex flex-col gap-12 py-8 ps-[64px]">
                    <div className="flex flex-col items-start gap-4 w-[80%]">
                        <h2 className="text-midnight text-[40px] font-bold tracking-[-0.4px] leading-snug">
                            The new way to find your new home
                        </h2>
                        <p className="text-blue-gray-500 text-base font-medium leading-6 w-[70%]">
                            Find your dream place to live in with more than 10k+
                            properties listed.
                        </p>
                    </div>
                    <div className="flex  gap-8 items-center">
                        <div className="flex flex-col items-center">
                            <InComeToRentIcon />
                            <h4 className="text-blue-black text-2xl font-bold leading-9 mt-4">
                                7.4%
                            </h4>
                            <span className="text-blue-gray-500 text-xs font-medium">
                                Property Return Rate
                            </span>
                        </div>
                        <div className="flex flex-col items-center">
                            <ApartmentIcon />
                            <h4 className="text-blue-black text-2xl font-bold leading-9 mt-4">
                                3,856
                            </h4>
                            <span className="text-blue-gray-500 text-xs font-medium">
                                Property in Sell & Rent
                            </span>
                        </div>
                        <div className="flex flex-col items-center">
                            <DollarSquareIcon />
                            <h4 className="text-blue-black text-2xl font-bold leading-9 mt-4">
                                2,540
                            </h4>
                            <span className="text-blue-gray-500 text-xs font-medium">
                                Daily Completed Transactions
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <HomeHeroIcon />
                </div>
            </div>
        </section>
    )
}

export default Benefit
