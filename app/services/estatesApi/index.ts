import FilterStates from '@/app/types/FilterEstate'

async function getData(selectedFilter: string, location: string, type: string) {
    try {
        const res = await fetch(
            `http://localhost:8000/estates?${type ? `type=${type}` : ''}${
                selectedFilter ? `propertyType=${selectedFilter}` : ''
            }${location ? `&location_like=${location}` : ''}`,
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
