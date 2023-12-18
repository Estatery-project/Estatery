import FilterState from './types/FilterEstate'

import Hero from './components/ui/home/hero'
import HomeContact from './components/ui/home/contactus'
import Testimonials from './components/ui/home/testimonials'
import HomeEstates from './components/ui/home/estates'
import Benefit from './components/ui/home/benefit'
import Tenants from './components/ui/home/tenants'
// import RootLayout from './layout'

import dynamic from 'next/dynamic'

const RootLayout = dynamic(() => import('./layout'), { ssr: false })

export default function Home({ searchParams }: { searchParams: FilterState }) {
    return (
        // <RootLayout>
        <>
            <Hero />
            <Tenants />
            <Benefit />
            <HomeEstates searchParams={searchParams} />
            <Testimonials />
            <HomeContact />
        </>
    )
}
