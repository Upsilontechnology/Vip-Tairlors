import React from 'react';

const StatementCard = ({ code, orderedDate, deliveredDate, amount, product }) => {
    return (
        <div className='h-44 shadow-md shadow-gray-300 bg-blue-300 rounded-xl p-3 flex justify-center items-center border border-red-600'>
            <div className='text-xl space-y-5 border border-green-600'>
                <h1 className=''>Transaction code: <span className='font-bold'>{code}</span></h1>
                <h1>Ordered Date: <span className='font-bold'>{orderedDate}</span></h1>
            </div>
            {/* divider */}
            <div className="divider lg:divider-horizontal"></div>
            {/*  */}
            <div className='text-xl space-y-3 flex justify-between'>
                <div>
                    <p>Total amount : <span className='font-bold'>{amount} BDT</span></p>
                    <p>Ordered Product : <span className='font-bold'>{product}pcs</span></p>

                    <h1>Delivering Date: <span className='font-bold'>{deliveredDate}</span></h1>
                </div>
                <button className="btn btn-outline btn-success">Paid</button>
            </div>
        </div>
    );
};

export default StatementCard;