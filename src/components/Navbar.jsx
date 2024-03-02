import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to="/"  className="w-10 h-10  rounded-lg bg-white items-center justify-center flex  shadow-md font-medium ">
            <p className='blue-gradient_text'> AT</p>
        </NavLink>
        <nav className='flex lg:gap-8 md:gap-8 sm:gap-6 gap-2 ' >
            <NavLink to="/about" className={ (({isActive}) => isActive ? 'text-blue-500 md:text-xl lg:text-xl font-semibold navbut navnot ': 'text-black md:text-xl font-semibold lg:text-xl navbut')  }>
                About 
            </NavLink>
            <NavLink to="/projects" className={({isActive}) => isActive ? 'text-blue-500 md:text-xl font-semibold lg:text-xl navbut navnot ': 'text-black  md:text-xl font-semibold lg:text-xl navbut '}>
                Projects
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? 'text-blue-500 md:text-xl font-semibold lg:text-xl navbut navnot ': 'text-black md:text-xl font-semibold lg:text-xl navbut '}>
                Contact
            </NavLink>
        </nav>
    </header>
  )
}


export default Navbar