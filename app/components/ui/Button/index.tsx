import React from 'react'

const Button = ({ className, type, content }: any) => {
    return (
        <button type={type} className={className}>
            {content}
        </button>
    )
}

export default Button;
