import React from 'react'
import Button from '../../button'

const HomeContact = () => {
    return (
        <section className="bg-[#100A55] flex items-center justify-center pt-[64px] pb-[80px]  ">
            <div className="flex flex-col justify-between h-[280px] items-center">
                <h3 className="text-[24px] font-[700] text-[#7065F0]">
                    No Spam Promise
                </h3>
                <h1 className="font-[700] text-[#fff] text-[40px]">
                    Are you a landlord?
                </h1>
                <p className=" text-[#D3D5DA]">
                    Discover ways to increase your home's value and get listed.
                    No Spam.
                </p>
                <form action="" className="">
                    <div className="relative w-[543px] h-[80px]">
                        <input
                            type="text"
                            className="rounded-[8px]  border h-[80px] w-full px-6"
                            placeholder="Enter your email address"
                        />
                        <Button
                            type="submit"
                            className="bg-[#7065F0] text-[#fff]  right-3 top-[20%] px-[40px] py-[12px] rounded-[8px] absolute"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
                <p className="text-[#D3D5DA] ">
                    Join <span className="font-[600] text-[#fff]">10,000+</span>{' '}
                    other landlords in our estatery community.
                </p>
            </div>
        </section>
    )
}

export default HomeContact
