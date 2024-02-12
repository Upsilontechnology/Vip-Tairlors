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
                className={({ isActive }) => `${isActive ? "active text-[#0a1d56]" : null} duration-300 text-xl font-semibold mr-10 transition navs`}
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/contact"
                className={({ isActive }) => `${isActive ? "active text-[#0a1d56]" : null} duration-300 text-xl font-semibold mr-10 transition navs`}
            >
                Contact Us
            </NavLink>
        </li>
    </>

    return (
        <div className={`max-w-screen z-10 fixed top-0 mx-auto left-0 right-0 ${isScrolled ? 'bg-base-300' : 'bg-none'}`}>
            <div className=''>
                <div className='max-w-[1280px] w-full mx-auto py-2 '>
                    <div className="navbar">
                        <div className="navbar-start">
                            <a className="btn btn-ghost text-xl">HakkuTraders</a>
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