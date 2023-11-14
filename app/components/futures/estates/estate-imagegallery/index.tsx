'use client'
import React from 'react'
import lightGallery from 'lightgallery'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import dynamic from 'next/dynamic'
import { GalerryIcon } from '@/public/assets/icons/icons'

const LightGallery = dynamic(() => import('lightgallery/react'), {
    ssr: false,
})

export interface ImageGalleryComponentProps {
    baseImg: string
    images: string[]
}

const ImageGalleryComponent = ({
    baseImg,
    images,
}: ImageGalleryComponentProps) => {
    console.log(baseImg, images)

    return (
        <LightGallery
            elementClassNames="grid grid grid-cols-3 gap-x-8 gap-y-4 "
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
        >
            <a
                className=" col-start-1 col-end-3 row-start-1 row-end-3 rounded-[8px]"
                href={baseImg}
            >
                <img
                    className="w-[100%]  rounded-[8px] object-cover"
                    alt="img1"
                    src={baseImg}
                />
            </a>

            {images.map((img, index) => (
                <a
                    className={`${
                        index === 0
                            ? 'w-full h-full col-start-3 col-end-4 row-start-1 row-end-2 rounded-[8px]'
                            : index === 1
                            ? 'w-full h-full col-start-3 col-end-4 row-start-2 row-end-3 rounded-[8px] relative'
                            : ''
                    }  `}
                    href={img}
                >
                    <img
                        className={`${
                            index >= 2 ? 'hidden' : ''
                        } rounded-[8px] object-cover `}
                        alt={`img${index + 2}`}
                        src={img}
                    />
                    {index === 1 && (
                        <button className="absolute z-[999] bg-[#E0DEF7] border-[#E0DEF7] rounded-[8px] border-[2px] px-6 py-2  bottom-2 right-2 flex gap-x-2 items-center">
                            <GalerryIcon />{' '}
                            <span className="font-[700]  text-[#000929]">
                                View all photos
                            </span>
                        </button>
                    )}
                </a>
            ))}
        </LightGallery>
    )
}

export default ImageGalleryComponent
