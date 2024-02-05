import React from 'react';
import { IoPersonOutline } from 'react-icons/io5';

const Navbar2 = () => {
    return (
        <div>
            <div className='max-w-[1280px] w-full mx-auto'>
            <div className="navbar">
                <div className="w-44 md:w-[600px] lg:w-[700px]">
                    <div className="form-control w-full">
                        <input type="text" placeholder="Search your product" className="input input-bordered focus:outline-none" />
                    </div>
                </div>
                <div className="navbar-end">
                    <button className="btn"><IoPersonOutline className='text-xl'/> Logout</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Navbar2;