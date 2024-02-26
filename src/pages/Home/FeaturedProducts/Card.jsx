import React from 'react'
import { Rating } from '@smastrom/react-rating';
import { FaDollarSign } from "react-icons/fa6";


const Card = () => {
    return (
        <div className='mb-10 mx-2.5 '>
            <div className="">
                <div className='lg:h-[450px] md:h-[380px] h-[300px] '>
                    <img alt="Product Image" className="w-full h-full object-cover " src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhemVyfGVufDB8fDB8fHww" />
                </div>
                <div className='mt-3 flex flex-col gap-1'>
                    <h1 className="font-medium">Stylish Black Suit</h1>
                    <h3 className='font-bold'>BDT 5000</h3>

                </div>
            </div>
        </div>
    )
}

export default Card
