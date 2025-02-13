import React from 'react'
import '../index.css'

function Landing() {
  const navbar = ["Home", "Orders", "Cart"]
  const heading = ["Welcome", "to", "Apni", "Dukkan"]
  return (
    <div className='h-screen w-full flex flex-col overflow-hidden gap-5'>
         <div className='w-full h-14 flex justify-center items-center text-black font-serif gap-10'>
            {navbar.map((item, index) => (
                <h1 className='font-black text-2xl text-black' key={index}>{item}</h1>
            ))}
        </div>
        <div className='h-full w-full flex flex-row gap-50 justify-between items-center'>
          <div className='h-full w-50'>
            <div className='flex flex-col'>
            {heading.map((item, index) => (
              <h1 className='text-6xl text-black font-extrabold' key={index}>{item}</h1>
            ))}
            <button className='bg-amber-600 h-10 w-20 rounded-4xl'>Order</button>
            </div>
          </div>
          <div className='h-full w-96'>
            <div className='px-20 flex justify-end overflow-hidden rounded-br-sm'>
                <div className='h-96 w-96 bg-orange-200 rotate-45 -translate-y-1/3'></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Landing