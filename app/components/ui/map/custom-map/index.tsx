'use client'

import { GoogleMapsProvider } from '@ubilabs/google-maps-react-hooks'
import { useState, useRef, useEffect, useCallback } from 'react'
import {
    MarkerClusterer,
    SuperClusterAlgorithm,
} from '@googlemaps/markerclusterer'

type Tree = [string, number, number]

let trees: Tree[] = []

const mapOptions = {
    zoom: 10,
    center: { lat: 40.409264, lng: 49.867092 },
}

const MapComponent = ({ estateData }: any) => {
    const mapRef = useRef(null)

    const [mapContainer, setMapContainer] = useState(null)

    const onLoad = useCallback((map: any) => {
        addMarkers(map)
        mapRef.current = map
    }, [])

    trees = estateData?.map((estate: any) => {
        return [estate.title, estate.latitude, estate.longitude]
    })

    useEffect(() => {
        if (mapRef.current) {
            addMarkers(mapRef.current)
            setMapContainer(null)
        }
    }, [estateData])

    return (
        <GoogleMapsProvider
            googleMapsAPIKey="AIzaSyB4wwjaaE2gCMFpsVYErvg1kh-LxE-4v3o"
            mapOptions={mapOptions}
            mapContainer={mapContainer}
            onLoadMap={onLoad}
        >
            <div
                ref={(node: any) => setMapContainer(node)}
                style={{
                    height: '100%',
                    width: '700px',
                    // margin: '1rem 0',
                }}
            />
        </GoogleMapsProvider>
    )
}

function addMarkers(map: any) {
    const markers = trees.map(([name, lat, lng]) => {
        const marker = new google.maps.Marker({ position: { lat, lng } })

        return marker
    })

    new MarkerClusterer({
        markers,
        map,
        algorithm: new SuperClusterAlgorithm({ radius: 200 }),
    })
}

export default MapComponent