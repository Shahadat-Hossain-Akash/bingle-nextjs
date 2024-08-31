import Image from 'next/image'
import React from 'react'

export default function Header() {
  const navbarIcon = {
    isAuthenticated: ['/assets/notify.svg', '/assets/settings.svg'],
    anonymous: ['/assets/login.svg', '/assets/signup.svg']
  }
  return (
    <div className='w-full h-12 flex justify-between items-center'>
      <div className='flex gap-2 items-center h-full'>
        <Image src={'/assets/logo.svg'} width={32} height={32} alt='logo' className='flex items-center justify-center h-fit mt-2'/>
        <span className='text-4xl'>
          Bingle
        </span>
      </div>
      <div className='flex gap-2'>
        {
          false ? navbarIcon.isAuthenticated.map((el => (
            <Image src={el} width={24} height={24} alt='icons' key={el} />
          ))) : navbarIcon.anonymous.map((el => (
            <Image src={el} width={24} height={24} alt='icons' key={el}/>
          )))
        }
      </div>
    </div>
  )
}
