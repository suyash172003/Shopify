import React from 'react'
import '../index.css'
import image from "../assets/shopping-bag.png"
import { IoIosSearch} from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  const word = "SHOPIFY".split("")
  return (
    <div className='h-20 w-full flex flex-row bg-amber-100 '>
      <div className='w-1/2 h-full flex flex-row items-center justify-start px-10'>
        <img src={image} className='h-10 w-10'></img>
        <div className='text-black'>{word}</div>
      </div>
      <div className='w-1/2 h-full flex flex-row items-center justify-end px-10 gap-10'>
        <div className='w-48 max-w-md bg-white rounded-full flex items-center'>
          <input type='text' placeholder='Search' className='flex-grow h-10 bg-transparent outline-none px-4'></input>
          <IoIosSearch className='h-6 w-6 text-gray-500'></IoIosSearch>
        </div>
        <button className='bg-amber-400 h-10 w-20 flex items-center justify-center rounded-3xl'><FaShoppingCart></FaShoppingCart></button>
      </div>
      
    </div>
  )
}

export default Navbar