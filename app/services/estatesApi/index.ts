import FilterStates from '@/app/types/FilterEstate'

async function getData(
    selectedFilter: string,
    location: string,
    type: string,
    bedroom: string
) {
    try {
        const res = await fetch(
            `https://estate-api-0bne.onrender.com/estates?${type ? `type=${type}` : ''}${
                selectedFilter ? `propertyType=${selectedFilter}` : ''
            }${bedroom ? `&bedroom=${bedroom}` : ''}${
                location ? `&location_like=${location}` : ''
            }`
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
