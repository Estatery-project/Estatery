'use client'

import React from 'react'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Test = () => {

    const router = useRouter()


    return (
        <div className='py-8'>
            Test
           <Link href='/'>backk</Link>
        </div>
    )
}

export default Test
