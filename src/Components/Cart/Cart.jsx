import React from 'react';

const Cart = ({cart}) => {
    console.log(cart)

    let totalPrice = 0;
    let totalShipping = 0;
    for(const id of cart){
        totalPrice = totalPrice + id.price;
        totalShipping = totalShipping + id.shipping;
    }

    const totalTax = totalPrice*7/100;
    const totalGrandPrice = totalPrice + totalShipping + totalTax;


    return (
        <div className='bg-slate-900 text-white p-4 w-72 rounded-md sticky top-5'>
            <h2 className='text-3xl font-semibold text-center  mb-4'>Orders Summary</h2>
                <p className='font-semibold text-xl text-lime-400'>Selected Items: <span className='text-red-500'>{cart.length}</span></p>
                <p className='font-semibold text-xl my-3 text-lime-400'>Total Price: <span className='text-red-500'>${totalPrice}</span></p>
                <p className='font-semibold text-xl text-lime-400'>Shipping: <span className='text-red-500'>${totalShipping.toFixed(2)}</span></p>
                <p className='font-semibold text-xl my-3 text-lime-400'>Tax: <span className='text-red-500'>${totalTax.toFixed(2)}</span></p>
                <p className='font-semibold text-xl text-lime-400'>Grand Total: <span className='text-red-500'>${totalGrandPrice}</span></p>
        </div>
    );
};

export default Cart;