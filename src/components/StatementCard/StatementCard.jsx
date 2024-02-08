import React from 'react';

const StatementCard = ({ code, orderedDate, deliveredDate, amount, product }) => {
    return (
        <div className='shadow-md rounded flex items-center justify-between  border mr-4 text-[1.3rem] bg-slate-100  px-[1%] hover:bg-slate-300   py-2 mb-5 '>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-3'>
                    <h1 className='font-semibold'>Transaction Code :</h1>
                    <h1 className=''> <span className=''>{code}</span></h1>
                </div>
                <div className='flex gap-3'>
                    <h1 className='font-semibold'>Price:</h1>
                    <p> <span className=''>{amount} BDT</span></p>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-3'>
                    <h1 className='font-semibold'>Ordered Date:</h1>
                    <h1> <span className=''>{orderedDate}</span></h1>
                </div>
                <div className='flex gap-3'>
                    <h1 className='font-semibold'>Delivering Date:</h1>
                    <h1> <span className=''>{deliveredDate}</span></h1>
                </div>
            </div>
            <div className='text-center flex flex-col gap-4'>
                <div className='flex gap-2 items-center'>
                    <h1 className='font-semibold'>Status:</h1>
                    <button className="px-3 py-1 bg-green-100 rounded-md text-xl font-semibold text-green-500">Panding</button>
                </div>
                <div className='flex gap-3'>
                    <h1 className='font-semibold'>Stock:</h1>
                    <p> <span className=''>{product}pcs</span></p>
                </div>
            </div>
        </div>
    );
};

export default StatementCard;