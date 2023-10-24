import React from 'react'

const Button = ({ className, type, children }: any) => {
    return (
        <button
            type={type}
            className={`bg-[#7065F0] text-[#fff] rounded-[8px] text-4 font-[700] ${className}`}
        >
            {children}
        </button>
    )
}

export default Button
