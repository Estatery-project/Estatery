export interface MapFilterState {
    estateType:
        | 'apartment'
        | 'house'
        | 'condo'
        | 'townhouse'
        | 'land'
        | 'loft'
        | 'commercial'
        | null //apartment, house, condo, townhouse, co-op, loft, multi-family
    bedrooms: number | null
    minPrice: number | null
    maxPrice: number | null
    estateFeature:
        | 'Newest'
        | 'Lowest Price'
        | 'Highets Price'
        | 'Largest'
        | 'Smallest'
        | null // Newest, Lowest Price, Highets Price, Largest, Smallest,
}
