interface FilterState {
    location: string
    calendar: any | null
    minPrice: string
    maxPrice: string
    propertyType: string
}

async function getData(selectedFilter: string, location: string) {
    try {
        // console.log(location, 'inside getData')

        const res = await fetch(
            `http://localhost:8000/estates?${
                selectedFilter ? `propertyType=${selectedFilter}` : ''
            }${location ? `&location_like=${location}` : ''}`,
            { cache: 'force-cache' }
        )
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        const data = res.json()
        return data
    } catch (error: any) {
        throw new Error(error.message)
    }
}

export default getData
