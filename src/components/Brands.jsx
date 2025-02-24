import React from 'react'
import Products from './Products'
function Brands() {
  return (
    <div className='h-full w-full flex flex-col justify-between items-center gap-20'>
      <div className='flex flex-col justify-between items-center'>
        <div className='text-amber-400'>Top Selling Products for you</div>
        <h1 className='text-black'>Products</h1>
        <div className='text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint quasi aliquam.</div>
      </div>
      <div className='flex flex-row justify-center items-center gap-30'>
        <div className='h-70 w-40'>
          <img src='https://shopsy-tcj.netlify.app/assets/women-NhG2D3pl.png' className='h-full w-full object-cover'></img>
        </div>
        <div className='h-70 w-40'>
          <img src='https://shopsy-tcj.netlify.app/assets/women2-wroTMLvf.jpg' className='h-full w-full object-cover'></img>
        </div>
        <div className='h-70 w-40'>
          <img src='https://shopsy-tcj.netlify.app/assets/women3-HFaPDX0l.jpg' className='h-full w-full object-cover'></img>
        </div>
        <div className='h-70 w-40'>
          <img src='https://shopsy-tcj.netlify.app/assets/women4-zXERyOhD.jpg' className='h-full w-full object-cover'></img>
        </div>
        <div className='h-70 w-40'>
          <img src='https://shopsy-tcj.netlify.app/assets/women2-wroTMLvf.jpg' className='h-full w-full object-cover'></img>
        </div>
      </div>
      <button className='h-10 w-30 bg-amber-500'>View All Button</button>
    </div>
  )
}

export default Brands