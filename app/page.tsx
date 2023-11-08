import FilterState from './types/FilterEstate'

import Hero from './components/ui/home/hero'
import HomeContact from './components/ui/home/contactus'
import Testimonials from './components/ui/home/testimonials'
import HomeEstates from './components/ui/home/estates'
import Benefit from './components/ui/home/benefit'
import Tenants from './components/ui/home/tenants'

export default function Home({ searchParams }: { searchParams: FilterState }) {
    return (
        <main className="">
            <Hero />
            <Tenants />
            <Benefit />
            <HomeEstates searchParams={searchParams} />
            <Testimonials />
            <HomeContact />
        </main>
    )
}
