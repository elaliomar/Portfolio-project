import React from 'react'
import aboutme from '../assets/aboutme.jpg'

export default function About() {
  return (
    <div className='w-[92%] mx-auto font-semibold relative top-12'>
    <div className='flex md:flex-row md:justify-center   md:items-start flex-col items-center'>
        <div className='h-96 rounded '>
          <img src={aboutme} alt=""/>
        </div>
        <div className=' relative top-8 md:right-8  '>
          <h1 className='md:font-[system-ui] text-4xl font-medium  mb-8'><span className='border-b-4 border-gray-400'>ABOUT <span className='border-b-4 border-gray-400 text-gray-500'>ME</span></span></h1>
          <h2 className='md:font-[system-ui] text-2xl font-thin md:pb-8 pb-4'>Front End Developer</h2>
          <div className='w-full  pb-4'>
          <p>I am a Computer Engineering graduate with a CGPA of 3.4, deeply passionate about programming.
            <br/>Recently, I earned the JavaScript Algorithms and Data Structures certification from FreeCodeCamp,<br/>
              accumulating 940 points across various design and algorithmic tasks.</p> 
          </div>
            
          
        </div>
    </div>
    </div>
  )
}
