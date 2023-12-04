import React from 'react'
import { GlassIcon } from '@/public/assets/icons/icons'

const MapSearch = () => {
    return <div className='relative'> 
        <input type="text" placeholder="Search Location" className='border-[2px] rounded-[8px] w-full py-2 px-10 border-[#E0DEF7]'/>
        <GlassIcon className="absolute top-3 left-3"/>

    </div>
}

export default MapSearch
