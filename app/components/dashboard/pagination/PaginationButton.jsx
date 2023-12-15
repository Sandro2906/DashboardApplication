import React from 'react'

const PaginationButton = () => {
  return (
    <div className='w-full h-auto flex justify-between items-center pt-5'>
        <button className='p-2 bg-white text-black rounded-md  w-[100px] disabled:bg-slate-400' disabled>Previous</button>
        <button className='p-2 bg-white text-black rounded-md  w-[100px]'>Next</button>
    </div>
  )
}

export default PaginationButton