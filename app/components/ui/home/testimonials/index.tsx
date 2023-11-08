import { Avatar } from 'primereact/avatar'

const Testimonials = () => {
    return (
        <section className="w-full bg-custom-gradient-index py-20">
            <div className="text-blue-black flex flex-col justify-between items-center max-w-[736px] mx-auto h-[380px] ">
                <h1 className="text-[40px] font-[700]">Testimonials</h1>
                <p className="font-[16px] font-400 opacity-[0.7]">
                    See what our property managers, landlords, and tenants have
                    to say
                </p>
                <p className="text-[20px]">
                    “Estatery is the platform I go to on almost a daily basis
                    for 2nd home and vacation condo shopping, or to just look at
                    dream homes in new areas. Thanks for fun home shopping and
                    comparative analyzing, Estatery!”
                </p>
                <p>
                    {' '}
                    <span className="font-bold ">Mira Culos, </span>Renter{' '}
                </p>
                <div className="flex justify-between items-center w-[256px] pt-4">
                    <Avatar
                        image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        icon="pi pi-user"
                        shape="circle"
                        className="bg-[#000] w-[60px] h-[60px] object-cover"
                    />
                    <Avatar
                        image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        icon="pi pi-user"
                        shape="circle"
                        className="bg-[#000] w-[60px] h-[60px] object-cover"
                    />
                    <Avatar
                        image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        icon="pi pi-user"
                        shape="circle"
                        className="bg-[#000] w-[60px] h-[60px]"
                    />
                </div>
            </div>
        </section>
    )
}

export default Testimonials
