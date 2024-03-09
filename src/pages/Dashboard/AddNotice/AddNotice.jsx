import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import handWithPen from '../../../assets/hand-with-pen4.png';
import { motion } from "framer-motion";
import "./AddNotice.css";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const AddNotice = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();


    const onSubmit = (data) => {
        console.log(data);
        const nodeInfo = {
            ...data,
            date: new Date(),
        };
        axiosPublic.post("/notebooks", nodeInfo)
            .then(res => {
                // console.log(res)
                if (res.data.message === 'success') {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Order added successfully",
                        showConfirmButton: false,
                        timer: 1000
                    });
                    reset();
                }
            });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            key="flex_046445"
            className="py-5 px-10"
        >
            <SectionTitle
                title="Notice Page"
                descrition="The Notice Page tells you important things."
            />
            <div>
                <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-20 justify-between py-6 md:py-10">
                    <div className="w-full md:w-[60%]">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="w-full mb-5">
                                <label htmlFor="title" className="font-medium p-1">
                                    Title
                                </label>
                                <input
                                    className="w-full px-8 py-2 bg-secondary-color rounded-lg border-2 text-black border-gray-500 outline-none focus:border-[#0fcda1]"
                                    type="text"
                                    name="title"
                                    {...register("title", { required: true })}
                                    id=""
                                    placeholder="Title"
                                />
                            </div>
                            <div className="w-full mb-6">
                                <label htmlFor="" className="font-medium p-1">
                                    Save Nodebook info
                                </label>
                                <textarea name="message"
                                    className="w-full h-64 rounded-xl overflow-hidden border border-gray-500 outline-none focus:border-[#0fcda1] px-8 "
                                    type="text"
                                    {...register("message", { required: true })}
                                    id=""
                                    placeholder="message"
                                    style={{ width: "550px", height: "200px" }}
                                />
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="bg-[#a09c9c] rounded-lg font-semibold py-3 px-10"
                                >
                                    Save Notes
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="w-full md:w-[40%]">
                        <img className="w-4/5 mx-auto md:ml-auto" src={handWithPen} alt="" />
                    </div>
                </div>
            </div>
        </ motion.div>
    );
};

export default AddNotice;


