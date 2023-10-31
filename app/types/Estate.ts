declare interface Estate {
    id: number
    price: number
    title: string
    location: string
    bedroom: number
    bathroom: number
    area: string
    type: string //rent or buy
    propertyType: string //apartment, house, condo, townhouse, co-op, loft, multi-family
    isPopular: boolean
    baseImg: string
    images: string[]
    longitude: number
    latitude: number
    description: string
    createdAt: string
    owner: {
        ownerName: string
        ownerImg: string
    }
    similarEstates: Estate[]
    rentalFeatures: {
        dateAvailable: string
        laundry: boolean
        parking: boolean
        estateType: string //apartment, house, condo, townhouse, co-op, loft, multi-family
        deposit: number
        heating: boolean
        cooling: boolean
        yearBuilt: number
        size: number
        lotSize: number
        city: string
    }
}

export default Estate
