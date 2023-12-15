'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const SingleUserPage = ({ params }) => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    isAdmin: false,
    isActive: false,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/singleuser/?id=${params.id}`, { cache: 'no-store' });
        const singleUser = await response.json();

        if (response.ok) {
         
          setFormData({
            username: singleUser.user.username || '',
            email:singleUser.user.email || '',
            password: singleUser.user.password || '',
            phone: singleUser.user.phone || '',
            address: singleUser.user.address || '',
            isAdmin: singleUser.isAdmin || false,
            isActive: singleUser.isActive || false,
          });
        } else {
          console.error('Error fetching user:', singleUser.error);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    }

    fetchData();
  }, [params.id]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked,
    });
  };


  return (
    <div className='w-full h-auto p-4 bg-purple-900 rounded-lg flex justify-between text-white'>
      <div className='w-1/3 h-auto'>
        <div>
          <Image src='/userimage.png' width={200} height={200} alt='Picture of the author' />
        </div>
      </div>
      <div className='w-full h-auto p-3 '>
        <form className='flex flex-col'>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            name='username'
            value={formData.username}
            onChange={handleInputChange}
            placeholder='Enter username'
            className='bg-blue-950 rounded-md p-3'
          />
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            placeholder='Enter email'
            className='bg-blue-950 rounded-md p-3'
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            value={formData.password}
            onChange={handleInputChange}
            placeholder='Enter password'
            className='bg-blue-950 rounded-md p-3'
          />
          <label htmlFor='phone'>Phone</label>
          <input
            type='text'
            id='phone'
            name='phone'
            value={formData.phone}
            onChange={handleInputChange}
            placeholder='Enter phone number'
            className='bg-blue-950 rounded-md p-3'
          />
          <label htmlFor='address'>Address</label>
          <textarea
            id='address'
            name='address'
            value={formData.address}
            onChange={handleInputChange}
            placeholder='Enter address'
            className='bg-blue-950 rounded-md p-3'
          />
          <label htmlFor='isAdmin'>Is Admin?</label>
          <select
            id='isAdmin'
            name='isAdmin'
            value={formData.isAdmin}
            onChange={handleCheckboxChange}
            className='bg-blue-950 rounded-md p-3'
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label htmlFor='isActive'>Is Active?</label>
          <select
            id='isActive'
            name='isActive'
            value={formData.isActive}
            onChange={handleCheckboxChange}
            className='bg-blue-950 rounded-md p-3'
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
