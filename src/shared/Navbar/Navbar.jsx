import React from 'react';
import { IoPersonOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
    return (
        <div className='bg-[#EFF4F7]'>
            <div className='max-w-[1280px] w-full mx-auto py-2 '>
            <div className="navbar">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl">HakkuTraders</a>
                </div>
                <div className="w-44 md:w-[600px] lg:w-[700px] relative">
                    <div className="form-control w-full">
                        <input type="text" placeholder="Search your product" className="input input-bordered" />
                    <IoIosSearch className='text-2xl absolute right-0 mr-2 top-[25%] text-gray-500' />
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

export default Navbar;