import Button from '../../Button'

const HomeContact = () => {
    return (
      
       <section className="bg-midnight flex items-center justify-center pt-[64px] pb-[80px]  ">
            <div className="flex flex-col justify-between h-[280px] items-center">
                <h3 className="text-[18px] xl:text-[24px] font-[700] text-indigo">
                    No Spam Promise
                </h3>
                <h1 className="font-[700] text-white text-3xl  xl:text-[40px]">
                    Are you a landlord?
                </h1>
                <p className=" text-blue-gray-300 text-center px-4 xl:text-start xl:px-0 mb-2 xl:mb-0">
                    Discover ways to increase your home's value and get listed.
                    No Spam.
                </p>
                <form action="" className="w-full px-4 xl:px-0">
                    <div className="relative w-full xl:w-[543px] h-[80px]">
                        <input
                            type="text"
                            className="rounded-[8px]  border h-[80px] w-full px-6 placeholder-opacity-50"
                            placeholder="Enter your email address"
                        />
                        <Button
                            type="submit"
                            className="bg-indigo text-white  right-3 top-[20%] px-[40px] py-[12px] rounded-[8px] absolute"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
                <p className="text-blue-gray-300  text-center px-4 xl:text-start xl:px-0 pt-4 xl:pt-0">
                    Join <span className="font-[600] text-white">10,000+</span>{' '}
                    other landlords in our estatery community.
                </p>
            </div>
        </section>
        
    )
}

export default HomeContact
