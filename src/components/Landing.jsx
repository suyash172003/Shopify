import React from 'react'
import '../index.css'
import {delay, motion} from 'framer-motion'

function Landing() {
  const navbar = ["Home", "Top Rated", "Kids Wear", "Mens Wear", "Electronics", "Trending Products"]
  const heading = ["Upto 50% off", "on all Men's Wear"]
  return (
    <div className='h-screen w-full flex flex-col overflow-hidden gap-5'>
         <motion.div initial={{scale:0}} animate={{scale:1}} transition={{duration:0.4}} className='h-4 w-full flex flex-row justify-center items-center mt-4'>
            <ul className='h-full w-full flex flex-row justify-center items-center gap-10'>
              {navbar.map((item, index) => {
                return <li key={index}>{item}</li>
              })}
            </ul>
         </motion.div>
         <div className='h-full w-full flex flex-row justify-center items-center bg-gray-100'>
            <div className='h-full w-1/2 flex flex-col justify-center items-start p-20 gap-4'>
              <h1 className='text-6xl font-bold'>{heading[0]}</h1>
              <h1 className='text-6xl font-bold'>{heading[1]}</h1>
              <h1 className='text-6xl font-bold'>{heading[2]}</h1>
              <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button className='h-12 w-40 bg-amber-600 text-white rounded-md mt-5'>Shop Now</button>  
            </div>
            <div className='top-1/2 h-full w-full overflow-hidden'>
              
              <div className='h-full w-full rotate-z-45 -translate-y-1/2 bg-amber-100 rounded-2xl'>
                <div className='h-full w-full flex flex-col translate-y-1/2 justify-center items-end -rotate-z-45'>
                  <img src='https://shopsy-tcj.netlify.app/assets/sale-cnpHUeHf.png' alt='landing' className='h-96 w-96 rounded-md'/>
                </div>
              </div>

              
            </div>
         </div>

    </div>
    
  )
}

export default Landing