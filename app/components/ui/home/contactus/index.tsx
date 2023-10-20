import React from 'react'
import Button from '../../Button'

const HomeContact = () => {
    return (
        <section>
            <div>
                <h3></h3>
                <h1></h1>
                <p></p>
                <form action="" className='' >
                    <input type="text" className='rounded-[8px]  border py-[12px]' placeholder='Enter your email address'/>
                    <Button
                        type="submit"
                        className="bg-[#7065F0] text-[#fff]  right-0 px-[40px] py-[12px] rounded-[8px] "
                        content={'Submit'}
                    />
                </form>
            </div>
        </section>
    )
}

export default HomeContact
