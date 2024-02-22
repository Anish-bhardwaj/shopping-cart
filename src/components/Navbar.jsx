import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'
import { useSelector } from 'react-redux'



const Navbar = () => {
    const {cart}=useSelector((state)=>state);
  return (
    <div className='bg-slate-900'>
        <nav className='flex items-center justify-between h-20  max-w-6xl mx-auto '>
            <NavLink to="/">
            <img src='/logo.png' className="h-14 ml-5 logo"/>
            </NavLink>
            <div className='text-slate-100 font-medium flex space-x-6 mr-5'>
            <NavLink to="/" className="cursor-pointer hover:text-green-400 transition duration-300 ease-in">Home</NavLink>
            <NavLink to="/cart" className="relative">
                <FaShoppingCart className="  text-2xl cursor-pointer hover:text-green-400 transition duration-300 ease-in"/>
                {
                    cart.length>0&&

                <span className='absolute -top-1 -right-2 bg-green-400 text-xs w-5 h-5 rounded-full flex items-center justify-center animate-bounce'>{cart.length}</span>
                }
            </NavLink>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
