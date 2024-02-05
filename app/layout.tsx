import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { PrimeReactProvider } from 'primereact/api'
import Providers from './providers'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import Footer from './components/layouts/Footer'
import './globals.css'
import '/public/assets/fonts/stylesheet.css'
import Header from './components/layouts/Header'
import SessionProviders from './sessionproviders'
import { ReduxProvider } from './store/reduxprovider'
import { store } from './store/store'
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
                {' '}
                <body>
                    <SessionProviders>
                        <ReduxProvider>
                            <Header />
                            <Providers>{children}</Providers>
                            <Footer />
                        </ReduxProvider>
                    </SessionProviders>
                </body>
            </PrimeReactProvider>
        </html>
    )
}
