import Link from 'next/link'

import {
    AreaIcon,
    BathIcon,
    BedIcon,
    EstatePopularity,
    HeartLogo,
} from '@/public/assets/icons/icons'

import Estate from '@/app/types/Estate'
import FavoriteActions from '@/app/components/ui/favoriteaction'

type EstateCardProps = {
    estateData: Estate
    className?: string | undefined
    infoText?: boolean
}

const EstateCard = ({ estateData, className, infoText }: EstateCardProps) => {
    console.log(estateData, 'estateData')

    function truncateSentence(sentence:any) {
        const words = sentence.split(' ');
        if (words.length <= 4) {
          return sentence;
        } else {
          const truncatedWords = words.slice(0, 4);
          return truncatedWords.join(' ') + '...';
        }
      }
      const originalSentence = estateData?.title;
      const truncatedTitle = truncateSentence(originalSentence);

    return (
        <div className={`text-blue-black  ${className}`}>
            <Link href={`/properties/${estateData.id}`}>
                <div className="relative">
                    {/* <img
                        className="w-[352px] rounded-t-xl"
                        src={estateData?.baseImg}
                    /> */}
                    <img
                        className="w-full xl:w-[352px] xl:h-[235px]  object-cover rounded-t-lg"
                        src={estateData?.baseImg}
                        alt={estateData?.title}
                    />
                    <EstatePopularity className="absolute bottom-[-20px] left-[-15px]" />
                </div>
            </Link>

            <div className="bg-white px-4 rounded-b-xl   flex flex-col ">
                <div className="relative flex flex-col justify-between pt-8 space-y-2 py-1">
                    <p className="text-indigo text-[24px] font-[800] ">
                        {estateData?.price}$
                        <span className="font-[400] text-blue-black text-[16px] opacity-[0.5]">
                            {estateData?.type === 'rent'
                                ? ' /month'
                                : estateData?.type === 'buy'
                                ? ' /sale'
                                : ''}
                        </span>
                    </p>
                    <span className="text-[24px] font-[700]">
                        {truncatedTitle}
                    </span>
                    <p className="text-[16px] opacity-[0.5]">
                        {estateData?.location}
                    </p>

                    {/* <HeartLogo className="absolute right-0 top-4 cursor-pointer" /> */}
                    <FavoriteActions estateData={estateData} className="absolute right-0 top-4 cursor-pointer" />
                </div>

                <div className="flex flex-col pb-4">
                    <hr className="border-purple-100 border-[1.5px] my-3" />
                    <div className="flex justify-between items-center ">
                        <div className="flex items-center space-x-2 align-end">
                            <BedIcon />
                            <span className="opacity-[0.7] text-[14px]">
                                {estateData?.bedroom} {infoText ? 'Beds' : ''}
                            </span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <BathIcon />
                            <span className="opacity-[0.7] text-[14px]">
                                {estateData?.bathroom}{' '}
                                {infoText ? 'Bathrooms' : ''}
                            </span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <AreaIcon />
                            <span className="opacity-[0.7] text-[14px]">
                                {estateData?.area}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EstateCard
