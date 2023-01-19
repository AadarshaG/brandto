import React, { useState } from 'react';
import SGN from '../../img/sgn.png'

import {GiHamburgerMenu} from 'react-icons/gi'
import {RxCross2} from 'react-icons/rx'


export function Header(){

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return(
        <div className="w-screen h-[50px] bg-zinc-100 z-10 drop-shadow-lg fixed">
            <div className="px-8 flex justify-between items-center w-full h-full">

                <div className="">
                    <img src={SGN} alt="" className="object-fill w-[150px]" />
                </div>

                <ul className="hidden md:flex gap-6">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Pricing</li>
                    <li>Help</li>
                </ul>

                <div className="hidden md:flex gap-2">
                    <button className="bg-transparent border-2 w-[60px] px-2 py-1 rounded-lg hover:scale-90 hover:bg-zinc-300 hover:text-white hover:font-bold transition">Login</button>
                    <button className="bg-zinc-300 border-2 w-[80px] px-2 py-1 rounded-lg hover:scale-90">Register</button>
                </div>
                
                <div className="md:hidden" onClick={handleNav}>
                    { !nav ? <GiHamburgerMenu /> : <RxCross2 />}
                    
                </div>
               
            </div>

            <ul className={ !nav ? 'hidden' : "absolute bg-zinc-200 px-8 w-full text-xl"}>
                    <li className='border-b-2 border-zinc-300 w-full '>Home</li>
                    <li className='border-b-2 border-zinc-300 w-full'>About</li>
                    <li className='border-b-2 border-zinc-300 w-full'>Contact</li>
                    <li className='border-b-2 border-zinc-300 w-full'>Pricing</li>
                    <li className='border-b-2 border-zinc-300 w-full'>Help</li>
                    <div className="flex flex-col my-4">
                        <button className="bg-transparent border-2 rounded-lg border-indigo-600">Login</button>
                        <button className="bg-indigo-800 rounded-lg my-1 text-white font-semibold">Register</button>
                    </div>
                </ul>
        
        </div>
    )
}