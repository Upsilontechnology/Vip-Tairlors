import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Navbar2 from '../../../shared/Navbar2/Navbar2';
import { AiFillFacebook, AiFillInstagram, AiOutlineHome, AiOutlineSchedule, AiOutlineTwitter, AiOutlineWhatsApp } from "react-icons/ai";
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';
import { IoBagAddOutline } from 'react-icons/io5';
import { CiViewList } from "react-icons/ci";
import { BiSolidCartAdd } from "react-icons/bi";
import { RiListIndefinite } from "react-icons/ri";

const EmployeeDashboard = ({ isSideMenuOpen, toggleSideMenu }) => {
    
    const navlinks = <>
        <li className="relative px-2 py-1">
            <NavLink
                defaultChecked
                className={({ isActive }) =>
                    isActive ? "inline-flex items-center font-bold text-[#3d48df] hover:text-blue-600 text-lg" : "inline-flex items-center font-semibold hover:text-blue-600 text-lg"
                }
                to="employeeHome"
            >
                <AiOutlineHome />
                <span className="ml-4">Home</span>
            </NavLink>
        </li>
        <li className="relative px-2 py-1 ">
            <NavLink
                className={({ isActive }) =>
                    isActive ? "inline-flex items-center font-bold text-[#3d48df] hover:text-blue-600 text-lg" : "inline-flex items-center font-semibold hover:text-blue-600 text-lg"
                }
                to="addProduct"
            >
                <BiSolidCartAdd />
                <span className="ml-4">Add Product</span>
            </NavLink>
        </li>
        <li className="relative px-2 py-1 ">
            <NavLink
                className={({ isActive }) =>
                    isActive ? "inline-flex items-center font-bold text-[#3d48df] hover:text-blue-600 text-lg" : "inline-flex items-center font-semibold hover:text-blue-600 text-lg"
                }
                to="productList"
            >
                <CiViewList />
                <span className="ml-4">Product List</span>
            </NavLink>
        </li>
        <li className="relative px-2 py-1 ">
            <NavLink
                className={({ isActive }) =>
                    isActive ? "inline-flex items-center font-bold text-[#3d48df] hover:text-blue-600 text-lg" : "inline-flex items-center font-semibold hover:text-blue-600 text-lg"
                }
                to="ordered"
            >
                <IoBagAddOutline />
                <span className="ml-4">Ordered Product</span>
            </NavLink>
        </li>
        <li className="relative px-2 py-1 ">
            <NavLink
                className={({ isActive }) =>
                    isActive ? "inline-flex items-center font-bold text-[#3d48df] hover:text-blue-600 text-lg" : "inline-flex items-center font-semibold hover:text-blue-600 text-lg"
                }
                to="orderedList"
            >
                <RiListIndefinite />
                <span className="ml-4">Ordered List</span>
            </NavLink>
        </li>
    </>
    return (
        <div className={`flex h-screen bg-white ${isSideMenuOpen ? "overflow-hidden" : ""}`}>
            {/* Dashboard */}
            <aside className='z-20 flex-shrink-0 fixed hidden w-64 overflow-y-auto bg-white lg:block'>
                <div className='h-screen py-3 pl-3 flex flex-col justify-between shadow-xl'>
                    {/* logo */}
                    <div>
                        <h1 className="text-3xl">VIP Tailor's</h1>
                    </div>
                    {/* items and routes */}
                    <div className=" flex flex-col justify-between">
                        <ul className="leading-10">
                            {navlinks}
                        </ul>
                    </div>
                    {/* footer */}
                    <div className='flex gap-2 justify-center items-center'>
                        <p>Copyright © 2024 - All right reserved by VIP Tailor's</p>
                    </div>
                </div>
            </aside>
            <div className="fixed inset-0 -z-10 flex items-end bg-slate-300 bg-opacity-50 sm:items-center sm:justify-center"></div>
            {/* responsive dashboard */}
            <aside className={`z-20 fixed w-64 duration-300 inset-y-0 ease-in-out overflow-y-auto bg-white ${isSideMenuOpen ? "translate-x-0" : "-translate-x-full"} lg:hidden`}>
                <div className='h-screen py-3 pl-3 flex flex-col justify-between shadow-xl'>
                    {/* logo */}
                    <div>
                        <h1 className="text-3xl">VIP Tailor's</h1>
                    </div>
                    {/* items and routes */}
                    <div className=" flex flex-col justify-between">
                        <ul className="leading-10">
                            {navlinks}
                        </ul>
                    </div>
                    {/* footer */}
                    <div className='flex gap-2 justify-center items-center'>
                        <p>Copyright © 2024 - All right reserved by VIP Tailor's</p>
                    </div>
                </div>
            </aside>
            {/* components */}
            <div className="flex flex-col flex-1 w-full bg-[#f9f6f6] overflow-y-auto ">
                <header className="z-40 py-5 bg-slate-50 fixed w-full top-0 lg:hidden">
                    {/* toggle button */}
                    <div className="flex items-center justify-between h-8 px-6 mx-auto">
                        <button
                            className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
                            onClick={toggleSideMenu}
                            aria-label="Menu"
                        >
                            {isSideMenuOpen ? (
                                <FaXmark className="w-6 h-6" />
                            ) : (
                                <FaBarsStaggered className="w-6 h-6" />
                            )}
                        </button>
                        <div className="flex md:hidden justify-center mr-4 w-[80%]"></div>
                    </div>
                </header>
                <main className="lg:ml-72 scroll-smooth">
                    <Navbar2></Navbar2>
                    <Outlet></Outlet>
                </main>
            </div>
        </div>
    );
};

export default EmployeeDashboard;