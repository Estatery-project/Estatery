'use client'
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// const queryClient = new QueryClient({
//     defaultOptions: {
//         queries: {
//             // staleTime: 60 * 1000,
//             staleTime: 0,
//         },
//     },
// })

export default function Providers({ children }: { children: React.ReactNode }) {
    const [client] = useState(new QueryClient())
    return (
        <QueryClientProvider client={client}>
            <ReactQueryDevtools initialIsOpen={false} />
            {children}
        </QueryClientProvider>
    )
}
