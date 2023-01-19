import React from 'react';

import {FaFacebookF} from 'react-icons/fa'
import {AiFillYoutube,AiFillInstagram,AiFillLinkedin} from 'react-icons/ai'

export function Footer(){

    return(
       <div className="w-full bg-slate-900 text-white">
            <div className="max-w-[1240px] mx-auto">
                <div className="grid sm:grid-cols-1 lg:grid-cols-4 py-5 px-5 gap-3">
                    <div className="">
                        <h1 className="text-xl font-semibold underline">About</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  </p>
                    </div>
                    <div className="">
                        <h1 className="text-xl font-semibold underline">Quick Links</h1>
                        <ul>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Pricing Plan</li>
                        </ul>
                    </div>
                    <div className="">
                        <h1 className="text-xl font-semibold underline">Help</h1>
                        <ul>
                            <li>Support</li>
                            <li>Delivery</li>
                            <li>Services</li>
                        </ul>
                    </div>
                    <div className="">
                        <h1 className="text-xl font-semibold underline">Follow Us</h1>
                        <ul className="flex gap-3 py-3">
                            <li><FaFacebookF className="h-7 w-7" /></li>
                            <li><AiFillYoutube className="h-7 w-7" /></li>
                            <li><AiFillInstagram className="h-7 w-7" /></li>
                            <li><AiFillLinkedin className="h-7 w-7" /></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className="py-2 text-center">copyright@2023. All right reserved.</p>
            </div>
       </div>
    )
}