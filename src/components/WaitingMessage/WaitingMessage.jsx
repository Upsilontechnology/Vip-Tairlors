import React from 'react';
import img from "../../assets/Frame.png"
import { Link } from 'react-router-dom';

const WaitingMessage = () => {
    return (
        <div className='flex justify-center items-center mt-28 mb-14 '>
            <div className='bg-[#F3F3F3] rounded px-10 py-14 text-center'>
                <div className='flex justify-center items-center'>
                    <img src={img} className='w-36' alt="" />
                </div>
                <p className='mt-5 mb-5 font-semibold'>Congratulations!<br />
                    Account Registration Successful.<br />
                    Waiting for the admin approval to access Employee Panel. </p>
                <Link className='bg-[#403030] px-20 py-2 rounded text-white' to="/">Back Home</Link>
            </div>
        </div>
    );
};

export default WaitingMessage;