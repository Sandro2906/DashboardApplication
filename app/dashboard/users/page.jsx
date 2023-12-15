'use client'
import PaginationButton from '@/app/components/dashboard/pagination/PaginationButton'
import Serach from '@/app/components/dashboard/search/serach'
import Link from 'next/link'
import React from 'react'
import { useState, useEffect } from 'react'
import DeleteButton from '@/app/components/dashboard/button/DeleteButton'

const getData = async ()=>{
  const res = await fetch('/api/formuser',{
      cache: 'no-store',
  })
  const data = await res.json();
  return data.userss
}


const UserPage =  () => {

  const [user,setUser] = useState([])
  useEffect(()=>{
      const funkcijaFetch = async ()=>{
          const podaci = await getData();
          setUser(podaci);
      }
      funkcijaFetch();
   
  },[])


  return (
    <div className='w-full h-auto bg-purple-900 p-4 rounded-lg text-white'>
   <div className='w-full h-auto flex justify-between items-center'>
      <Serach placeholder='Search for a user...' />
      <Link href='/dashboard/users/add'>
      <button className='w-[100px] h-auto p-3 bg-black rounded-md text-white'>Add New</button>
      </Link>
      </div>
      <table className='w-full h-auto mt-5'>
      <thead>
        <tr>
        <td>Name</td>
        <td>Email</td>
        <td>Created At</td>
        <td>Role</td>
        <td>Status</td>
        <td>Action</td>
        </tr>
      </thead>
      <tbody>
      {user.map((user)=>(
        <tr key={user} >
        <td><div className='flex items-center gap-2'>{user.username}</div></td>
        <td>{user.email}</td>
        <td>{user.createdAt}</td>
        <td>{user.isAdmin ? 'Admin' : "Client"}</td>
        <td>{user.isActive ? 'True' : 'False'}</td>
        <td className='gap-3'>
        <div className='w-full flex'>
       <Link href={`/dashboard/users/${user._id}`}>
        <button className='bg-sky-500 rounded-sm p-1 mr-2 cursor-pointer'>View</button></Link>
          <DeleteButton id={user._id} />
          </div>
        </td>
      </tr>
      ))}
      </tbody>
      </table>
      <PaginationButton />
    </div>
  )
}

export default UserPage;

