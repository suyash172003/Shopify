import React from 'react'
import { FaInstagram, FaFacebook, FaLinkedin, FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import image from '../assets/footer-pattern.jpg';

function Footer() {
  return (
    <div className='relative h-full w-full'>
        <img src={image} alt="footer-pattern" className='h-96 w-full absolute'/>
        <div className='relative h-full w-full flex flex-row items-center justify-center gap-20 p-10'>
            <div className='text-white gap-5'>
              <h1 className='text-2xl font-bold'>Shopify</h1>
              <p className='font-light'>Shopify is the leading cloud-based, multichannel commerce platform<br/> designed for small and medium-sized businesses.</p>
            </div>
            <div className='text-white gap-5'>
              <h1 className='text-2xl font-bold'>Important Links</h1>
              <ul className='space-y-2'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className='text-white gap-5'>
              <h1 className='text-2xl font-bold'>Links</h1>
              <ul className='space-y-2'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className='text-white flex flex-col gap-5'>
              <div className='flex flex-row gap-5'>
                <FaInstagram size={30} />
                <FaFacebook size={30} />
                <FaLinkedin size={30} />
              </div>
              <div className='flex flex-row gap-5 items-center'>
                <FaLocationArrow size={20} />
                <p>Shopify, 1234 Main Street, Anytown, USA</p>
              </div>    
              <div className='flex flex-row gap-5 items-center'>
                <FaMobileAlt size={20} />
                <p>123-456-7890</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer