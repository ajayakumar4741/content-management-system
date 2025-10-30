import React, { useState } from 'react'
import { Switch } from "@/components/ui/switch";
import { FaHamburger } from "react-icons/fa";
import ResponsiveNav from './ResponsiveNav';
import { Link, NavLink } from 'react-router-dom';
function NavBar({handleDarkMode,darkMode}) {
    const [showNavBar,setShowNavBar] = useState(false)
  return (
    <>
    <nav className="max-container padding-x py-6 flex justify-between items-center  gap-6 sticky top-0 z-10 bg-[#FFFFFF] dark:bg-[#141624]">
    <Link to="/" className='text-[#141624] text-2xl dark:text-[#FFFFFF]'>
    TechFolio
    </Link>
    <ul className="flex items-center  justify-end gap-9 text-[#3B3C4A] lg:flex-1 max-md:hidden dark:text-[#FFFFFF]">
        <li>
            <NavLink className={({isActive})=> isActive ? 'active':'' } to='profile/'>
            Hi, Ajay
            </NavLink>
            </li>
        <li>Login</li>
        <li>Logout</li>
        <li>Register</li>
        <li className='font-semibold'>Create Post</li>
    </ul>
    <Switch onCheckedChange={handleDarkMode} checked={darkMode} />
    <FaHamburger className="text-2xl cursor-pointer hidden max-md:block dark:text-white" onClick={()=>setShowNavBar(curr => !curr)}/>
    </nav>
    {showNavBar && <ResponsiveNav />}
    </>
  )
}

export default NavBar
