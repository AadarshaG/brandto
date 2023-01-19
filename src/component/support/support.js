import React from 'react'

import BgImage from '../../img/support.jpg'

import {FcSalesPerformance} from 'react-icons/fc'
import {SiAudiotechnica} from 'react-icons/si'
import {GrMultimedia} from 'react-icons/gr'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

export function Support(){

    return(
        <div className="w-full my-16">
            <div className="absolute w-full h-[700px]">
                <img  src={BgImage} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative max-w-[1240px] mx-auto text-indigo-800">
                <div className="px-4 py-12">
                    <h2 className="text-center text-3xl py-2 font-bold">Support</h2>
                    <h3 className="text-center text-2xl py-2 font-semibold">Finding The Right Team</h3>
                    <p className="px-4 lg:px-32">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                      unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
                    <div className="bg-white rounded-xl shadow-2xl ">
                        <div className="px-5 py-3">
                            <FcSalesPerformance className="bg-indigo-700 mt-[-2rem] p-2  text-white w-12 h-12 rounded-md items-center justify-center" />
                            <h3 className="text-xl font-bold"> Sales</h3>
                            <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div className="px-5 bg-slate-200 py-2">
                            <p className="flex items-center">Contact Us <HiOutlineArrowNarrowRight className="w-5 ml-2" /></p>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-2xl ">
                        <div className="px-5 py-3">
                            <SiAudiotechnica className="bg-indigo-700 mt-[-2rem] p-2  text-white w-12 h-12 rounded-md items-center justify-center" />
                            <h3 className="text-xl font-bold"> Technical Support</h3>
                            <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div className="px-5 bg-slate-200 py-2">
                            <p className="flex items-center">Contact Us <HiOutlineArrowNarrowRight className="w-5 ml-2" /></p>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-2xl ">
                        <div className="px-5 py-3">
                            <GrMultimedia className="bg-indigo-700 mt-[-2rem] p-2  text-white w-12 h-12 rounded-md items-center justify-center" />
                            <h3 className="text-xl font-bold"> Media Inquery</h3>
                            <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div className="px-5 bg-slate-200 py-2">
                            <p className="flex items-center">Contact Us <HiOutlineArrowNarrowRight className="w-5 ml-2" /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}