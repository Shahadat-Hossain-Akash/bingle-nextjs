import React from 'react'

export default function FormField({ type, placeholder, name, register, error }) {
    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                className="p-4 rounded-xl bg-input-field focus:outline outline-2 outline-[#1A8DFF]"
                {...register(name)}
            />
            {error &&
                <p className='w-full bg-red-500/30 border-[1px] border-red-400/70 mt-2 py-2 text-red-400 rounded-xl px-4'
                >
                    {error.message}
                </p>
            }
        </>
    )
}
