import React from 'react';
import { IoBagOutline } from "react-icons/io5";
import { FaCalculator } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

const EmployeeHome = () => {
    return (
        <div>
            <h1 className='text-center block mt-[2rem] text-5xl  font-semibold  '>Welcome</h1>
            <div className='flex justify-center mt-10'>

                <div className='flex gap-10'>

                    <div className='max-w-[25rem] border pr-[3rem] border-gray-400 shadow-md rounded-md flex gap-5 items-center p-4 '>
                        <div className='p-3 bg-[#9da6c0] rounded-lg '>
                            <div className='bg-[#0a1d56] p-2 rounded-lg text-white text-xl '>
                                <IoBagOutline className='font-semibold' />
                            </div>
                        </div>
                        <div>
                            <h3 className='text-[1.15rem] font-medium '>Total Sales</h3>
                            <h2 className='text-[1.3rem] font-semibold '>15000 BDT</h2>
                        </div>
                    </div>

                    <div className='max-w-[25rem] pr-[3rem] border border-gray-400 shadow-md rounded-md flex gap-5 items-center p-4 '>
                        <div className='p-3 bg-[#9da6c0] rounded-lg '>
                            <div className='bg-[#0a1d56] p-2 rounded-lg text-white text-xl '>
                                <FaCalculator className='font-semibold' />
                            </div>
                        </div>
                        <div>
                            <h3 className='text-[1.15rem] font-medium '>Total Expenses</h3>
                            <h2 className='text-[1.3rem] font-semibold '>15000 BDT</h2>
                        </div>
                    </div>

                    <div className='max-w-[25rem] pr-[3rem] border border-gray-400 shadow-md rounded-md flex gap-5 items-center p-4 '>
                        <div className='p-3 bg-[#9da6c0] rounded-lg '>
                            <div className='bg-[#0a1d56] p-2 rounded-lg text-white text-xl '>
                                <BsCart3 className='font-semibold' />
                            </div>
                        </div>
                        <div>
                            <h3 className='text-[1.15rem] font-medium '>Total Orders</h3>
                            <h2 className='text-[1.3rem] font-semibold '>10</h2>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default EmployeeHome;