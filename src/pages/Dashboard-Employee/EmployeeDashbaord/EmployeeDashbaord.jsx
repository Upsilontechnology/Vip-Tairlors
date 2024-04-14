import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Navbar2 from "../../../shared/Navbar2/Navbar2";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineHome,
  AiOutlineSchedule,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BiBarChart } from "react-icons/bi";
import { RiFileList3Line } from "react-icons/ri";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { IoBagAddOutline, IoPersonOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import useCarts from "../../../hooks/useCarts";
import { CiViewList } from "react-icons/ci";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const EmployeeDashboard = ({ isSideMenuOpen, toggleSideMenu }) => {
  const [carts] = useCarts();

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

  const navlinks = (
    <>
      <li className="relative px-2 py-1">
        <NavLink
          defaultChecked
          className={({ isActive }) =>
            isActive
              ? "inline-flex items-center bg-[#DFF8FC] w-48 pl-2 pr-2 py-1 rounded font-bold text-[#3d48df] hover:text-blue-600 text-base"
              : "inline-flex items-center font-semibold pl-2 py-1 hover:text-blue-600 text-base"
          }
          to="employeeHome"
        >
          <MdDashboard />
          <span className="ml-4">Overview</span>
        </NavLink>
      </li>
      <li className="relative px-2 py-1 ">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "inline-flex items-center bg-[#DFF8FC] w-48 pl-2 pr-2 py-1 rounded font-bold text-[#3d48df] hover:text-blue-600 text-base"
              : "inline-flex items-center font-semibold pl-2 py-1 hover:text-blue-600 text-base"
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
            isActive
              ? "inline-flex items-center bg-[#DFF8FC] w-48 pl-2 pr-2 py-1 rounded font-bold text-[#3d48df] hover:text-blue-600 text-base"
              : "inline-flex items-center font-semibold pl-2 py-1 hover:text-blue-600 text-base"
          }
          to="addToCart"
        >
          <RiFileList3Line />
          <span className="ml-4">
            Sell List <span className="text-red-500">({carts?.length})</span>
          </span>
        </NavLink>
      </li>
      <li className="relative px-2 py-1 ">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "inline-flex items-center bg-[#DFF8FC] w-48 pl-2 pr-2 py-1 rounded font-bold text-[#3d48df] hover:text-blue-600 text-base"
              : "inline-flex items-center font-semibold pl-2 py-1 hover:text-blue-600 text-base"
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
            isActive
              ? "inline-flex items-center bg-[#DFF8FC] w-48 pl-2 pr-2 py-1 rounded font-bold text-[#3d48df] hover:text-blue-600 text-base"
              : "inline-flex items-center font-semibold pl-2 py-1 hover:text-blue-600 text-base"
          }
          to="orderedList"
        >
          <BiBarChart />
          <span className="ml-4">Ordered List</span>
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
      <aside className="z-20 flex-shrink-0 fixed hidden w-[285px] overflow-y-auto bg-white lg:block lg:mt-20 4xl:ml-[12%] 3xl:ml-[11%] 2xl:ml-[13%] xl:ml-5 lg:ml-5 rounded-lg">
        <div className="2xl:h-[80vh] lg:h-[84.5vh] py-3 pl-3 flex flex-col gap-9 shadow-xl">
          {/* logo */}
          <div>
            <p className="font-bold text-lg">Employee Dashboard</p>
          </div>
          {/* items and routes */}
          <div className="flex flex-col justify-start">
            <ul className="leading-10">{navlinks}</ul>
          </div>
          {/* social icons */}
          {/* <div className="flex gap-2 justify-center items-center">
              <AiFillFacebook className="text-2xl rounded-full text-blue-500" />
              <AiFillInstagram className="text-2xl rounded-full text-pink-600" />
              <AiOutlineWhatsApp className="text-2xl rounded-full text-green-500" />
              <AiOutlineTwitter className="text-2xl rounded-full" />
            </div> */}
        </div>
      </aside>
      <div className="fixed inset-0 -z-10 flex items-end bg-slate-300 bg-opacity-50 sm:items-center sm:justify-center"></div>
      {/* responsive dashboard */}
      <aside
        className={`z-20 fixed w-64 duration-300 inset-y-0 ease-in-out overflow-y-auto bg-white ${
          isSideMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="h-screen py-3 pl-3 flex flex-col justify-between shadow-xl">
          {/* logo */}
          <div>
            <p className="font-bold text-lg">Employee Dashboard</p>
          </div>
          {/* items and routes */}
          <div className=" flex flex-col justify-between">
            <ul className="leading-10">{navlinks}</ul>
          </div>
          {/* social icons */}
          <div className="flex gap-2 justify-center items-center">
            <AiFillFacebook className="text-2xl rounded-full text-blue-500" />
            <AiFillInstagram className="text-2xl rounded-full text-pink-600" />
            <AiOutlineWhatsApp className="text-2xl rounded-full text-green-500" />
            <AiOutlineTwitter className="text-2xl rounded-full" />
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
            {/* <div className="flex md:hidden justify-center mr-4 w-[80%]"></div> */}
            <div className="flex lg:hidden justify-end mr-4 w-full">
              <button onClick={handleLogout} className="btn px-8 btn-sm">
                 Log Out
              </button>
            </div>
          </div>
        </header>
        <main className="scroll-smooth">
          <div className="">
            <Navbar2></Navbar2>
          </div>
          <div className="4xl:ml-[25.5%] 4xl:mr-[200px] 3xl:ml-[26%] 3xl:mr-[10%] lg:h-[83vh] 2xl:ml-[29%] 2xl:mr-[12%] xl:ml-[22%] xl:mr-5 lg:ml-[280px] lg:mr-5 mt-4">
            <Outlet></Outlet>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
