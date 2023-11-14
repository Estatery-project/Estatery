import React from 'react'
import getDyamicData from '@/app/services/estateDynamicApi'
import Estate from '@/app/types/Estate'
import ImageGalleryComponent from '@/app/components/futures/estates/estate-imagegallery'
import { FavoriteIcon, GlassIcon, ShareIcon } from '@/public/assets/icons/icons'
import Link from 'next/link'

export async function generateStaticParams() {
    const posts = await fetch('http://localhost:8000/estates').then((res) =>
        res.json()
    )
    return posts.map((post: any) => ({
        id: post.id,
    }))
}

const Property = async ({ params }: { params: any }) => {
    const data: Estate = await getDyamicData(params.property)
    console.log(data)

    return (
        <section className="">
            <div className="container mx-auto flex flex-col">
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
                <div></div>
                {/* End Calculator && About */}

                {/* Rental Features start */}
                <div></div>
                {/* Rental Features end */}

                {/*Map start*/}
                <div></div>
                {/*Map end*/}

                {/* Similar Properties start */}
            </div>
        </section>
    )
}

export default Property
