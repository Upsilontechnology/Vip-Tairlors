import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import "./Navbar.css"
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { logOut, user } = useAuth();
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

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
                className={({ isActive }) => `${isActive ? "active text-[#fff]" : "text-[#fff]"} duration-300 text-lg font-semibold  transition navs`}
            >
                Home
            </NavLink>
        </li>
        <li className=''>
            {/* <NavLink
                to="#featured"
                className={({ isActive }) => `${isActive ? "active text-[#fff]" : "text-[#fff]"} duration-300 text-lg font-semibold  transition navs`}
            >
                Featured Products
            </NavLink> */}
            <a className={({ isActive }) => `${isActive ? "active text-[#fff]" : "text-[#fff]"} duration-300 text-lg font-semibold  transition navs`} href="#featured">
                Featured Products
            </a>
        </li>
        <li className=''>
            {/* <NavLink
                to="notice"
                className={({ isActive }) => `${isActive ? "active text-[#fff]" : "text-[#fff]"} duration-300 text-lg font-semibold  transition navs`}
            >
                Notice Board
            </NavLink> */}
            <a className={({ isActive }) => `${isActive ? "active text-[#fff]" : "text-[#fff]"} duration-300 text-lg font-semibold  transition navs`} href="#notice">
                Notice Board
            </a>
        </li>

        <li>
            <NavLink
                to="/contact"
                className={({ isActive }) => `${isActive ? "active text-[#fff]" : "text-[#fff]"} duration-300 text-lg font-semibold mr-10 transition navs`}
            >
                Contact Us
            </NavLink>
        </li>
    </>

    const handleLogout = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Logged Out!"
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(() => {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Successfully logged out",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/')
                    })
            }
        });
    }

    return (
        <div className={`max-w-screen z-10 fixed top-0 mx-auto left-0 right-0  ${isScrolled ? 'bg-[#403030] shadow-sm shadow-black' : 'bg-[#403030]'}`}>
            <div className='max-w-[1280px] w-full mx-auto'>
                <div className="navbar flex flex-row justify-between">
                    <div className="">
                        <div className="dropdown md:hidden">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navlinks}
                            </ul>
                        </div>
                        <a className="text-white lg:text-2xl ml-16 md:ml-0">VIP Tailor</a>
                    </div>
                    <div className="">
                        <ul className='hidden md:flex items-center gap-8'>
                            {navlinks}
                        </ul>
                        <div>
                            {
                                user ? <button onClick={handleLogout} className="bg-white text-black font-semibold px-2 py-1 rounded ">Logout</button>
                                    : <Link to='/login' className='bg-white text-black font-semibold px-2 py-1 rounded'>Log in</Link>
                            }
                        </div>
                        <Link to='/register' className='bg-white text-black font-semibold px-2 py-1 rounded ml-3'>Create an account</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;