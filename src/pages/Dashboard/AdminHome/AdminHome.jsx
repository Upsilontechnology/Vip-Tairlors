import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import AdminImg from "../../../assets/admin.png";

const AdminHome = () => {
    return (
        <div className='my-5'>
            <SectionTitle
                title={"Welcome To Your World!"}
                descrition="Let's Conquer The World in Easy Way!"
            />
            <div className='bg-stone-100 lg:w-5/6 mx-1 lg:mx-auto flex justify-between gap-3 lg:gap-0 shadow-md rounded-lg'>
                <div className='pl-3'>
                    <img className='lg:w-96 w-72 bg-gray-200 rounded-bl-full rounded-tl-full rounded-br-full' src={AdminImg} alt="" />
                </div>
                <div className='flex flex-col justify-center items-center mr-5 space-y-3'>
                    <h1 className="md:text-3xl text-xl font-bold">Mojammel Hok Patoari</h1>
                    <p className="text-gray-400">Founder of VIP Tailors and BlahBlah</p>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;