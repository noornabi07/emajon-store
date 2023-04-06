import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData()

    const [cart, setCart] = useState(savedCart)

    const handleDelete = (id) =>{
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining)
        removeFromDb(id)
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;