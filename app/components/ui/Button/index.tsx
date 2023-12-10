import React from 'react'

interface IButton {
    className: string | undefined
    children: React.ReactNode | undefined
    type: 'submit' | 'reset' | 'button' | undefined
    onClick?: () => void;
}

const Button = ({ type, className, children, onClick }: IButton) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`text-white bg-indigo  rounded-[8px] text-4 font-[700] ${className}`}
        >
            {children}
        </button>
    )
}

export default Button
