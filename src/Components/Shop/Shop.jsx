import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const shops = useLoaderData();
    const [cart, setCart] = useState([]);

    useEffect( () =>{
        const storedCart = getShoppingCart();
        let savedCart = []
        // get id
        for(const id in storedCart){
            // get product by using id
            const addedProduct = shops.find(product => product.id === id);
            if(addedProduct){
                // add quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // added product in savedCart
                savedCart.push(addedProduct)
            }
        }
        // add to in cart
        setCart(savedCart);
    }, [shops])

    const handleAddToCart = (shop) =>{
        const newCart = [...cart, shop];
        setCart(newCart)
        addToDb(shop.id)
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