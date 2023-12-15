'use client'
import React from 'react'

const DeleteButton = ({id}) => {
    async function deleteTask(){
        const res = await fetch(`/api/formuser?id=${id}`, {method: 'DELETE'})
        console.log(id)
        window.location.reload();
    }
   
  return (
    <div>
        <button onClick={deleteTask} className='bg-rose-500 rounded-sm p-1 cursor-pointer'>Delete</button>
    </div>
  )
}

export default DeleteButton;