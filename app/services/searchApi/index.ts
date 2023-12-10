const getSearchLocations = async (location: string) => {
    const res = await fetch(`https://estate-api-0bne.onrender.com/location_like=${location}}`)
    return res.json()
}

export default getSearchLocations
