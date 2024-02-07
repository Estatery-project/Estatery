import React from 'react'
import { Avatar } from 'primereact/avatar'


type estateManagerProps = {
    id:number,
    name:string,
    number:string,
    image:string,
    isAgencyMember: boolean,
    agencyName:string | null,
    estateId:number
}

const Owner = ({estateManager}: estateManagerProps) => {

    console.log(estateManager, 'estateManager');
    const  {id, name, image, number, isAgencyMember, agencyName } = estateManager || {}

    return (
        <section className="lg:mt-16 p-6 border-[1.5px] border-[#E0DEF7] bg-[#F7F7FD] rounded-[8px]">
            <div>
            
                <div className="mb-6">
                    <h2 className="lg:text-[16px] font-[500] text-[#000929] opacity-[0.5]">
                       { !isAgencyMember  ? 'Listed by property owner' : "Listed by  company" }
                    </h2>
                </div>
                <div className="flex justify-between">
                    <div className="flex items-center  gap-x-4">
                        <img
                            src={image}
                            className="bg-[#000] w-[70px] object-cover h-[70px] rounded-full "
                        />

                        <div className="flex flex-col gap-y-2">
                            <h2 className="lg:text-[16px] font-[700] text-[#000929] ">
                                {name}
                            </h2>
                            <span className="lg:text-[16px] font-[500] text-[#000929] opacity-[0.5]">
                                {agencyName}
                            </span>
                        </div>
                    </div>

                    <div className='flex items-center gap-x-3'>
                        <button className='text-[#7065F0] px-6 py-3 text-[700] font-[700] bg-[#E8E6F9] rounded-[8px] '>Ask a question</button>
                        <button className='text-[#7065F0] px-6 py-3 text-[700] font-[700] bg-[#E8E6F9] rounded-[8px] '>Get more info</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Owner
