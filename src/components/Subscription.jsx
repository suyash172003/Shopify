import React from 'react'
import { BsFillLockFill } from "react-icons/bs";
import { IoFastFood } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import { RiDiscountPercentFill } from "react-icons/ri";
import {motion} from 'framer-motion'


function Subscription() {
  const [view, useView] = React.useState(false)

  return (
    <motion.div initial={{scale:0}} whileInView={{scale:1}}  transition={{ease:"linear"}} className='h-full w-full py-30'>
        <div className='flex justify-center items-center gap-10'>
          <img src="https://shopsy-tcj.netlify.app/assets/women2-wroTMLvf.jpg"></img>
          <div>
              <h1 className='font-black text-2xl'>Winter Sale Upto 50% Off</h1>
              <p className='font-extralight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae totam ipsum corporis non, autem eligendi minima.</p>
              <ul className='flex flex-col gap-5 mt-5'>
                <li className='flex items-center gap-2'>
                  <BsFillLockFill></BsFillLockFill>
                  <span>Quality Products</span>
                </li>
                <li className='flex items-center gap-2'>
                  <IoFastFood></IoFastFood>
                  <span>Fast Delivery</span>
                </li>
                <li className='flex items-center gap-2'>
                  <MdPayment></MdPayment>
                  <span>Easy Payment</span>
                </li>
                <li className='flex items-center gap-2'>
                  <RiDiscountPercentFill></RiDiscountPercentFill>
                  <span>Get Offers</span>
                </li>
              </ul>
          </div>
        </div>
        <div className='h-60 w-full bg-amber-400 flex flex-col items-center justify-center mt-10 p-10 gap-2'>
          <h1 className='text-2xl font-bold'>Get Notified About New Products</h1>
          <div className='h-12 w-64 bg-white flex items-center p-2'>
            <input type='email' placeholder='Enter your email'></input>
          </div>

        </div>
    </motion.div>
  )
}

export default Subscription