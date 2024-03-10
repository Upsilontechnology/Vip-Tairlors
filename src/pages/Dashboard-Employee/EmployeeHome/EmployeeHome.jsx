import React from 'react';
import { IoBagOutline } from "react-icons/io5";
import { FaCalculator } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import useSellProduct from '../../../hooks/useSellProduct';
import useOrderedProduct from '../../../hooks/useOrderedProduct';
import useAuth from '../../../hooks/useAuth';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const EmployeeHome = () => {
    const { user } = useAuth();
    const [sellProducts] = useSellProduct();
    const [orderProducts] = useOrderedProduct();
    console.log(sellProducts);

    // filtering sell stats
    const filteredSells = sellProducts?.data?.filter(product => product?.email === user?.email);
    const totalSells = filteredSells?.reduce((total, product) => total + parseFloat(product?.price), 0)

    // filtering order stats
    const filteredOrders = orderProducts?.data?.filter(product => product?.email === user?.email)
    const pendingOrders = filteredOrders?.filter(product => product.status === 'pending');
    const completedOrders = filteredOrders?.filter(product => product.status === 'completed');


    return (
        <div className='mt-4'>
            {/* image container */}
            {/* <div className='flex justify-center items-center'>
                <img src="https://i.ibb.co/N12KcsH/image-5.png" alt="" />
            </div> */}
            <SectionTitle
            title="Welcome to professional dashboard"
            descrition="Insights, management tools and ad creation - all in one place"
            />
            {/* card container */}
            <div className='flex justify-center mb-5'>
                <div className='flex flex-col gap-5 justify-center p-4 lg:p-12 mt-5 bg-white lg:w-5/6'>
                    <div className='flex justify-between items-center'>
                        <h3 className="text-2xl font-bold">Total Summary</h3>
                    </div>
                    {/* cards */}
                    <div className='grid grid-cols-2 gap-4 lg:gap-10'>
                        <div className='max-w-[25rem] border border-gray-400 shadow-md rounded-md flex gap-5 items-center p-2 lg:p-4 '>
                            <div className='p-3 bg-[#9da6c0] rounded-lg '>
                                <div className='bg-[#0a1d56] p-2 rounded-lg text-white text-xl '>
                                    <IoBagOutline className='font-semibold' />
                                </div>
                            </div>
                            <div>
                                <h3 className='text-sm font-medium '>Total Sales</h3>
                                <h2 className='text-xl font-semibold '>{totalSells} BDT</h2>
                            </div>
                        </div>

                        <div className='max-w-[25rem] pr-[3rem] border border-gray-400 shadow-md rounded-md flex gap-5 items-center p-4 '>
                            <div className='p-3 bg-[#9da6c0] rounded-lg '>
                                <div className='bg-[#0a1d56] p-2 rounded-lg text-white text-xl '>
                                    <BsCart3 className='font-semibold' />
                                </div>
                            </div>
                            <div>
                                <h3 className='text-sm font-medium '>Total Orders</h3>
                                <h2 className='text-[1.3rem] font-semibold '>{filteredOrders?.length}</h2>
                            </div>
                        </div>

                        <div className='max-w-[25rem] pr-[3rem] border border-gray-400 shadow-md rounded-md flex gap-5 items-center p-4 '>
                            <div className='p-3 bg-[#9da6c0] rounded-lg '>
                                <div className='bg-[#0a1d56] p-2 rounded-lg text-white text-xl '>
                                    <BsCart3 className='font-semibold' />
                                </div>
                            </div>
                            <div>
                                <h3 className='text-sm font-medium '>Total Delivered</h3>
                                <h2 className='text-[1.3rem] font-semibold '>{completedOrders?.length}</h2>
                            </div>
                        </div>

                        <div className='max-w-[25rem] pr-[3rem] border border-gray-400 shadow-md rounded-md flex gap-5 items-center p-4 '>
                            <div className='p-3 bg-[#9da6c0] rounded-lg '>
                                <div className='bg-[#0a1d56] p-2 rounded-lg text-white text-xl '>
                                    <BsCart3 className='font-semibold' />
                                </div>
                            </div>
                            <div>
                                <h3 className='text-sm font-medium '>Total Pending</h3>
                                <h2 className='text-[1.3rem] font-semibold '>{pendingOrders?.length}</h2>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeHome;