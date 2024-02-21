import React from 'react';
import BannerImg2 from "../../../assets/BannerImg2.png"



const Banner = () => {

    return (
        <div className='mt-[5rem] supershop-container flex flex-wrap justify-between bg-[#1D2A3B] mb-[3rem]'>
            <div className='w-full md:w-1/2 flex items-center flex-col justify-center md:py-0 py-[8rem] '>
                <h3 className='md:text-4xl text-3xl font-semibold text-white   '>Hello World</h3>
                <h4 className=' text-base mt-2 sm:text-xl lg:text-2xl text-[#dadada]'>This is a stock management website</h4>
            </div>
            <div className='w-full md:w-1/2 hidden md:flex justify-center'>
                <img src={BannerImg2} alt="" className='w-[40rem] object-cover' />
            </div>
        </div>
    );
};

export default Banner;