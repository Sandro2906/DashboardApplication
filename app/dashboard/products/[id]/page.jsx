'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
const SingleProductPage = ({ params }) => {
  const [formData, setFormData] = useState({
    title: '',
    desc: '',
    price: '',
    stock: '',
    color: '',
    size: '',
    cat: true,
    isActive: 'kitchen',
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/singleproduct?id=${params.id}`, { cache: 'no-store' });
        const singleProduct = await response.json();

        if (response.ok) {
          setFormData({
            title: singleProduct.product.title || '',
            desc: singleProduct.product.desc || '',
            price: singleProduct.product.price || '',
            stock: singleProduct.product.stock || '',
            color: singleProduct.product.color || '',
            size: singleProduct.product.size || '',
          });
        } else {
          console.error('Error fetching user:', singleProduct.error);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    }

    fetchData();
  }, [params.id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };



  return (
    <div className='w-full h-auto p-4 bg-purple-900 rounded-lg flex justify-between text-white'>
      <div className='w-1/3 h-auto'>
        <div>
          <Image width={200} height={200} src={'/product.png'}  alt='' />
        </div>
      </div>
      <div className='w-full h-auto p-3 '>
        <form className='flex flex-col'>
          <input type='hidden' name='id' />
          <label>Title</label>
          <input
            type='text'
            name='title'
            value={formData.title}
            onChange={handleInputChange}
            className='bg-blue-950 rounded-md p-3'
          />
          <label>Price</label>
          <input
            type='number'
            name='price'
            value={formData.price}
            onChange={handleInputChange}
            className='bg-blue-950 rounded-md p-3'
          />
          <label>Stock</label>
          <input
            type='number'
            name='stock'
            value={formData.stock}
            onChange={handleInputChange}
            placeholder='23'
            className='bg-blue-950 rounded-md p-3'
          />
          <label>Color</label>
          <input
            type='text'
            name='color'
            value={formData.color}
            onChange={handleInputChange}
            placeholder='red'
            className='bg-blue-950 rounded-md p-3'
          />
          <label>Size</label>
          <textarea
            type='text'
            name='size'
            value={formData.size}
            onChange={handleInputChange}
            className='bg-blue-950 rounded-md p-3'
          />
          <label>Description</label>
          <textarea
            rows={5}
            name='desc'
            value={formData.desc}
            onChange={handleInputChange}
            className='bg-blue-950 rounded-md p-3'
            placeholder='description'
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
