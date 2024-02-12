import React from 'react';



const Banner = () => {

    return (
        <div className='flex gap-5 mt-20 h-[100vh]  supershop-container bg-black'>
            <div className='w-1/2  h-5/6'>
                <div className='flex flex-col ml-5 space-y-3 items-start justify-center h-full text-white'>
                    <h1 className="text-5xl font-bold">Welcome To Our World!</h1>
                    <p className="text-xl text-gray-300">We prefer your priority first!</p>
                </div>
            </div>
            <div className='w-1/2'>
                <img className='' src="https://i.ibb.co/fDD15hd/stock-banner3.png" alt="" />
            </div>
        </div>
        // <div className='bg-[url("https://i.ibb.co/7XsgSdX/stock-banner.png")] bg-blend-overlay h-[100vh] bg-cover'>
        //     <div className='h-[100vh] backdrop-brightness-90 flex items-center justify-center'>
        //         <h1 className="text-4xl font-bold">Hello WOrld</h1>

        //     </div>
        // </div>
    );
};

export default Banner;