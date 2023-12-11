import React from 'react'
import Link from 'next/link'
import Button from '@/app/components/ui/Button'
import Image from 'next/image'
import { MainLogo } from '@/public/assets/icons/icons'

const SignIn = () => {
    return (
        <div className="flex overflow-hidden justify-between w-[100vw]">
            {/* <div className="flex justify-center items-center"></div> */}

            <div className=" h-[100vh] relative w-[50%] bg-[#\] flex flex-col justify-center   items-center">
                <div className="absolute top-0 left-0 border-b-[1.5px] w-full p-6  border-[#F0EFFB]">
                    <Link href="/">
                        <MainLogo />
                    </Link>
                </div>

                <div className="w-full max-w-[352px] mb-8">
                    <h1 className="text-[#000929] lg:text-[32px] font-[700] mb-2">
                        Welcome back
                    </h1>
                    <p className="text-[#000929] opacity-[0.5] font-[500] text-[16px]">
                        Welcome back! Please enter your details.
                    </p>
                </div>

                <form
                    action=""
                    className="flex flex-col items-center w-full max-w-[352px]  "
                >
                    <div className="flex flex-col items-center w-full max-w-[352px]  space-y-4">
                        <div className="flex flex-col w-full ">
                            <label
                                htmlFor="email"
                                className="text-[#000929] font-[500] text-[14px] mb-2"
                            >
                                Email
                            </label>
                            <input
                                className="rounded-[8px] w-full border-[1.5px] px-4 py-2 border-[#E0DEF7] bg-[#F7F7FD]"
                                type="email"
                                name=""
                                id="email"
                                placeholder="hi@example.com"
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <label
                                htmlFor="email"
                                className="text-[#000929] font-[500] text-[14px] mb-2"
                            >
                                Password
                            </label>
                            <input
                                className="rounded-[8px] w-full border-[1.5px] px-4 py-2 border-[#E0DEF7] bg-[#F7F7FD]"
                                type="password"
                                name=""
                                id="email"
                                placeholder="Enter password"
                            />
                        </div>
                    </div>

                    <Link href="/" className="text-[#7065F0] mt-4">
                        Forgot Password?
                    </Link>

                    <Button type="submit" className="px-4 py-2 w-full mt-8">
                        Login
                    </Button>
                </form>

                <p className="mt-4">
                    <span className="text-[#000929] opacity-[0.5] font-[500]">
                        {' '}
                        Don't have an account?{' '}
                    </span>
                    <Link href="/auth/signup" className="font-bold opacity-1">
                        Sign Up
                    </Link>
                </p>
            </div>

            <div className="w-[50%] ">
                <Image
                    alt='loginImage'
                    className="w-[1400px]"
                    src="https://ik.imagekit.io/wnivejxts/Element.png?updatedAt=1702315309593"
                    width={0}
                    height={0}
                    objectFit="cover"
                    layout="responsive"
                />
            </div>
        </div>
    )
}

export default SignIn
