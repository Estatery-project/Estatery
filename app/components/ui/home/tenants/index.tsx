import Image from 'next/image'
import HomeImage from '../../../../public/assets/images/Home-1.png'
import { ArrowRigtIcon } from '@/app/public/assets/icons/icons'
import Button from '../../Button'

const Tenants = () => {
    return (
        <section className="container mx-auto ">
            <div className="flex items-center gap-10">
                <figure>
                    <Image src={HomeImage} alt="" />
                </figure>
                <div className="flex flex-col gap-8">
                    <div>
                        <Button>For tenants</Button>
                    </div>

                    <h2 className="text-[#000929] text-[40px] font-bold">
                        We make it easy for tenants and landlords.
                    </h2>
                    <p className="text-[#6C727F] text-base font-medium leading-6 ">
                        Whether it’s selling your current home, getting
                        financing, or buying a new home, we make it easy and
                        efficient. The best part? you’ll save a bunch of money
                        and time with our services.
                    </p>
                    <Button className="py-4 px-6 flex items-center self-start gap-2 ">
                        See more <ArrowRigtIcon />
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Tenants
