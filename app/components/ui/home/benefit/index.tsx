import {
    ApartmentIcon,
    DollarSquareIcon,
    HomeHeroIcon,
    InComeToRentIcon,
} from '@/app/public/assets/icons/icons'

const Benefit = () => {
    return (
        <section className="py-[80px]">
            <div className="container mx-auto border-[#E0DEF7]-[1px] flex bg-[#F7F7FD] py-5 border border-[#E0DEF7] rounded-lg">
                <div className="flex flex-col gap-12 py-8 ps-[64px]">
                    <div className="flex flex-col items-start gap-4 w-[80%]">
                        <h2 className="text-[#100A55] text-[40px] font-bold tracking-[-0.4px] leading-snug">
                            The new way to find your new home
                        </h2>
                        <p className="text-[#6C727F] text-base font-medium leading-6 w-[70%]">
                            Find your dream place to live in with more than 10k+
                            properties listed.
                        </p>
                    </div>

                    <div className="flex items-center gap-8">
                        <div className="flex flex-col items-center">
                            <InComeToRentIcon />
                            <h4 className="text-[#000929] text-2xl font-bold leading-9 mt-4">
                                7.4%
                            </h4>
                            <span className="text-[#6C727F] text-xs font-medium">
                                Property Return Rate
                            </span>
                        </div>
                        <div className="flex flex-col items-center">
                            <ApartmentIcon />
                            <h4 className="text-[#000929] text-2xl font-bold leading-9 mt-4">
                                3,856
                            </h4>
                            <span className="text-[#6C727F] text-xs font-medium">
                                Property in Sell & Rent
                            </span>
                        </div>
                        <div className="flex flex-col items-center">
                            <DollarSquareIcon />
                            <h4 className="text-[#000929] text-2xl font-bold leading-9 mt-4">
                                2,540
                            </h4>
                            <span className="text-[#6C727F] text-xs font-medium">
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
