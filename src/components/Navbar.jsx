import React from 'react'
import '../index.css'
import image from "../assets/shopping-bag.png"

function Navbar() {
  const word = "SHOPIFY".split("")
  return (
    <div className='h-20 w-full flex flex-row bg-amber-100 '>
      <div className='w-full h-full flex flex-row items-center justify-start px-10'>
        <img src={image} className='h-10 w-10'></img>
        <div className='text-black'>{word}</div>
      </div>
      <div className=' flex items-center justify-end'>
        <div className='py-4 w-50 h-10 bg-white rounded-4xl'></div>
      </div>
    </div>
  )
}

export default Navbar