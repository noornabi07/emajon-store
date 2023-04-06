import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const shops = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (shop) =>{
        const newCart = [...cart, shop];
        setCart(newCart)
    }


    // console.log(shops)
    return (
        <div className='flex justify-between px-16 mt-10'>
            <div className='grid grid-cols-3 gap-5'>
                {
                    shops.map(shop => <Product
                        key={shop.id}
                        shop={shop}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;