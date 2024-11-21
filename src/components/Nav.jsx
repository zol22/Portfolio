import { useState } from 'react'
import { FaTimes } from "react-icons/fa";
import { SlMenu } from "react-icons/sl";
import { HashLink as Link} from 'react-router-hash-link';
import { Link as LinkRouter } from 'react-router-dom';


const Nav = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
    }
    const content = <>
        {/* This is hidden if screen is large */}
        <div className='lg:hidden block absolute top-20 w-full h-screen left-0 right-0 transition z-10 bg-secondary'>
            <ul className='text-center h-full text-xl p-20'>
                <li className='my-4 py-4 border-b border-slate-800 hover:bg-neutral-300 hover:rounded'><LinkRouter onClick={handleClick} to="/">Home</LinkRouter></li>
                <li className='my-4 py-4 border-b border-slate-800 hover:bg-neutral-300   hover:rounded'><Link onClick={handleClick} to="#about">About</Link></li>
                <li className='my-4 py-4 border-b border-slate-800 hover:bg-neutral-300   hover:rounded'><Link onClick={handleClick}to="#projects">Projects</Link></li>
                <li className='my-4 py-4 border-b border-slate-800 hover:bg-neutral-300  hover:rounded'><Link onClick={handleClick}to="#contact">Contact</Link></li>
            </ul>
        </div>
    </>
    return(
       
        <nav className='flex items-center justify-end overflow-hidden'>
            {/* This is hidden only if screen is small */}
            <div className='hidden lg:flex lg:flex-1 md:flex'>
                <ul className='flex gap-8 text-xl'>
                    <li><LinkRouter to="/">Home</LinkRouter></li>
                    <li><Link to="#about">About</Link></li>
                    <li><Link to="#projects">Projects</Link></li>
                    <li><Link to="#contact">Contact</Link></li>
                </ul>
            </div>
            <div>
                {click && content}
            </div>

            {/* Both icons are hidden if screen md or larger (md breakpoint)
                Case 1: Small screen, SlMenu is visible & click it (handleClick is called); content is visible
            */}
            <button className='block md:hidden transition' onClick={handleClick}>
                {click ? <FaTimes/> : <SlMenu  />}
            </button>
        </nav>
    )
}


export default Nav;