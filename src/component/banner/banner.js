import React from 'react'

import BannerImg from '../../img/cyber-bg.png'
import {FaCloudUploadAlt,FaServer,FaPaperPlane} from 'react-icons/fa'
import {AiFillDatabase} from 'react-icons/ai'

export function Banner(){

    return(
            <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between ">
                <div className="grid md:grid-cols-2 m-auto max-w-[1240px]">
                    <div className="flex flex-col w-full px-2 py-12 justify-center items-center  md:items-start">
                        <p className="text-2xl md:text-4xl">Sequencing and Production</p>
                        <h1 className="py-3 text-2xl md:text-7xl font-bold">Cloud Management</h1>
                        <p className="text-xl md:text-3xl">This is our Tech Brand.</p>
                        <button className="bg-indigo-600 sm:w-[60%] rounded-lg px-4 py-3 my-3 ">Get Started</button>
                    </div>
                    <div>
                        <img src={BannerImg} alt="" className="w-full" />
                    </div>
                    <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
                        mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
                        border border-slate-300 rounded-xl text-center shadow-xl'>
                        <p>Our Services</p>
                        <div className="flex justify-between flex-wrap px-4">
                            <p className='flex px-4 py-2 text-slate-500'><FaCloudUploadAlt className='h-6 text-indigo-600' /> App Security</p>
                            <p className='flex px-4 py-2 text-slate-500'><AiFillDatabase className='h-6 text-indigo-600' /> Dashboard Design</p>
                            <p className='flex px-4 py-2 text-slate-500'><FaServer className='h-6 text-indigo-600' /> Cloud Data</p>
                            <p className='flex px-4 py-2 text-slate-500'><FaPaperPlane className='h-6 text-indigo-600' /> API</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}