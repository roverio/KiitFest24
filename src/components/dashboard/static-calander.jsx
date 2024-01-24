import Image from 'next/image'
import React from 'react'

const  StaticCalander = () => {
  return (
    <div className='text-center bg-black rounded-xl flex flex-col justify-center py-4'> 
      <h1 className='font-semibold font-roboto uppercase tracking-widest'>Merchandise</h1>
      <Image 
        src={"https://res.cloudinary.com/dlkd1pzli/image/upload/v1706050532/kiifest/azfofoq7bz2qi6rbrp9x.svg"} 
        alt='merchandise'
        width={350}
        height={250}
      />
      <button className='bg-gradient-to-b from-[#1741CC] to-[#16BCDC] hover:from-[#16BCDC] hover:to-[#1741CC] py-1 rounded-lg flex self-center px-8'>Add to cart</button>
    </div>
  )
}

export default StaticCalander  