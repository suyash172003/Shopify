import React from 'react'
import { FaStar } from "react-icons/fa";
import {motion} from 'framer-motion'

function Brands() {
  return (
    <div initial={{scale:0}} animate={{scale:1}} transition={{duration:2}} className='p-20 h-full w-full flex flex-col justify-between items-center gap-20'>
      <div className='flex flex-col justify-between items-center'>
        <div className='text-amber-400'>Top Selling Products for you</div>
        <h1 className='text-black font-bold text-3xl'>Products</h1>
        <div className='text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint quasi aliquam.</div>
      </div>
      <div className='flex flex-row justify-center items-center gap-30'>
        <div className='h-70 w-40'>
          <img src='https://shopsy-tcj.netlify.app/assets/women-NhG2D3pl.png' className='h-full w-full object-cover rounded-2xl'></img>
          <div className='mt-2'>
            <h1>Women Ethnic</h1>
            <p>white</p>
            <div className='flex flex-row gap-2'>
              <FaStar size={20} className='text-amber-400'></FaStar>
              <p>5</p>
            </div>
          </div>
        </div>
        <div className='h-70 w-40'>
          <img src='https://shopsy-tcj.netlify.app/assets/women2-wroTMLvf.jpg' className='h-full w-full object-cover rounded-2xl'></img>
          <div className='mt-2'>
            <h1>Women western</h1>
            <p>Red</p>
            <div className='flex flex-row gap-2'>
              <FaStar size={20} className='text-amber-400'></FaStar>
              <p>4.5</p>
            </div>
          </div>
        </div>
        <div className='h-70 w-40'>
          <img src='https://shopsy-tcj.netlify.app/assets/women3-HFaPDX0l.jpg' className='h-full w-full object-cover rounded-2xl'></img>
          <div className='mt-2'>
            <h1>Googles</h1>
            <p>Brown</p>
            <div className='flex flex-row gap-2'>
              <FaStar size={20} className='text-amber-400'></FaStar>
              <p>4.7</p>
            </div>
          </div>
        </div>
        <div className='h-70 w-40'>
          <img src='https://shopsy-tcj.netlify.app/assets/women4-zXERyOhD.jpg' className='h-full w-full object-cover rounded-2xl'></img>
          <div className='mt-2'>
            <h1>Printed T-shirt</h1>
            <p>Yellow</p>
            <div className='flex flex-row gap-2'>
              <FaStar size={20} className='text-amber-400'></FaStar>
              <p>4.4</p>
            </div>
          </div>
        </div>
        <div className='h-70 w-40'>
          <img src='https://shopsy-tcj.netlify.app/assets/women2-wroTMLvf.jpg' className='h-full w-full object-cover rounded-2xl'></img>
          <div className='mt-2'>
            <h1>Women Ethnic</h1>
            <p>Pink</p>
            <div className='flex flex-row gap-2'>
              <FaStar size={20} className='text-amber-400'></FaStar>
              <p>4.5</p>
            </div>
          </div>
        </div>
      </div>
      <button className='mt-10 h-8 w-40 flex items-center justify-center bg-amber-500 text-white rounded-2xl'>View All Button</button>
    </div>
  )
}

export default Brands