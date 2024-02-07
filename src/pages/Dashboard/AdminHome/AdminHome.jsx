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
            <div className='bg-stone-100 w-5/6 mx-auto flex justify-between shadow-md rounded-lg'>
                <div className='pl-3'>
                    <img className='w-96 bg-gray-200 rounded-bl-full rounded-tl-full rounded-br-full' src={AdminImg} alt="" />
                </div>
                <div className='flex flex-col justify-center items-center mr-5 space-y-3'>
                    <h1 className="text-3xl font-bold">Mojammel Hok Patoari</h1>
                    <p className="text-gray-400">Founder of VIP Tailors and BlahBlah</p>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;