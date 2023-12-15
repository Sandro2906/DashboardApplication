import Image from 'next/image'
import React from 'react'

const Transactions = () => {
  return (
    <div className=' pt-4 text-white'>
    <div className='w-full h-auto p-4 bg-purple-900 rounded-lg'>
    <h1 className='text-xl text-white pb-3 font-semibold'>Transactions</h1>

    <table className='w-full h-auto gap-2'>
      <thead className='text-xl font-extrabold '>
            <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
            </tr>
      </thead>
      <tbody className=''>
        <tr>
            <td className='flex gap-2 items-center'><Image width={40} height={40} alt='pic' className='' src='/favicon.ico' /> Sandro Gataric </td>
            <td>Pending</td>
            <td>30.11.2023</td>
            <td>3000$</td>
        </tr>
        <tr>
        <td className='flex gap-2 items-center'><Image width={40} height={40} alt='pic' className='' src='/favicon.ico' /> Maja Stanic </td>
        <td>Pending</td>
        <td>24.11.2023</td>
        <td>230$</td>
    </tr>
    <tr>
    <td className='flex gap-2 items-center'><Image width={40} height={40} alt='pic' className='' src='/favicon.ico' /> Kristian Gataric </td>
    <td>Pending</td>
    <td>16.11.2023</td>
    <td>160$</td>
</tr>
<tr>
<td className='flex gap-2 items-center'><Image width={40} height={40} alt='pic' className='' src='/favicon.ico' /> Romana Preradovic</td>
<td>Pending</td>
<td>11.11.2023</td>
<td>1200$</td>
</tr>
      </tbody>
    </table>

    
    </div>
    </div>
  )
}

export default Transactions