import React from 'react'

import {AiOutlineCheck} from 'react-icons/ai'

export function Pricing(){

    return(
        <div className="w-full">
            <div className="w-full h-[500px] bg-slate-900 mix-blend-overlay absolute">
            </div>
            <div className="max-w-[1240px] mx-auto py-12">
                <div className="text-center">
                    <h4 className="text-3xl font-semibold uppercase text-white">Pricing</h4>
                    <h2 className="text-2xl text-white">Lorem ipsum is Dummy text</h2>
                    <p className="text-xl text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-4 relative">
                    <div className="bg-white m-4 p-4 rounded-xl shadow-2xl ">
                        <span className="uppercase px-3 py-1 text-indigo-400 bg-indigo-200 rounded-xl ">Normal</span>
                        <div className="py-3">
                            <p className="text-3xl font-semibold text-indigo-400">$30 <span className="text-black text-xl ">/month</span></p>
                        </div>
                        <p className="pb-3">Lorem Ipsum is simply dummy text of the printing </p>
                        <div className=" text-xl">
                            <p className="flex items-center gap-2 py-2"> <AiOutlineCheck className="w-5 mr-5" /> Lorem Ipsum is simply </p>
                            <p className="flex items-center gap-2 py-2">  <AiOutlineCheck className="w-5 mr-5" /> Lorem Ipsum is simply </p>
                            <p className="flex items-center gap-2 py-2"> <AiOutlineCheck className="w-5 mr-5" /> Lorem Ipsum is simply </p>
                            <p className="flex items-center gap-2 py-2"> <AiOutlineCheck className="w-5 mr-5" /> Lorem Ipsum is simply </p>
                            <p className="flex items-center gap-2 py-2"> <AiOutlineCheck className="w-5 mr-5" /> Lorem Ipsum is simply </p>
                            <p className="flex items-center gap-2 py-2"> <AiOutlineCheck className="w-5 mr-5" /> Lorem Ipsum is simply </p>
                            <button className="bg-violet-800 border-2 justify-items-center w-full px-3 py-2 rounded-lg text-white hover:bg-transparent hover:text-black">Get Started</button>
                        </div>
                    </div>
                    <div className="bg-white m-4 p-4 rounded-xl shadow-2xl ">
                        <span className="uppercase px-3 py-1 text-indigo-400 bg-indigo-200 rounded-xl ">Standard</span>
                        <div className="py-3">
                            <p className="text-3xl font-semibold text-indigo-400">$40 <span className="text-black text-xl ">/month</span></p>
                        </div>
                        <p className="pb-3">Lorem Ipsum is simply dummy text of the printing </p>
                        <div className=" text-xl">
                            <p className="flex items-center gap-2 py-2"> <AiOutlineCheck className="w-5 mr-5" /> Lorem Ipsum is simply </p>
                            <p className="flex items-center gap-2 py-2">  <AiOutlineCheck className="w-5 mr-5" /> Lorem Ipsum is simply </p>
                            <p className="flex items-center gap-2 py-2"> <AiOutlineCheck className="w-5 mr-5" /> Lorem Ipsum is simply </p>
                            <p className="flex items-center gap-2 py-2"> <AiOutlineCheck className="w-5 mr-5" /> Lorem Ipsum is simply </p>
                            <p className="flex items-center gap-2 py-2"> <AiOutlineCheck className="w-5 mr-5" /> Lorem Ipsum is simply </p>
                            <p className="flex items-center gap-2 py-2"> <AiOutlineCheck className="w-5 mr-5" /> Lorem Ipsum is simply </p>
                            <button className="bg-violet-800 border-2 justify-items-center w-full px-3 py-2 rounded-lg text-white hover:bg-transparent hover:text-black">Get Started</button>
                        </div>
                    </div>
                    <div className="bg-white m-4 p-4 rounded-xl shadow-2xl ">
                        <span className="uppercase px-3 py-1 text-indigo-400 bg-indigo-200 rounded-xl ">Premium</span>
                        <div className="py-3">
                            <p className="text-3xl font-semibold text-indigo-400">$50 <span className="text-black text-xl ">/month</span></p>
                        </div>
                        <p className="pb-3">Lorem Ipsum is simply dummy text of the printing </p>
                        <div className=" text-xl">
                            <p className="flex items-center gap-2 py-2"> <AiOutlineCheck className="w-5 mr-5" /> Lorem Ipsum is simply </p>
                            <p className="flex items-center gap-2 py-2">  <AiOutlineCheck className="w-5 mr-5" /> Lorem Ipsum is simply </p>
                            <p className="flex items-center gap-2 py-2"> <AiOutlineCheck className="w-5 mr-5" /> Lorem Ipsum is simply </p>
                            <p className="flex items-center gap-2 py-2"> <AiOutlineCheck className="w-5 mr-5" /> Lorem Ipsum is simply </p>
                            <p className="flex items-center gap-2 py-2"> <AiOutlineCheck className="w-5 mr-5" /> Lorem Ipsum is simply </p>
                            <p className="flex items-center gap-2 py-2"> <AiOutlineCheck className="w-5 mr-5" /> Lorem Ipsum is simply </p>
                            <button className="bg-violet-800 border-2 justify-items-center w-full px-3 py-2 rounded-lg text-white hover:bg-transparent hover:text-black">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}