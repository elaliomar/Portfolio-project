import React from 'react'
import SecurityIcon from '../icons/SecurityIcon'
import WebIcon from '../icons/WebIcon'
import Mlicone from '../icons/Mlicone'


export default function Projects() {

  const projects = [
    {
      title:'Agena Full Stack Web App',
      icon:<WebIcon/>,
      link:'https://github.com/elaliomar/MERN_project'
    },
    {
      title:'Earthquake Tweet Analysis',
      icon: <Mlicone/>,
      link:'https://github.com/elaliomar/Earthquake_tweets_analysis'
    },
    {
      title:'RSA Crypto System',
      icon:<SecurityIcon/>,
      link:'https://github.com/elaliomar/RSA_crypto'
    }
  ]
  return (
    <div className='w-[92%] mx-auto font-semibold  relative top-12'>
          <div className='flex flex-col items-center '>
          <div>
            <h1 className='md:font-[system-ui] text-4xl font-medium  mb-8'><span className='border-b-4 border-gray-400'>PROJECTS</span></h1>
            </div>
          <h6  className='md:text-lg text-xs mx-8 font-normal'>During my learning journey, I have built multiple projects across various fields including</h6>
            <h1 className='text-2xl  mx-8 mt-4'><span className='uppercase tracking-wide'>Web Development, Machine Learning, Cryptography</span>, and more.</h1>
            <h6  className='text-lg mx-8 font-normal my-4'>Feel free to explore them if you are interested.</h6>
          </div>
          <div className='flex md:flex-row flex-col md:justify-around '>
          {projects.map((project,index)=>( 
             <a href={project.link}> <div className='flex flex-col items-center rounded-full outline-dashed outline-offset-0 outline-1 outline-gray-600 mt-8 p-10 hover:bg-gray-600'>
                <div>{project.icon}</div>
              <h1>{project.title}</h1>
              </div></a>
          ))}
          </div>
          <div className=' md:m-20 m-8 '>
            <h1>want to see more? <a className='hover:text-sky-400 ring-offset-2 ring-2' href='https://github.com/elaliomar'>Go to my GitHub Account!</a></h1>
          </div>
    </div>
  )
}
