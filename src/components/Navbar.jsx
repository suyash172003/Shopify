import React from 'react'
import '../index.css'
import image from "../assets/shopping-bag.png"
import { IoIosSearch } from "react-icons/io";

function Navbar() {
  const word = "SHOPIFY".split("")
  return (
    <div className='h-20 w-full flex flex-row bg-amber-100 '>
      <div className='w-1/2 h-full flex flex-row items-center justify-start px-10'>
        <img src={image} className='h-10 w-10'></img>
        <div className='text-black'>{word}</div>
      </div>
      <div className='w-1/2 h-full flex flex-row items-center justify-end px-10 gap-10'>
        <div className='py-2 px-4 w-64 max-w-md bg-white rounded-full flex items-center'>
          <input type='text' placeholder='Search' className='flex-grow h-10 bg-transparent outline-none px-4'></input>
          <IoIosSearch className='h-6 w-6 text-gray-500'></IoIosSearch>
        </div>
        <button className='h-10 w-20 bg-amber-400 text-white rounded-md'>Sign In</button>
        <button className='h-10 w-20 bg-amber-400 text-white rounded-md'>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar