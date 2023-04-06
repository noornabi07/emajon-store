import React from 'react';

const Cart = () => {
    return (
        <div className='bg-slate-900 text-white p-4 w-72 rounded-md sticky top-5'>
            <h2 className='text-3xl font-semibold text-center  mb-4'>Orders Summary</h2>
                <p className='font-semibold text-xl text-lime-400'>Selected Items: <span className='text-red-500'>$</span></p>
                <p className='font-semibold text-xl my-3 text-lime-400'>Total Price: <span className='text-red-500'>$</span></p>
                <p className='font-semibold text-xl text-lime-400'>Total Shipping Charge: <span className='text-red-500'>$</span></p>
                <p className='font-semibold text-xl my-3 text-lime-400'>Tax: <span className='text-red-500'>$</span></p>
                <p className='font-semibold text-2xl text-lime-400'>Grand Total: <span className='text-red-500'>$</span></p>
        </div>
    );
};

export default Cart;