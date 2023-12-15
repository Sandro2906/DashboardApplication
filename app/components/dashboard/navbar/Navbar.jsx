import React from 'react'
import { BiWorld } from "react-icons/bi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";



const Navbar = () => {
  return (
    <div className='pl-7 w-full'>
    <div className='w-full h-[70px] bg-purple-900 text-white rounded-lg  flex justify-between items-center p-4'>
    <h1>Dashboard</h1>
    <div className='flex space-x-3 justify-center items-center'>
    <input className='p-2 rounded-md text-gray-600' type="text" placeholder="Search.."></input>
    <FaRegBell />
    <BiWorld />
    <IoChatboxEllipsesOutline />
    </div>
    </div>
    </div>
  )
}

export default Navbar