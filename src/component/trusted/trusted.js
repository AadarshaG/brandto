import React from 'react'


export function TrustedBy(){

    return(
        <div className="w-full my-16">
            <div className="max-w-[1240px] mx-auto">
                <div className="text-center">
                    <h1 className="text-2xl font-bold md:text-4xl py-5 ">Trusted By More Developers</h1>
                    <p className="text-xl md:text-2xl py-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-2 px-2 text-center">
                    <div className="border py-8 rounded-xl shadow-xl">
                        <p className="text-2xl font-bold text-indigo-800">100%</p>
                        <p className="">Completed Work</p>
                    </div>
                    <div className="border py-8 rounded-xl shadow-xl">
                        <p className="text-2xl font-bold text-indigo-800">24/7</p>
                        <p>Delivery</p>
                    </div>
                    <div className="border py-8 rounded-xl shadow-xl">
                        <p className="text-2xl font-bold text-indigo-800">100K</p>
                        <p>Transactions</p>
                    </div>
                </div>
            </div>
        </div>
    )
}