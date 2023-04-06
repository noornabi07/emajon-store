import React from 'react';
import img from '../../../public/Logo.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-slate-900 text-white flex justify-between px-16 items-center py-4'>
            <img src={img} alt="" />
            <div>
                <Link className='font-bold px-6 hover:text-orange-500' to="/">Home</Link>
                <Link className='font-bold px-6 hover:text-orange-500' to="/shop">Shop</Link>
                <Link className='font-bold px-6 hover:text-orange-500' to="/orders">Orders Review</Link>
                <Link className='font-bold px-6 hover:text-orange-500' to="/inventory">Inventory</Link>
                <Link className='font-bold px-6 hover:text-orange-500' to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;