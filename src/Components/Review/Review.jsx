import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'

const Review = ({ product, handleDelete }) => {
    const {id} = product;
   
    return (
        <div className=' w-[700px] flex pr-4 my-5 border-2 justify-between border-gray-300 items-center rounded-lg'>
            <div className='flex items-center'>
                <img className='w-32 p-2' src={product.img} alt="" />
                <div className='ml-4'>
                    <p className='font-bold text-xxl'>{product.name}</p>
                    <p className='font-bold'>Price: <span className='text-red-500'>${product.price}</span></p>
                    <p className='font-bold'>Shipping: <span className='text-red-500'>${product.shipping}</span></p>
                </div>
            </div>
            <div>
                <h2 onClick={() =>handleDelete(id)} className='bg-red-200 p-4 rounded-full hover:bg-red-600 flex justify-center items-center'>
                <TrashIcon className="h-6 w-6 text-red-400" />
                </h2>
            </div>
        </div>
    );
};

export default Review;