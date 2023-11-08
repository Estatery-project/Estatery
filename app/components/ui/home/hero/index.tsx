import FilterBar from '../../filter-bar'

export default function Hero() {
    return (
        <section className="bg-purple-50 bg-hero-pattern bg-right bg-no-repeat">
            <div className="my-10 container flex mx-auto">
                <div className="flex flex-col gap-8 py-[72px] w-[45%] relative">
                    <h1 className="text-5xl text-blue-black">
                        Buy, rent, or sell your property easily
                    </h1>
                    <p className="text-xl  text-blue-black font-medium leading-8">
                        A great platform to buy, sell, or even rent your
                        properties without any commisions.
                    </p>
                    <div className="flex gap-[80px] mt-4">
                        <div className="border-s-[3px] border-purple-300 ps-6 ">
                            <h3 className="text-indigo text-3xl ">50k+</h3>
                            <span className="text-base text-blue-gray-500 font-medium">
                                renters
                            </span>
                        </div>
                        <div className="border-s-[3px] border-purple-300 ps-6 ">
                            <h3 className="text-indigo text-3xl ">10k+</h3>
                            <span className="text-base text-blue-gray-500 font-medium">
                                properties
                            </span>
                        </div>
                    </div>
                    <div className="w-full">
                        <FilterBar
                            type={true}
                            propertyType={false}
                            when={true}
                            location={true}
                            price={false}
                            className="absolute xl:w-[600px]"
                        />
                    </div>
                </div>

                <div>
                    <img
                        src="https://fastly.picsum.photos/id/42/200/200.jpg?hmac=jc_eDuYgXmIOC_4gl2wEY0jgxC2rMPJbDF6QJdynR7Q"
                        alt=""
                        className=""
                    />
                </div>
            </div>
        </section>
    )
}
