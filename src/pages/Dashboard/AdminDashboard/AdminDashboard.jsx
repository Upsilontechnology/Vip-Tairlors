import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import Navbar2 from '../../../shared/Navbar2/Navbar2';
import { AiFillFacebook, AiFillInstagram, AiOutlineHome, AiOutlineSchedule, AiOutlineTwitter, AiOutlineWhatsApp } from "react-icons/ai";
import { FaUserClock } from 'react-icons/fa';
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';
import { IoBagAddOutline, IoPeople, IoPersonOutline } from 'react-icons/io5';
import { MdProductionQuantityLimits } from 'react-icons/md';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { CiViewList } from 'react-icons/ci';
import { ImStatsDots } from "react-icons/im";

const AdminDashboard = ({ isSideMenuOpen, toggleSideMenu }) => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logged Out!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut().then(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully logged out",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        });
      }
    });
  };

    const navlinks = <>
        <li className="relative px-2 py-1">
            <NavLink
                defaultChecked
                className={({ isActive }) =>
                    isActive ? "inline-flex items-center font-bold text-[#3d48df] hover:text-blue-600 text-lg" : "inline-flex items-center font-semibold hover:text-blue-600 text-lg"
                }
                to="adminHome"
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
                to="orderedList"
            >
                <MdProductionQuantityLimits />
                <span className="ml-4">Ordered List</span>
            </NavLink>
        </li>
        <li className="relative px-2 py-1 ">
            <NavLink
                className={({ isActive }) =>
                    isActive ? "inline-flex items-center font-bold text-[#3d48df] hover:text-blue-600 text-lg" : "inline-flex items-center font-semibold hover:text-blue-600 text-lg"
                }
                to="productStatement"
            >
                <AiOutlineSchedule />
                <span className="ml-4">Product Statement</span>
            </NavLink>
        </li>
        <li className="relative px-2 py-1 ">
            <NavLink
                className={({ isActive }) =>
                    isActive ? "inline-flex items-center font-bold text-[#3d48df] hover:text-blue-600 text-lg" : "inline-flex items-center font-semibold hover:text-blue-600 text-lg"
                }
                to="orderStatement"
            >
                <ImStatsDots />
                <span className="ml-4">Order Statement</span>
            </NavLink>
        </li>
        <li className="relative px-2 py-1 ">
            <NavLink
                className={({ isActive }) =>
                    isActive ? "inline-flex items-center font-bold text-[#3d48df] hover:text-blue-600 text-lg" : "inline-flex items-center font-semibold hover:text-blue-600 text-lg"
                }
                to="addNotice"
            >
                <AiOutlineSchedule />
                <span className="ml-4">Add Notice</span>
            </NavLink>
        </li>
        <li className="relative px-2 py-1 ">
            <NavLink
                className={({ isActive }) =>
                    isActive ? "inline-flex items-center font-bold text-[#3d48df] hover:text-blue-600 text-lg" : "inline-flex items-center font-semibold hover:text-blue-600 text-lg"
                }
                to="membersRequest"
            >
                <FaUserClock />
                <span className="ml-4">Members Request</span>
            </NavLink>
        </li>
        <li className="relative px-2 py-1 ">
            <NavLink
                className={({ isActive }) =>
                    isActive ? "inline-flex items-center font-bold text-[#3d48df] hover:text-blue-600 text-lg" : "inline-flex items-center font-semibold hover:text-blue-600 text-lg"
                }
                to="allMembers"
            >
                <IoPeople />
                <span className="ml-4">All Members</span>
            </NavLink>
        </li>
    </>
  );

  return (
    <div
      className={`flex h-screen bg-white ${
        isSideMenuOpen ? "overflow-hidden" : ""
      }`}
    >
      {/* Dashboard */}
      <aside className="z-20 flex-shrink-0 fixed hidden w-64 overflow-y-auto bg-white lg:block">
        <div className="h-screen py-3 pl-3 flex flex-col justify-between shadow-xl">
          {/* logo */}
          <div>
            <h1 className="text-2xl">VIP Tailor</h1>
          </div>
          {/* items and routes */}
          <div className=" flex flex-col justify-between">
            <ul className="leading-10">{navlinks}</ul>
          </div>
          {/* footer */}
          <div className="flex gap-2 justify-center items-center">
            <p>Copyright © 2024 - All right reserved by VIP Tailor's</p>
          </div>
        </div>
      </aside>
      <div className="fixed inset-0 -z-10 flex items-end bg-slate-300 bg-opacity-50 sm:items-center sm:justify-center"></div>
      {/* responsive dashboard */}
      <aside
        className={`z-20 fixed duration-300 w-64 inset-y-0 ease-in-out overflow-y-auto bg-white ${
          isSideMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="h-screen py-3 pl-3 flex flex-col justify-between shadow-xl">
          {/* logo */}
          <div>
            <h1 className="text-2xl">VIP Tailor</h1>
          </div>
          {/* items and routes */}
          <div className=" flex flex-col justify-between">
            <ul className="leading-8">{navlinks}</ul>
          </div>
          {/* footer */}
          <div className="flex justify-center items-center">
            <p>Copyright © 2024 - All right reserved by VIP Tailor's</p>
          </div>
        </div>
      </aside>
      {/* components */}
      <div className="flex flex-col flex-1 w-full overflow-y-auto bg-gray-200">
        <header className="z-40 py-5 bg-slate-50 fixed w-full top-0 lg:hidden">
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
            <div className="flex lg:hidden justify-end mr-4 w-full">
              <button onClick={handleLogout} className="btn btn-sm">
                <IoPersonOutline className="text-xl" /> Logout
              </button>
            </div>
          </div>
        </header>
        <main className="lg:ml-64 scroll-smooth">
          <Navbar2></Navbar2>
          <div className="lg:ml-8">
            <Outlet></Outlet>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
