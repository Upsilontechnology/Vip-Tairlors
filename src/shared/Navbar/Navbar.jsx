import React from 'react';
import { IoPersonOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl">HakkuTraders</a>
                </div>
                <div className="w-44 md:w-[600px] lg:w-[700px]">
                    <div className="form-control w-full">
                        <input type="text" placeholder="Search your product" className="input input-bordered" />
                    </div>
                </div>
                <div className="navbar-end">
                    <button className="btn"><IoPersonOutline className='text-xl'/> Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;