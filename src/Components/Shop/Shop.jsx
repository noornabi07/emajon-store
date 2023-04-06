import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const shops = useLoaderData();
    // console.log(shops)
    return (
        <div className='flex justify-between px-16 mt-10'>
            <div className='grid grid-cols-3 gap-5'>
                {
                    shops.map(shop => <Product
                        key={shop.id}
                        shop={shop}
                    ></Product>)
                }
            </div>
            <div>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;