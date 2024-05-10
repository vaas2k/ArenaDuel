import Image from 'next/image'
import React from 'react'

const Banner = ( {image} : any ) => {
  return (
    <div>
        <img
        src={'/back1.jpg'}
        alt='banner'
        className='w-[100%] h-[220px] object-cover rounded-t-lg hover:drop-shadow-xl cursor-pointer'
        />
        <img 
         alt='profilepic'
         src={image}
         className='relative cursor-pointer object-cover rounded-full border-white w-[130px] 
         h-[130px] mt-[-60px] ml-[20px] hover:drop-shadow-xl transition-all ease-linear'
         />
    </div>
  )
}

export default Banner