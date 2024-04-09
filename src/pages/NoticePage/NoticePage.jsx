import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

const NoticePage = () => {
  const axiosPublic = useAxiosPublic();
  const [datas, setDatas] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [notes, setNotes] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axiosPublic
      .get(`/notebooks`)
      .then((data) => {
        setNotes(data?.data);
      })
      .catch((error) => {
        console.error("Error fetching notes:", error);
      });
  }, [axiosPublic]);

  useEffect(() => {
    axiosPublic
      .get(`/notebooks/${id}`)
      .then((data) => {
        setDatas(data?.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching notes:", error);
      });
  }, [axiosPublic]);
  console.log(datas);

  const { title, message, date } = datas || {};

  if (isLoading) {
    return <h1>Loading.....</h1>;
  }

  return (
    <div className="  h-[100vh] top-0">
      <div className="bg-[#F2F1F1] py-[6rem] ">
        <h1 className="text-center text-[1.8rem] mt-[2rem] font-bold text-[#2E2E2E]  ">
          VIP Tailors Regular Notice
        </h1>
      </div>

      <div className="flex supershop-container flex-col md:gap-0 gap-5 ">
        <div className="  ">
          <h3 className=" border-b border-black text-[1.5rem] font-semibold pb-4 ">
            {title}
          </h3>
          <p className=" pt-8 ">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default NoticePage;
