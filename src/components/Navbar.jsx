import React from 'react'
import '../index.css'
import image from "../assets/shopping-bag.png"
import { IoIosSearch} from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  const word = "SHOPIFY".split("")
  return (
    <div className='h-20 w-full flex flex-row bg-amber-100 '>
      <div className='w-1/2 h-full flex flex-row items-center justify-start p-10 gap-3'>
        <img src={image} className='mb-2 h-10 w-10'></img>
        <div className='text-black font-bold text-2xl'>{word}</div>
      </div>
      <div className='w-1/2 h-full flex flex-row items-center justify-end px-10 gap-10'>
        <div className='h-10 w-48 bg-white rounded-full flex flex-row items-center p-2'>
          <input type='text' placeholder='Search' className='h-4 bg-transparent outline-none'></input>
          <IoIosSearch></IoIosSearch>
        </div>
        <button className='bg-amber-400 h-10 w-20 flex items-center justify-center rounded-3xl'><FaShoppingCart className='h-5 w-5'></FaShoppingCart></button>
      </div>
      
    </div>
  )
}

export default Navbar