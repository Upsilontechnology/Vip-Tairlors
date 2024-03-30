import React, { useEffect, useRef } from 'react';
import { BsCart3 } from 'react-icons/bs';
import { IoBagOutline } from 'react-icons/io5';
import { ReactToPrint } from 'react-to-print';

const ProductStats = ({ totalSells, totalProduct, setCommentRef }) => {
    const componentRef = useRef(null);
    useEffect(() => {
        setCommentRef(componentRef);
    }, [])

    return (
        <div className=''>
            {/* Print button */}
            {/* <div className="flex justify-end mb-3 mr-4">
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
            </div> */}

            {/* Card container */}
            <div ref={componentRef} className='flex justify-center mb-5'>
                <div className='flex flex-col gap-5 justify-center mt-5 lg:w-5/6'>
                    {/* Cards */}
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='w-40 md:w-60 lg:max-w-[25rem] shadow-md rounded-md flex flex-col gap-2 md:p-5 px-2 py-5 bg-white'>
                            <div className='rounded-lg flex items-center gap-1'>
                                <div className='rounded-lg text-black text-base '>
                                    <IoBagOutline className='font-semibold' />
                                </div>
                                <h3 className='text-xs md:text-base font-semibold '>Total Sales Amount</h3>
                            </div>
                            <div>
                                <h2 className='text-xl md:text-2xl font-bold '>{totalSells} BDT</h2>
                            </div>
                        </div>
                        <div className='w-40 md:w-60 lg:max-w-[25rem] shadow-md rounded-md flex flex-col gap-2 md:p-5 px-2 py-5 bg-white'>
                            <div className='rounded-lg flex items-center gap-1'>
                                <div className='rounded-lg text-black text-base '>
                                    <BsCart3 className='font-semibold' />
                                </div>
                                <h3 className='text-xs md:text-base font-semibold '>Total Product Sold</h3>
                            </div>
                            <div>
                                <h2 className='text-xl md:text-2xl font-bold '>{totalProduct}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductStats;
