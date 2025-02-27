import React from 'react'

function Testimonals() {
  return (
    <div className='h-full w-full flex flex-col justify-between items-center p-10'>
      <div className='flex flex-col justify-between items-center p-30'>
        <div className='text-amber-500'>What our customers are saying</div>
        <div className='font-bold text-3xl'>Testimonals</div>
        <div className='text-gray-400'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dignissimos
        </div>
      </div>
      <div className='flex flex-row justify-center items-center gap-20'>
        <div className='h-60 w-96 bg-amber-400 flex flex-col items-start justify-start gap-2 p-10 rounded-2xl'>
            <img src="https://picsum.photos/102/102" className='h-20 w-20 rounded-full'></img>
            <p className='font-extralight'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem rerum molestiae</p>
            <h1 className='font-bold text-2xl'>Virat Kholi</h1>
        </div>
        <div className='h-60 w-96 bg-amber-400 flex flex-col items-start justify-start gap-2 p-10 rounded-2xl'>
            <img src="https://picsum.photos/102/102" className='h-20 w-20 rounded-full'></img>
            <p className='font-extralight'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem rerum molestiae</p>
            <h1 className='font-bold text-2xl'>Satya Nadella</h1>
        </div>
        <div className='h-60 w-96 bg-amber-400 flex flex-col items-start justify-start gap-2 p-10 rounded-2xl'>
            <img src="https://picsum.photos/102/102" className='h-20 w-20 rounded-full'></img>
            <p className='font-extralight'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem rerum molestiae</p>
            <h1 className='font-bold text-2xl'>Sachin Tendulkar</h1>
        </div>
      </div>
    </div>
  )
}

export default Testimonals