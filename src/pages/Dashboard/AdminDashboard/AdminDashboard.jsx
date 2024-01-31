import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Navbar2 from '../../../shared/Navbar2/Navbar2';

const AdminDashboard = () => {
    return (
        <div className='flex justify-center gap-5 px-3 py-3'>
            {/* Dashboard */}
            <div className='space-y-5 mt-3 w-2/12 flex flex-col justify-center pl-5'>
                <div>
                    <h1 className='text-2xl font-bold'>VIP Tailors and Punjabi</h1>
                </div>
                <ul className='space-y-4'>
                    <li>
                        <NavLink
                            to="/dashboard"
                            className={({ isActive }) =>
                                isActive ? "mr-6 text-[#3d48df] text-xl font-bold underline" : "mr-6 text-lg font-bold"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard"
                            className={({ isActive }) =>
                                isActive ? "mr-6 text-[#3d48df] text-xl font-bold underline" : "mr-6 text-xl font-bold"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard"
                            className={({ isActive }) =>
                                isActive ? "mr-6 text-[#3d48df] text-xl font-bold underline" : "mr-6 text-xl font-bold"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard"
                            className={({ isActive }) =>
                                isActive ? "mr-6 text-[#3d48df] text-xl font-bold underline" : "mr-6 text-xl font-bold"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* divider */}
            <div className="divider lg:divider-horizontal"></div>
            {/* components */}
            <div className='w-10/12'>
                <Navbar2></Navbar2>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AdminDashboard;