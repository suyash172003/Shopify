import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Brands from './components/Brands'
import './index.css'
import Products from './components/Products'
import Testimonals from './components/Testimonals'
import Footer from './components/Footer'
import Subscription from './components/Subscription'

function App() {
  return (
    <div className='h-full w-full'>
      <Navbar/>
      <Landing/>
      <Brands/>
      <Products/>
      <Subscription/>
      <Brands/>
      <Testimonals/>
      <Footer/>
    </div>
  )
}

export default App