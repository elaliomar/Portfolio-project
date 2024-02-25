import Header from './components/Header'
import {Route,Routes} from "react-router-dom"
import Home from './components/Home'
import Projects from './components/Projects'

import About from './components/About'
import Contact from './components/Contact'
import { useState,useEffect } from 'react'

function App() {

  const [theme,setTheme] = useState("light")

  useEffect(()=>{
    if(theme === "dark"){
      document.documentElement.classList.add("dark")
    }else{
      document.documentElement.classList.remove("dark")
    }
  },[theme])

  const themeSwitch = () =>{
    setTheme(theme === "dark" ? "light" : "dark")
    console.log('clicked')
  }

  return (
    <div className='h-dvh bg-white dark:bg-black dark:text-white'>
   <Header themeSwitch={themeSwitch} />
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/about-me' element={<About/>}/>
        <Route path='/contact-me' element={<Contact/>}/>
    </Routes>
   </div>
)}

export default App
