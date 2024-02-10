import React, { useEffect, useState } from 'react';
import { IoPersonOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

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
        <li>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? "mr-6 text-[#3d48df] text-xl font-semibold" : "mr-6 text-xl font-semibold hover:underline hover:text-[#3d48df]"
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/contact"
                className={({ isActive }) =>
                    isActive ? "mr-6 text-[#3d48df] text-xl font-semibold" : "mr-6 text-xl font-semibold hover:underline hover:text-[#3d48df]"
                }
            >
                Contact Us
            </NavLink>
        </li>
    </>

    return (
        <div className={`max-w-screen z-10 fixed top-0 mx-auto left-0 right-0 shadow-sm shadow-black ${isScrolled ? 'bg-white' : 'bg-none'}`}>
            <div className=''>
                <div className='max-w-[1280px] w-full mx-auto py-2 '>
                    <div className="navbar">
                        <div className="navbar-start">
                            <a className="btn btn-ghost text-xl">HakkuTraders</a>
                        </div>
                        <div className="navbar-end">
                            <ul className='flex'>
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