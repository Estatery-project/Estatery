import React from 'react'

interface IButton {
    className: string | undefined
    children: React.ReactNode
    type: 'submit' | 'reset' | 'button' | undefined
    onClick: () => void | null
}

const Button = ({ type, className, children, onClick }: IButton) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`bg-indigo text-white rounded-[8px] text-4 font-[700] ${className}`}
        >
            {children}
        </button>
    )
}

export default Button
