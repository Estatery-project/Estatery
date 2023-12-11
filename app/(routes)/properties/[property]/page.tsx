import React from 'react'
import getDyamicData from '@/app/services/estateDynamicApi'
import Estate from '@/app/types/Estate'
import ImageGalleryComponent from '@/app/components/futures/estates/estatecard-imagegallery'
import { FavoriteIcon, GlassIcon, ShareIcon } from '@/public/assets/icons/icons'
import Link from 'next/link'
import Features from '@/app/components/ui/property/features'
import AboutEstate from '@/app/components/ui/property/about-estate'
import Owner from '@/app/components/ui/property/owner'
import RentalFeatures from '@/app/components/ui/property/rental-features'
import CustomGoogleMap from '@/app/components/ui/custom-map'
import SimilarEstates from '@/app/components/ui/property/similar-estates'
import getData from '@/app/services/estatesApi'

export async function generateStaticParams() {
    const posts = await fetch('https://estate-api-0bne.onrender.com/estates').then((res) =>
        res.json()
    )
    return posts.map((post: any) => ({
        id: post.id,
    }))
}

const Property = async ({ params }: { params: any }) => {
    const data: Estate = await getDyamicData(params.property)
    if (!data) {
        return <div>Not Found</div>
    }

    const center = {
        lat: Number(40.409264),
        lng: Number(49.867092),
    }

    return (
        <section className="">
            <div className="container mx-auto flex flex-col pt-16">
                {/* Title Start  */}
                <div className="flex justify-between items-center mb-10 pt-20">
                    <div className="flex flex-col justify-between items-start gap-y-3">
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
                            Back to map
                        </Link>
                        <h2 className="text-[#000929] text-[40px] font-[700]">
                            {data.title}
                        </h2>
                        <p className="text-[#000929] opacity-[0.5] text-[20px]">
                            {data.description}
                        </p>
                    </div>
                    <div className="flex items-center min-w-[550px] justify-between">
                        <button className="flex items-center px-6 py-3 gap-x-2 bg-[#F7F7FD] border-[2px] rounded-[8px] border-[#E0DEF7]">
                            <ShareIcon />
                            <span className="text-[#7065F0] font-[700]">
                                Share
                            </span>
                        </button>
                        <button className="flex items-center px-6 py-3 gap-x-2 bg-[#F7F7FD] border-[2px] rounded-[8px] border-[#E0DEF7]">
                            <FavoriteIcon />
                            <span className="text-[#7065F0] font-[700]">
                                Favorite
                            </span>
                        </button>{' '}
                        <button className="flex items-center px-6 py-3 gap-x-2 bg-[#F7F7FD] border-[2px] rounded-[8px] border-[#E0DEF7]">
                            <GlassIcon />
                            <span className="text-[#7065F0] font-[700]">
                                Browse nearby listings
                            </span>
                        </button>
                    </div>
                </div>
                {/* Title End  */}
                <ImageGalleryComponent
                    baseImg={data.baseImg}
                    images={data.images}
                />
                {/* Calculator && About */}
                <div className="flex justify-between">
                    <div className="flex flex-col max-w-[738px]">
                        <Features />
                        <AboutEstate />
                        <Owner />
                        <RentalFeatures />
                        <section className="w-full flex flex-col border-t-[2px] mt-16  border-opacity-5 border-t-[#000929]">
                            <h2 className="lg:text-[24px] font-[700] text-[#000929] mb-4 lg:mt-16">
                                Map
                            </h2>
                            <CustomGoogleMap
                                markerType="marker"
                                center={center}
                                style={'w-[100%] h-[380px] rounded-[8px]'}
                            />
                            <div className="w-full  mt-4">
                                <Link
                                    className="text-[#7065F0] font-[700] flex items-center gap-x-2"
                                    href="/"
                                >
                                    See more listings in Houston
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0_358_11222)">
                                            <path
                                                d="M6 4L10 8L6 12"
                                                stroke="#7065F0"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_358_11222">
                                                <rect
                                                    width="16"
                                                    height="16"
                                                    fill="white"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Link>

                                <div className="border-t-[2px]  border-opacity-5 border-t-[#000929] mt-10">
                                    <p className="font-[500] opacity-[0.5] text-[#000929]  mt-12">
                                        You agree to Estatery's Terms of Use &
                                        Privacy Policy. By choosing to contact a
                                        property, you also agree that Estatery
                                        Group, landlords, and property managers
                                        may call or text you about any inquiries
                                        you submit through our services, which
                                        may involve use of automated means and
                                        prerecorded/artificial voices. You don't
                                        need to consent as a condition of
                                        renting any property, or buying any
                                        other goods or services. Message/data
                                        rates may apply.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Calculator  */}

                    <div></div>
                </div>

                {/* Similar Properties start */}
            </div>
            <SimilarEstates
                propertyType={data?.propertyType}
                propertyId={data?.id}
                // type={data.type}
                // location={data.location}
                // numb={2}
            />
        </section>
    )
}

export default Property
