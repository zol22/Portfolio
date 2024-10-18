import {Link} from 'react-router-dom'
import Home from './Home'
import { useState } from 'react'
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { SlMenu } from "react-icons/sl";



const Nav = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
    }
    const content = <>
        <div className='lg:hidden block absolute top-16 w-full h-full left-0 right-0 transition z-10'>
            <ul className='text-center h-full text-xl p-20'>
                <li className='my-4 py-4 border-b border-slate-800 hover:bg-neutral-100 hover:rounded'><Link to="/">Home</Link></li>
                <li className='my-4 py-4 border-b border-slate-800 hover:bg-neutral-100 hover:rounded'><Link to="/about">About</Link></li>
                <li className='my-4 py-4 border-b border-slate-800 hover:bg-neutral-100 hover:rounded'><Link to="/projects">Projects</Link></li>
                <li className='my-4 py-4 border-b border-slate-800 hover:bg-neutral-100 hover:rounded'><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    </>
    return(
       
        <nav className='flex items-center justify-end overflow-hidden'>
            <div className='hidden lg:flex lg:flex-1 md:flex'>
                <ul className='flex gap-8 '>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div>
                {click && content}
            </div>
            <button className='block md:hidden transition' onClick={handleClick}>
                {click ? <FaTimes/> : <SlMenu  />}
            </button>
        </nav>
    )
}


export default Nav;