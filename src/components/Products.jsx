import React from 'react'

function Products() {
  return (
    <div className='h-full w-full p-10'>
      <div className='text-orange-400'>Top Rated Products for you</div>
      <div className='text-black text-2xl font-bold'>Best Products</div>
      <div className='font-extralight'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et expedita perferendis at esse unde?</div>
      <div className='flex flex-row justify-center items-center gap-64'>
        <div className='rounded-b-3xl rounded-t-3xl h-64 w-64 bg-gray-100'>
          <img src='https://shopsy-tcj.netlify.app/assets/shirt-cwf9SKdB.png'></img>
        </div>
        <div className='rounded-b-3xl rounded-t-3xl h-64 w-64 bg-gray-100'>
          <img src='https://shopsy-tcj.netlify.app/assets/shirt2-XQzG6elp.png'></img>
        </div>
        <div className='rounded-b-3xl rounded-t-3xl h-64 w-64 bg-gray-100'>
          <img src='https://shopsy-tcj.netlify.app/assets/shirt3-HwQ10bVo.png'></img>
        </div>
      </div>
    </div>
  )
}

export default Products