import React from 'react'

export default function DynamicEmptyState({title="", subTitle=""}) {
  return (
    <div className='w-full h-full justify-center items-center flex flex-col'>
      <span className='text-sm md:text-xl text-[#888]'>{title}</span>
      <span className='text-xs md:text-sm text-[#363636] text-center'>{subTitle}</span>
    </div>
  )
}
