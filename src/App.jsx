import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Brands from './components/Brands'
import './index.css'
import Products from './components/Products'

function App() {
  return (
    <div>
      <Navbar/>
      <Landing/>
      <Brands/>
      <Products/>
      <Brands/>
      <Testimonals/>
    </div>
  )
}

export default App