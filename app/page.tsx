import Image from 'next/image'
import HomeContact from './components/ui/home/contactus'
import Testimonials from './components/ui/home/testimonials'
import HomeEstates from './components/ui/home/estates'

export default function Home() {
    return (
        <main className="">
            <h1 className="">Estatery App</h1>
            <HomeEstates /> 
            <Testimonials />
            <HomeContact />
        </main>
    )
}
