import React, { useState } from 'react';
import { CgDarkMode } from "react-icons/cg";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

function Header({themeSwitch}) {
    const components = [{id:1,name:"Home",link:''},
                        {id:2,name:"Projects",link:'projects'},
                        {id:3,name:"About Me",link:'about-me'},
                        {id:4,name:"Contact Me",link:'contact-me'}
                    ]
    
    const [isOpen,setIsOpen] = useState(false)

    
    const toggleNavbar = () =>{
        setIsOpen(!isOpen)
    }

  return (
    <header>
        <nav className='flex justify-between items-center w-[92%] mx-auto font-serif font-semibold '>
            <div>
                <span className='italic'>Portfolio</span>
            </div>
            <div className={`duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 ${isOpen ? 'top-[9%]' : 'top-[-100%]'} md:w-auto w-full flex items-center px-5 bg-slate-400 z-10 md:bg-inherit`}>
                <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-6'>
                    {components.map((component) =>(
                         <li key={component.id}>
                            <Link className='hover:text-gray-500 cursor-pointer' to={`/${component.link}`}>{component.name}</Link>
                         </li>
                    ))}
                </ul>
            </div>
            <div className='flex items-center gap-6'>
                <button onClick={themeSwitch}>
                        <CgDarkMode />
                    </button>
                    <button onClick={toggleNavbar} className='cursor-pointer md:hidden'>
                        {isOpen ? <IoMdClose/>  : <TiThMenu/>}
                    </button>

            </div>
        </nav>
        <div className='border-b-4 border-gray-500 md:mx-10 mx-4 my-2'>
            </div>
    </header>
  )
}

export default Header