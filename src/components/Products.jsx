import React from 'react'
import { FaStar } from 'react-icons/fa'
function Products() {
  return (
    <div className='h-full w-full p-10'>
      <div className='text-orange-400'>Top Rated Products for you</div>
      <div className='text-black text-2xl font-bold'>Best Products</div>
      <div className='font-extralight'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et expedita perferendis at esse unde?</div>
      <div className='mt-20 flex flex-row justify-center items-center gap-64'>
        <div className='rounded-b-3xl rounded-t-3xl h-64 w-64 flex flex-col items-center justify-center gap-2 bg-gray-50'>
          <img src='https://shopsy-tcj.netlify.app/assets/shirt-cwf9SKdB.png' className='h-52 w-40'></img>
          
          <div className='rounded-b-3xl rounded-t-3xl h-64 w-64 bg-gray-50 flex items-center justify-center flex-col gap-2'>
            <div className='flex flex-row justify-center items-center'>
              <FaStar size={20} className='text-amber-400'></FaStar>
              <FaStar size={20} className='text-amber-400'></FaStar>
              <FaStar size={20} className='text-amber-400'></FaStar>
              <FaStar size={20} className='text-amber-400'></FaStar>
            </div>
            <h1 className='text-black font-bold'>Casual Wear</h1>
            <p className='font-extralight ml-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <button className='bg-amber-400 h-8 w-28 rounded-3xl text-white'>Order Now</button>
          </div>
        </div>
        <div className='p-10 rounded-b-3xl rounded-t-3xl h-64 w-64 flex flex-col items-center justify-center gap-2 bg-gray-50'>
          <img src='https://shopsy-tcj.netlify.app/assets/shirt2-XQzG6elp.png' className='h-56 w-40'></img>
          <div className='rounded-b-3xl rounded-t-3xl h-64 w-64 bg-gray-50 flex items-center justify-center flex-col gap-2'>
            <div className='flex flex-row justify-center items-center'>
              <FaStar size={20} className='text-amber-400'></FaStar>
              <FaStar size={20} className='text-amber-400'></FaStar>
              <FaStar size={20} className='text-amber-400'></FaStar>
              <FaStar size={20} className='text-amber-400'></FaStar>
            </div>
            <h1 className='text-black font-bold'>Casual Wear</h1>
            <p className='font-extralight ml-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <button className='bg-amber-400 h-8 w-28 rounded-3xl text-white'>Order Now</button>
          </div>
        </div>
        <div className='p-10 rounded-b-3xl rounded-t-3xl h-64 w-64 flex flex-col items-center justify-center gap-2 bg-gray-50'>
          <img src='https://shopsy-tcj.netlify.app/assets/shirt3-HwQ10bVo.png' className='h-56 w-40'></img>
          <div className='rounded-b-3xl rounded-t-3xl h-64 w-64 bg-gray-50 flex items-center justify-center flex-col gap-2'>
            <div className='flex flex-row justify-center items-center'>
              <FaStar size={20} className='text-amber-400'></FaStar>
              <FaStar size={20} className='text-amber-400'></FaStar>
              <FaStar size={20} className='text-amber-400'></FaStar>
              <FaStar size={20} className='text-amber-400'></FaStar>
            </div>
            <h1 className='text-black font-bold'>Casual Wear</h1>
            <p className='font-extralight ml-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <button className='bg-amber-400 h-8 w-28 rounded-3xl text-white'>Order Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products