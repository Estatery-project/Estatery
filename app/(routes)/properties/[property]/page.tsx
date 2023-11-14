import React from 'react'
import getData from '@/app/services/estatesApi'
import Estate from '@/app/types/Estate'
import FilterState from '@/app/types/FilterEstate'

export async function generateStaticParams() {
    const posts = await fetch('http://localhost:8000/estates').then((res) =>
        res.json()
    )


    
    return posts.map((post: any) => ({
        type: post.type,

        id: post.id,
    }))
}

const Property = ({ params }: any) => {
    const { id, slug } = params
    console.log(params, 'params')

    return <div>page {params.id}</div>
}

export default Property
