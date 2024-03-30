import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import handWithPen from "../../../assets/hand-with-pen4.png";
import { motion } from "framer-motion";
import "./AddNotice.css";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import DashBoardTitle from "../../../components/dashboardTitle/DashBoardTitle";

const AddNotice = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();

  const onSubmit = (data) => {
    console.log(data);
    const nodeInfo = {
      ...data,
      date: new Date(),
    };
    axiosPublic.post("/notebooks", nodeInfo).then((res) => {
      // console.log(res)
      if (res.data.message === "success") {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Order added successfully",
          showConfirmButton: false,
          timer: 1000,
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
      className="py-5 lg:px-10 px-2"
    >
      <DashBoardTitle
        title={"Admin"}
        subTitle={"Add, Edit your category section in one click. "}
      />
      <div>
        <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-20 bg-white mt-4 rounded-lg shadow justify-between py-6 md:py-10">
          <div className="w-full">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="w-full mb-5 text-center">
                <input
                  className="w-[95%] md:w-1/2 lg:px-8 px-2 py-2 bg-[#F8F8F8] rounded-lg text-black outline-none pl-4 pr-6 mx-auto"
                  type="text"
                  name="title"
                  {...register("title", { required: true })}
                  id=""
                  placeholder="Put Your Title"
                />
              </div>
              <div className="mb-6 text-center">
                <textarea
                  name="message"
                  className="w-[95%] mx-auto md:w-1/2 h-64 bg-[#F8F8F8] rounded-lg overflow-hidden border outline-none pl-4 pr-6 py-2 "
                  type="text"
                  {...register("message", { required: true })}
                  id=""
                  placeholder="Put your important notice"
                  // style={{ width: "550px", height: "200px" }}
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#403030] px-20 md:px-48 py-2 rounded text-white"
                >
                  Publish Notice
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AddNotice;
