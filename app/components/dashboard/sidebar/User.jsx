import React from 'react'
import Image from 'next/image'

const User = () => {
  return (
    <div className='w-full h-auto justify-center flex items-center p-4 '>
        <div className='rounded-full w-[70px] h-[70px] mx-2'>
        <Image width={100} height={100} src={'/1683566541765.jpg'} className='w-full h-full object-cover rounded-full'/></div>
        <h1 className='text-xl mx-2'>Sandro Gataric</h1>
    </div>
  )
}

export default User