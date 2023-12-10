const getSearchLocations = async (location: string) => {
    const res = await fetch(`http://localhost:8000/location_like=${location}}`)
    return res.json()
}

export default getSearchLocations
