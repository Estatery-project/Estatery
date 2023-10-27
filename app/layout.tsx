import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Open_Sans } from 'next/font/google'
import Footer from './components/layout/Footer'
import './public/assets/fonts/stylesheet.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <PrimeReactProvider>
                <body className={inter.className}>
                    {children}
                    <Footer />
                </body>
            </PrimeReactProvider>
        </html>
    )
}
