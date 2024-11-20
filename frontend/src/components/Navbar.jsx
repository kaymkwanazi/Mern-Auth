import React from 'react'
import { GiDogHouse } from 'react-icons/gi'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='flex z-50 fixed w-full justify-between py-3 px-3 bg-slate-300'>
        <Link to='/'>
            <h1 className='text-2xl'>PET SHOP</h1>
        </Link>
        <ul className='flex items-center justify-center'>
            <li className='space-x-5'>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/about">Products</a>
                <a href="/products">Contact</a>
            </li>
        </ul>
        <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 rounded'>Sign In</button>
    </nav>
  )
}