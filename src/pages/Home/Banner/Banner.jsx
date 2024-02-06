import React from 'react';



const Banner = () => {

    return (
        <div className='flex gap-5 my-10 h-[100vh] text-white supershop-container'>
            <div className='w-1/2 bg-blue-600 h-5/6 rounded-r-full rounded-tl-full'>
                <div className='flex flex-col ml-5 space-y-3 items-start justify-center h-full'>
                    <h1 className="text-5xl font-bold">Welcome To Our World!</h1>
                    <p className="text-xl text-gray-300">We prefer your priority first!</p>
                </div>
            </div>
            <div className='w-1/2'>
                <img className='' src="https://i.ibb.co/YBwJvbg/stock-banner.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;