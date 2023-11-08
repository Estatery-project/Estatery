'use client'

import { useSearchParams } from 'next/navigation'

export function useQueryString() {
    const searchParams = useSearchParams()

    function createQueryString(name: string, value: string) {
        const params = new URLSearchParams(searchParams)

        params.set(name, value)

        return params.toString()
    }

    return { createQueryString }
}
