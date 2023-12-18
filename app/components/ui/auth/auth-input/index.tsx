'use client'

import React, { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';
interface Props {
    name: string
    type: string
    id: string
    placeholder: string
    labelText: string
    formValues: any
    setFormValues: any
    error: string | null
}

const AuthInput = ({
    error,
    name,
    type,
    id,
    placeholder,
    labelText,
    formValues,
    setFormValues,
}: Props) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value, 'event.target.value')

        if (type !== 'checkbox') {
            const { name, value } = event.target
            setFormValues({ ...formValues, [name]: value })
        }
        else{
            const { name, checked } = event.target
            setFormValues({ ...formValues, [name]: checked })
        }
    }

    console.log(formValues, 'formvalues')

    return (
        <div
            className={`flex ${
                type == 'checkbox'
                    ? 'flex-row-reverse   justify-end'
                    : 'flex-col'
            }  w-full`}
        >
            <label
                htmlFor="email"
                className={`text-[#000929] font-[500] text-[14px] mb-2 ${
                    type == 'checkbox' ? 'items-center mb-0' : ' '
                }`}
            >
                {labelText}
            </label>
            <input
                className={`rounded-[8px] ${
                    type == 'checkbox' ? ' mr-2' : ' w-full'
                } border-[1.5px] px-4 py-2 border-[#E0DEF7] bg-[#F7F7FD]`}
                type={type}
                name={name}
                checked={formValues?.isManager}
                id={id}
                placeholder={placeholder}
                required={type !== 'checkbox'}
                value={
                    type === 'email'
                        ? formValues?.email
                        : type === 'name'
                        ? formValues?.name
                        : type === 'password'
                        ? formValues?.password
                        : formValues?.isManager
                }
                onChange={handleChange}
            />

            <p className="text-[#FF9494] text-[16px] mt-2">{error}</p>
        </div>
    )
}

export default AuthInput
