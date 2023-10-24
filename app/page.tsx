import Image from 'next/image'
import HomeContact from './components/ui/home/contactus'
import Testimonials from './components/ui/home/testimonials'
import HomeEstates from './components/ui/home/estates'
import Benefit from './components/ui/home/benefit'
import Tenants from './components/ui/home/tenants'

export default function Home() {
    return (
        <main className="">
            {/* <h1 className="">Estatery App</h1> */}
            <Tenants />
            <Benefit />
            <HomeEstates />
            <Testimonials />
            <HomeContact />
        </main>
    )
}
