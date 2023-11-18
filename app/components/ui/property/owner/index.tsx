import React from 'react'
import { Avatar } from 'primereact/avatar'

const Owner = () => {
    return (
        <section className="lg:mt-16 p-6 border-[1.5px] border-[#E0DEF7] bg-[#F7F7FD] rounded-[8px]">
            <div>
                <div className="mb-6">
                    <h2 className="lg:text-[16px] font-[500] text-[#000929] opacity-[0.5]">
                        Listed by property owner
                    </h2>
                </div>
                <div className="flex justify-between">
                    <div className="flex items-center  gap-x-4">
                        <Avatar
                            image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            icon="pi pi-user"
                            shape="circle"
                            className="bg-[#000] w-[60px] h-[60px]"
                        />

                        <div className="flex flex-col gap-y-2">
                            <h2 className="lg:text-[16px] font-[700] text-[#000929] ">
                                Madina Aulia
                            </h2>
                            <span className="lg:text-[16px] font-[500] text-[#000929] opacity-[0.5]">
                                Rich Capital Properties LLC
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
