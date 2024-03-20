import React, { useRef } from 'react';
import { BsCart3 } from 'react-icons/bs';
import { IoBagOutline } from 'react-icons/io5';
import { ReactToPrint } from 'react-to-print';

const ProductStats = ({ totalSells, totalProduct, category }) => {
    const componentRef = useRef(null);

    return (
        <div>
            {/* Print button */}
            <div className="flex justify-end mb-3 mr-4">
                <ReactToPrint
                    trigger={() => (
                        <button className="bg-[#1D2A3B] hover:bg-[#131c29] text-white font-bold py-1.5 px-4 rounded">
                            Print
                        </button>
                    )}
                    content={() => componentRef.current}
                    documentTitle='Product Summary'
                    pageStyle="print"
                />
            </div>
            
            {/* Card container */}
            <div ref={componentRef} className='flex justify-center mb-5'>
                <div className='flex flex-col gap-5 justify-center p-4 lg:p-12 mt-5 bg-white lg:w-5/6'>
                    <div className='flex justify-between items-center'>
                        <h3 className="text-2xl ">Total Summary: <span className='font-semibold'>{category}</span></h3>
                    </div>
                    {/* Cards */}
                    <div className='grid grid-cols-2 gap-4 lg:gap-10'>
                        <div className='max-w-[25rem] border border-gray-400 shadow-md rounded-md flex gap-5 items-center p-2 lg:p-4 '>
                            <div className='p-3 bg-[#9da6c0] rounded-lg '>
                                <div className='bg-[#0a1d56] p-2 rounded-lg text-white text-xl '>
                                    <IoBagOutline className='font-semibold' />
                                </div>
                            </div>
                            <div>
                                <h3 className='text-sm font-medium '>Total Sales Amount</h3>
                                <h2 className='text-xl font-semibold '>{totalSells} BDT</h2>
                            </div>
                        </div>

                        <div className='max-w-[25rem] pr-[3rem] border border-gray-400 shadow-md rounded-md flex gap-5 items-center p-4 '>
                            <div className='p-3 bg-[#9da6c0] rounded-lg '>
                                <div className='bg-[#0a1d56] p-2 rounded-lg text-white text-xl '>
                                    <BsCart3 className='font-semibold' />
                                </div>
                            </div>
                            <div>
                                <h3 className='text-sm font-medium '>Total Product Sold</h3>
                                <h2 className='text-[1.3rem] font-semibold '>{totalProduct}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductStats;
