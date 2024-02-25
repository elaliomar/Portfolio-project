import React from 'react'
import homePhoto from '../assets/homePhoto.png'

function Home() {
  return (
 
    <div className='w-[92%] mx-auto relative top-12'>
       <div className='flex flex-col items-center'>
            <h1 className='md:font-[system-ui] text-4xl font-medium  mb-8'><span className='border-b-4 border-gray-400'>HOME</span></h1>
            </div>
      <div className='flex flex-col md:flex-col-reverse items-center justify-between mx-auto '>
        
        <div className='px-auto'>
            <h6 className=' font-bold text-3xl mt-12 '>Hi There,</h6>
            <h1 className='animate-bounce text-xl'> Welcome To</h1>
            <h1 className='md:text-3xl text-xl font-bold italic tracking-wide'> Omar El Ali<span className='animate-ping text-3xl'>'</span>s portfolio</h1>
            
          </div>
          <div className='order-first md:order-last relative'>
                              <img src={homePhoto} alt="" />
              </div>
      </div>
       
    </div>

  )
}

export default Home