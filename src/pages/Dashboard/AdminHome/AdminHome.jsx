import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import AdminImg from "../../../assets/admin.png";
import useSellProduct from '../../../hooks/useSellProduct';
import useOrderedProduct from '../../../hooks/useOrderedProduct';
import { IoBagOutline } from 'react-icons/io5';
import { BsCart3 } from 'react-icons/bs';

const AdminHome = () => {
    const [sellProducts] = useSellProduct();
    const [orderProducts] = useOrderedProduct();

    const totalSells = sellProducts?.reduce((total, product) => total + parseFloat(product?.price), 0)
    const pendingOrders = orderProducts?.items?.filter(product => product.status === 'pending');
    const completedOrders = orderProducts?.items?.filter(product => product.status === 'completed');


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
                </div>
            </div>
            <div className='mt-5'>
                <h1 className="text-3xl font-bold text-center">All Stats</h1>
            </div>
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
                                <h2 className='text-[1.3rem] font-semibold '>{orderProducts?.items?.length}</h2>
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