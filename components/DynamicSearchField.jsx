import Image from 'next/image'
import React from 'react'

export default function DynamicSearchField() {
    return (
        <div className='w-full relative flex justify-between bg-[#9B9B9B]/5 items-center rounded-xl'>
            <input type="text" className='p-3 rounded-xl w-full outline-none bg-transparent placeholder:text-[#888]' placeholder='Search' />
            <button className='h-full right-0 top-0 flex w-14  items-center justify-center rounded-xl z-10 ou'>
                <Image src={'/assets/search.svg'} alt='search' width={16} height={16} />
            </button>
        </div>
    )
}
