import React from 'react'
import { Rating } from '@smastrom/react-rating';
import { FaDollarSign } from "react-icons/fa6";


const Card = () => {
    return (
        <div className='relative'>
            <div className="p-6 hover:shadow-md transition-all duration-300 ease-in-out bg-slate-100 rounded-md group cursor-pointer ">
                <div className='h-[20rem] overflow-hidden rounded-md '>
                <img alt="Product Image" className="w-full h-full object-cover group-hover:scale-110  transition duration-500 ease-in-out   " src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhemVyfGVufDB8fDB8fHww" />
                </div>
                <h1 className="text-xl font-extrabold mt-5 font-mono ">Stylish Black Suit</h1>
                <div className='flex items-center justify-between  mt-3 '>
                    <div className="text-lg font-semibold flex items-center"><FaDollarSign />99.99</div>
                    <Rating
                        style={{ maxWidth: 110 }}
                        value={4.5}
                        readOnly
                    />
                </div>
            </div>
            <div className='absolute top-10 flex items-center bg-red-600 right-6 px-1 '>
                <p className='text-sm text-white font-semibold '>pop</p>
            </div>
        </div>
    )
}

export default Card
