import React from 'react';

const StatementCard = ({ code, orderedDate, deliveredDate, amount, product }) => {
    return (
        <div className='h-44 shadow-md shadow-gray-300 bg-blue-300 rounded-xl p-3 flex justify-center items-center'>
            <div className='text-xl space-y-5 pr-52'>
                <h1 className=''>Transaction code: <span className='font-bold'>{code}</span></h1>
                <h1>Ordered Date: <span className='font-bold'>{orderedDate}</span></h1>
            </div>
            {/* divider */}
            <div className="divider lg:divider-horizontal"></div>
            {/*  */}
            <div className='text-xl space-y-3'>
                <p>Total amount : <span className='font-bold'>{amount} BDT</span></p>
                <div className='flex gap-5 items-center'>
                    <p>Ordered Product : <span className='font-bold'>{product}pcs</span></p>
                    <h1>Delivering Date: <span className='font-bold'>{deliveredDate}</span></h1>
                </div>
                <div className='flex justify-end'>
                    <button className="btn btn-outline btn-success">Paid</button>

                </div>
            </div>
        </div>
    );
};

export default StatementCard;