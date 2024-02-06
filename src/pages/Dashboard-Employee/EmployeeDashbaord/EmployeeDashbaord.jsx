import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Navbar2 from '../../../shared/Navbar2/Navbar2';

const AdminDashboard = () => {
    return (
        <div className='flex gap-5'>
            {/* Dashboard */}
            <div className='space-y-5 fixed bg-amber-400 py-3 w-2/12 pl-5 flex flex-col justify-between items-center h-[100vh]'>
                <div >
                    <h1 className='text-2xl font-bold'>VIP Tailors and Punjabi</h1>
                </div>
                <div>
                    <ul className='space-y-4'>
                        <li>
                            <NavLink
                                to="/dashboard2"
                                className={({ isActive }) =>
                                    isActive ? "mr-6 text-[#3d48df] text-xl font-bold underline" : "mr-6 text-lg font-bold"
                                }
                            >
                                Add Product
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="allProduct"
                                className={({ isActive }) =>
                                    isActive ? "mr-6 text-[#3d48df] text-xl font-bold underline" : "mr-6 text-xl font-bold"
                                }
                            >
                                Product List
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="orderedProduct"
                                className={({ isActive }) =>
                                    isActive ? "mr-6 text-[#3d48df] text-xl font-bold underline" : "mr-6 text-xl font-bold"
                                }
                            >
                                Ordered Product
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="status"
                                className={({ isActive }) =>
                                    isActive ? "mr-6 text-[#3d48df] text-xl font-bold underline" : "mr-6 text-xl font-bold"
                                }
                            >
                                Status
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div >
                    <h1>icons</h1>
                </div>
            </div>
            {/* divider */}
            <div className="divider pl-56 lg:divider-horizontal"></div>
            {/* components */}
            <div className='w-10/12'>
                <Navbar2></Navbar2>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AdminDashboard;