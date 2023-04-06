import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData()

    const [cart, setCart] = useState(savedCart)

    const handleDelete = (id) =>{
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining)
        removeFromDb(id)
    }

    const handleClearCart = () =>{
        setCart([])
        deleteShoppingCart()
    }



    return (
        <div  className='flex justify-between px-16 mt-10'>
            <div>
                {
                    cart.map(product => <Review
                        key={product.id}
                        product={product}
                        handleDelete={handleDelete}
                        
                    ></Review>)
                }
            </div>
            <div>
                <Cart 
                cart={cart}
                handleClearCart={handleClearCart}
                >
                    <button className='bg-purple-500 w-full text-center py-2 px-4 mt-4'>
                        <Link to="/checkout">Proceed Checkout</Link>
                    </button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;