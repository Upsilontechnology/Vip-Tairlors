import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';

const NoticePage = () => {
  const axiosPublic = useAxiosPublic();
  const [datas, setDatas] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [notes, setNotes] = useState([]);
  const { id } = useParams();


  useEffect(() => {
    axiosPublic.get(`/notebooks`)
      .then(data => {
        setNotes(data?.data);
      })
      .catch(error => {
        console.error('Error fetching notes:', error);
      });
  }, [axiosPublic]);

  useEffect(() => {
    axiosPublic.get(`/notebooks/${id}`)
      .then(data => {
        setDatas(data?.data);
        setIsLoading(false)
      })
      .catch(error => {
        console.error('Error fetching notes:', error);
      });

  }, [axiosPublic]);
  console.log(datas)

  const { title, message, date } = datas || {};

  if (isLoading) {
    return <h1>Loading.....</h1>
  }



  return (
    <div className=' supershop-container h-[100vh] top-0'>
      <h1 className='text-center text-2xl md:text-5xl font-bold mt-[70px] text-[#227897]  pb-5 border-b mb-1 '>NOTICE</h1>

      <div className='flex md:flex-row flex-col md:gap-0 gap-5  mt-10 justify-between max-w-4xl mx-auto'>
        <div className=' md:w-[60%] mr-7 '>
          <h3 className=' text-2xl md:text-3xl font-semibold border-l-8 border-[#41756f] pl-1'>{title}</h3>
          <p className=' text-base px-3 mt-2 '>{message}</p>
        </div>
      </div>

    </div>
  )
}

export default NoticePage
