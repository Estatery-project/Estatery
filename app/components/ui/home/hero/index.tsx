export default function Hero() {
    return (
        <div className="flex my-10  bg-purple-50">
            <div className="flex flex-col gap-8 p-5 ms-[250px]">
                <h1 className="text-5xl text-blue-black">
                    Buy, rent, or sell your property easily
                </h1>
                <p className="text-xl  text-blue-black font-medium leading-8">
                    A great platform to buy, sell, or even rent your properties
                    without any commisions.
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
            </div>

            <div className="bg-hero-pattern  w-full">salam</div>
        </div>
    )
}
