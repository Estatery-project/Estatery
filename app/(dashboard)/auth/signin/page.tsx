'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Button from '@/app/components/ui/Button'
import Image from 'next/image'
import { MainLogo } from '@/public/assets/icons/icons'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import AuthInput from '@/app/components/ui/auth/auth-input'

const SignIn = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
    })
    const [error, setError] = useState('')

    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl') || '/'

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            setLoading(true)
            setFormValues({ email: '', password: '' })

            const res = await signIn('credentials', {
                redirect: false,
                email: formValues.email,
                password: formValues.password,
                // callbackUrl,
            })

            setLoading(false)

            // console.log(res)
            if (!res?.error) {
                router.push(callbackUrl)
            } else {
                setError('Invalid email or password')
            }
        } catch (error: any) {
            setLoading(false)
            setError(error)
        }
    }

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = event.target
    //     setFormValues({ ...formValues, [name]: value })
    // }

    return (
        <div className="flex overflow-hidden justify-between w-[100%]">
            {/* <div className="flex justify-center items-center"></div> */}

            <div className=" h-[100vh] relative w-[50%] bg-[#\] flex flex-col justify-center overflow-hidden  items-center">
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
                    onSubmit={onSubmit}
                    action=""
                    className="flex flex-col items-center w-full max-w-[352px]  "
                >
                    <div className="flex flex-col items-center w-full max-w-[352px]  space-y-4">
                        {/* <div className="flex flex-col w-full ">
                            <label
                                htmlFor="email"
                                className="text-[#000929] font-[500] text-[14px] mb-2"
                            >
                                Email
                            </label>
                            <input
                                className="rounded-[8px] w-full border-[1.5px] px-4 py-2 border-[#E0DEF7] bg-[#F7F7FD]"
                                type="email"
                                name="email"
                                id="email"
                                placeholder="hi@example.com"
                                value={formValues?.email}
                                onChange={handleChange}
                            />
                        </div> */}


                        <AuthInput
                            error={null}
                            formValues={formValues}
                            setFormValues={setFormValues}
                            type="email"
                            name="email"
                            id="email"
                            placeholder="hi@gmail.com"
                            labelText="Email"
                        />
                        <AuthInput
                            error={error}
                            formValues={formValues}
                            setFormValues={setFormValues}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="******"
                            labelText="Password"
                        />

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
                    <Link href="/auth/signup" className="font-bold opacity-1 underline">
                        Sign up for free
                    </Link>
                </p>
            </div>

            <div className="w-[50%] h-[100vh] ">
                <Image
                    alt="loginImage"
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
