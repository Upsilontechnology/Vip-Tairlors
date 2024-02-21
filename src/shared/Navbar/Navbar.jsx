import React, { useEffect, useState } from 'react';
import { IoPersonOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const navlinks = <>
        <li className=''>
            <NavLink
                to="/"
                className={({ isActive }) => `${isActive ? "active text-[#0a1d56]" : null} duration-300 text-xl font-semibold mr-5 transition navs`}
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/contact"
                className={({ isActive }) => `${isActive ? "active text-[#0a1d56]" : null} duration-300 text-xl font-semibold mr-5 transition navs`}
            >
                Contact Us
            </NavLink>
        </li>
    </>

    return (
        <div className={` z-10 fixed top-0 left-0 right-0 shadow-sm shadow-black ${isScrolled ? 'bg-[#EFF4F7]' : 'bg-none'}`}>
            <div className=''>
                <div className='max-w-[1290px] w-full mx-auto py-2 '>
                    <div className="navbar">
                        <div className="navbar-start">
                            <a className=" bg-slate-200 px-3 py-2 rounded-md text-xl">HakkuTraders</a>
                        </div>
                        <div className="navbar-end">
                            <ul className='flex items-center '>
                                {navlinks}
                            </ul>
                            <button className="btn"><IoPersonOutline className='text-xl' /> Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;