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

const SignUp = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        password: '',
        isManager: false,
    })
    const [error, setError] = useState('')

    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl') || '/'

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if(formValues.password.length < 8) {
            setError('Password must be at least 8 characters long');
            return;
        }


        try {
            const response = await fetch('https://estate-api-0bne.onrender.com/users', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formValues),
            });
      
            if (response.ok) {
              // Handle successful signup, maybe redirect or show a success message
              console.log('Signup successful');
              router.push('/auth/signin');
            } else {
              // Handle errors if the signup fails
              alert('Error signing up.');
            }
          } catch (error) {
            console.error('Error occurred during signup:', error);
          }
    }

    return (
        <div className="flex overflow-hidden justify-between w-[100%] ">
            {/* <div className="flex justify-center items-center"></div> */}

            <div className=" h-[100vh] relative w-[50%] bg-[#\] flex flex-col justify-center overflow-hidden  items-center pt-10">
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
                        <AuthInput
                            error={null}
                            formValues={formValues}
                            setFormValues={setFormValues}
                            type="name"
                            name="name"
                            id="name"
                            placeholder="Full Name"
                            labelText="Name"
                        />

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
                        <AuthInput
                            error={null}
                            formValues={formValues}
                            setFormValues={setFormValues}
                            type="checkbox"
                            name="isManager"
                            id="checkbox"
                            placeholder=""
                            labelText="I am a property manager"
                        />
                    </div>

                    <div className="flex items-center mt-3 justify-between w-full">
                        <p className="text-[#6C727F] opacity-[0.7] whitespace-nowrap text-[14px]">
                            At least 8 characters.
                        </p>
                        <Link
                            href="/"
                            className="text-[#7065F0]  whitespace-nowrap"
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    <Button type="submit" className="px-4 py-2 w-full mt-8">
                        Sign Up
                    </Button>
                </form>

                <p className="mt-4">
                    <span className="text-[#000929] opacity-[0.5] font-[500]">
                        {' '}
                        Already have an account?{' '}
                    </span>
                    <Link
                        href="/auth/signin"
                        className="font-bold opacity-1 underline"
                    >
                        Login
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

export default SignUp
