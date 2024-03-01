import React from 'react';

const ProductStatementCard = () => {
    return (
        <div className='shadow-md rounded flex items-center justify-between  border mr-4 text-[1.3rem] bg-slate-100  px-[1%] hover:bg-slate-300  py-2 mb-5 '>
            <div className='flex flex-row justify-between gap-4'>
                <div className='flex gap-3'>
                    <h1 className='font-semibold'>Transaction Code :</h1>
                    <h1 className=''> <span className=''>401</span></h1>
                </div>
                <div className='flex gap-3'>
                    <h1 className='font-semibold'>Price:</h1>
                    <p> <span className=''>20000 BDT</span></p>
                </div>
                <div className='flex gap-3'>
                    <h1 className='font-semibold'>Selling Date:</h1>
                    <h1> <span className=''>2024/02/12</span></h1>
                </div>
            </div>
        </div>
    );
};

export default ProductStatementCard;