import React, {useState} from 'react'
import { Link, animateScroll as scroll, } from 'react-scroll'



import{AiOutlineClose, AiOutlineMenu} from "react-icons/ai"


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose = () => setNav(!nav)


  return (
    
    <div className='w-screen h-[80px] z-10 flex bg-white fixed drop-shadow-lg'> 
            <div className='px-2  flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>BRAND.</h1>
                <ul className='hidden md:flex'>
                <li className='cursor-pointer hover:text-blue-500'><Link  to="home" smooth={true} offset={-300} duration={500}>Home</Link></li>
                <li className='cursor-pointer hover:text-blue-500'><Link  to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
                <li className='cursor-pointer hover:text-blue-500'><Link  to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
                <li className='cursor-pointer hover:text-blue-500'><Link  to="platforms" smooth={true} offset={-100} duration={500}>Platforms</Link></li>
                <li className='cursor-pointer hover:text-blue-500'><Link  to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>
                </ul>
                </div>
                <div className='hidden md:flex pr-4'>
                    <button className='border-none bg-transparent text-black mr-4'>
                        Sign In</button>
                    <button className='px-8 py-3'>Sign Up</button>
                </div>
                <div onClick={handleClick} className='md:hidden mr-4'>
                    {nav?(<AiOutlineClose className='text-3xl mr-3 px-1 cursor-pointer' 
                    />):(<AiOutlineMenu className='text-3xl mr-3 px-1 cursor-pointer' />)}
                  
                  
                </div>
            </div>
            {nav && (

        <ul className='block md:hidden absolute bg-zinc-200 w-full px-8 top-20'>
                <li className='border-b-2 border-zinc-300 w-full cursor-pointer hover:text-blue-500'><Link onClick={handleClose} to="home" smooth={true} offset={-300} duration={500}>Home</Link></li>
                <li className='border-b-2 border-zinc-300 w-full cursor-pointer hover:text-blue-500'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
                <li className='border-b-2 border-zinc-300 w-full cursor-pointer hover:text-blue-500'><Link onClick={handleClose} to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
                <li className='border-b-2 border-zinc-300 w-full cursor-pointer hover:text-blue-500'><Link onClick={handleClose} to="platforms" smooth={true} offset={-100} duration={500}>Platforms</Link></li>
                <li className='border-b-2 border-zinc-300 w-full cursor-pointer hover:text-blue-500'><Link onClick={handleClose} to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>
                <div className='flex flex-col my-4'>
                    <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
                    <button className='px-8 py-3'>Sign Up</button>
                </div>

        </ul>
        )}
        </div>
    
  )
}

export default Navbar