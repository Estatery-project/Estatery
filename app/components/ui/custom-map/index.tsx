// 'use client'
// import React from 'react'
// import {
//     GoogleMap,
//     MarkerF,
//     useJsApiLoader,
//     CircleF,
// } from '@react-google-maps/api'
// import { MarkerIcon } from '@/public/assets/icons/icons'

// const CustomGoogleMap = ({ center, style, markerType }: any) => {
//     const { isLoaded } = useJsApiLoader({
//         id: 'google-map-script',
//         googleMapsApiKey: 'AIzaSyB4wwjaaE2gCMFpsVYErvg1kh-LxE-4v3o',
//     })

//     return (
//         <>
//             {isLoaded ? (
//                 <GoogleMap
//                     mapContainerClassName={style}
//                     center={center}
//                     zoom={15}
//                 >
//                     {markerType === 'marker' && (
//                         <MarkerF
//                             icon="https://ik.imagekit.io/wnivejxts/markermig.png?updatedAt=1700242187958"
//                             position={center}
//                         />
//                     )}
//                     {markerType === 'circle' && (
//                         <CircleF
//                             center={center}
//                             radius={200}
//                             options={{
//                                 fillColor: '#21759F',
//                                 strokeColor: '#21759F',
//                             }}
//                         />
//                     )}
//                 </GoogleMap>
//             ) : (
//                 <></>
//             )}
//         </>
//     )
// }

// export default CustomGoogleMap
