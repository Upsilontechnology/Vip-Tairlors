import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import AdminImg from "../../../assets/admin.png";
import useSellProduct from '../../../hooks/useSellProduct';
import useOrderedProduct from '../../../hooks/useOrderedProduct';
import { IoBagOutline } from 'react-icons/io5';
import { BsCart3 } from 'react-icons/bs';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import AdminTabs from '../AdminTabs/AdminTabs';

const AdminHome = () => {
    const axiosPublic = useAxiosPublic();

    const { data: allSellProducts, refetch } = useQuery({
        queryKey: ['allSellProduct'],
        queryFn: async () => {
            const res = await axiosPublic.get('/sellProduct')
            return res.data;
        }
    });
    const { data: allOrderProducts } = useQuery({
        queryKey: ['allOrderProduct'],
        queryFn: async () => {
            const res = await axiosPublic.get('/orderProduct')
            return res.data;
        }
    });

    const totalSells = allSellProducts?.reduce((total, product) => total + parseFloat(product?.price), 0)
    const pendingOrders = allOrderProducts?.filter(product => product.status === 'pending');
    const completedOrders = allOrderProducts?.filter(product => product.status === 'completed');
    const completeOrderPrice = completedOrders?.reduce((total, product) => total + parseFloat(product?.price), 0)
    const totalAmount = totalSells + completeOrderPrice;


    return (
        <div className='my-5'>
            <SectionTitle
                title={"Welcome To Your World!"}
                descrition="Let's Conquer The World in Easy Way!"
            />
            {/* admin info */}
            <div className='bg-stone-100 lg:w-5/6 mx-1 lg:mx-auto flex justify-between gap-3 lg:gap-0 shadow-md rounded-lg'>
                <div className='pl-3'>
                    <img className='lg:w-96 w-72 bg-gray-200 rounded-bl-full rounded-tl-full rounded-br-full' src={AdminImg} alt="" />
                </div>
                <div className='flex flex-col justify-center items-center mr-5 space-y-3'>
                    <h1 className="md:text-3xl text-xl font-bold">Mojammel Hok Patoari</h1>
                    <p className="text-gray-400">Founder of VIP Tailors and BlahBlah</p>
                    <h2 className="text-2xl font-bold">Total Sales : {totalAmount}</h2>
                </div>
            </div>
            <div className='mt-5'>
                <h1 className="text-3xl font-bold text-center">All Stats</h1>
            </div>
            <AdminTabs />
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
                                <h2 className='text-[1.3rem] font-semibold '>{allOrderProducts?.length}</h2>
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

export default AdminHome;