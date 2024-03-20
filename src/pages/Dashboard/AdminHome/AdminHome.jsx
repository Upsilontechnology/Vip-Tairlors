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
    const { data: allOrderProducts = [] } = useQuery({
        queryKey: ['allOrderProduct'],
        queryFn: async () => {
            const res = await axiosPublic.get('/orderProduct')
            return res.data;
        }
    });

    const totalSells = allSellProducts?.reduce((total, product) => total + parseFloat(product?.price), 0)
  
    const completedOrders = allOrderProducts?.filter(product => product.status === 'completed');
    const completeOrderAmount = completedOrders?.reduce((total, product) => total + parseFloat(product?.price), 0)
    const totalAmount = totalSells + completeOrderAmount;


    return (
        <div className='my-5'>
            {/* title */}
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
                    <h2 className="text-2xl font-semibold">Total Sales : {totalAmount}</h2>
                    <p className="text-gray-400">(including sales and completed orders)</p>
                </div>
            </div>
            <div className='mt-5'>
                <h1 className="text-3xl font-bold text-center">All Stats</h1>
            </div>
            {/* category-wise tabs */}
            <div>
                <AdminTabs allOrderProducts={allOrderProducts} />
            </div>
        </div>
    );
};

export default AdminHome;