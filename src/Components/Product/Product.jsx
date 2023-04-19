import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const Product = ({ shop, handleAddToCart }) => {
    const {img, name, price, ratings, seller } = shop;

    return (
        <div className='w-64 border-4 border-gray-300 rounded-lg relative'>
            <img className='p-2' src={img} alt="" />
            <div className='ml-3'>
                <p className='font-bold text-red-600 mt-3'>{name}</p>
                <p className='my-3 font-bold'>Pricec: <span className='text-red-500'>${price}</span></p>
                <p className='font-bold'>Manufacturer: {seller}</p>
                <p className='mt-3 mb-16 font-bold'>Rating: <span className='text-orange-500'>{ratings}</span></p>
            </div>
            <button onClick={() => handleAddToCart(shop)} className='bg-slate-900 text-white w-full hover:bg-green-600 py-2 absolute bottom-0 flex items-center justify-center'>
                <span className='font-bold'>Add To Cart</span>
                <ShoppingCartIcon className="h-6 w-6 ml-3 text-white" />
                </button>
        </div>
    );
};

export default Product;