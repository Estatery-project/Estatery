import Image from 'next/image'
import HomeImage from '../../../../public/assets/images/Home-1.png'

const Tenants = () => {
    return (
        <section className="container mx-auto ">
            <div className="flex items-center justify-between">
                <figure>SALAM</figure>
                <div>
                    <p>BUTTON</p>
                    <h2 className="text-[#000929] text-[40px] font-bold">
                        We make it easy for tenants and landlords.
                    </h2>
                    <p className="text-[#6C727F] text-base font-medium leading-6 ">
                        Whether it’s selling your current home, getting
                        financing, or buying a new home, we make it easy and
                        efficient. The best part? you’ll save a bunch of money
                        and time with our services.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Tenants
