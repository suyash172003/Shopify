import React from 'react'
import '../index.css'

function Landing() {
  const navbar = ["Home", "Orders", "Cart"]
  const heading = ["Welcome", "to", "Shopify"]
  return (
    <div className='h-screen w-full flex flex-col overflow-hidden gap-5'>
         <div className='h-10 w-full flex flex-row justify-between items-center'>
            <ul className='h-full w-full flex flex-row justify-center items-center gap-10'>
              {navbar.map((item, index) => {
                return <li key={index}>{item}</li>
              })}
            </ul>
         </div>
         <div className='h-full w-full flex flex-row justify-center items-center gap-5'>
            <div className='h-full w-1/2 flex flex-col justify-start items-center'>
            <ul className='h-96 w-full flex flex-col gap-5 justify-center items-center'>
              {heading.map((item, index) => {
                return <h1 className='text-6xl font-bold text-black' key={index}>{item}</h1>
              })}
            </ul>
            <button className='h-10 w-20 bg-amber-400 text-white rounded-md'>Shop Now</button>
          </div>
          <div className='px-40 h-full w-1/2 overflow-hidden'>
              <div className='h-80 w-80 rotate-45 bg-amber-100'></div>
          </div>
         </div>
    </div>
  )
}

export default Landing