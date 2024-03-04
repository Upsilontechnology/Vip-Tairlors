import React from 'react'
import { FaFlag } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Notice = () => {
  return (
    <div className='flex items-center gap-3 bg-[#F2F1F1] justify-center py-[8rem]  my-3 shadow-md px-2 '>
      <div className='text-5xl  '>
        <FaFlag className=' bg-[#FFFBE7] px-2 '/>
      </div>
      <div className='flex flex-col gap-2'>
        <h3 className=' text-xl '>Feb 24, 2022</h3>
        <Link to={"/notice"}><h1 className='text-2xl font-semibold hover:text-[#41756f] cursor-pointer transition duration-300 '>১ম বর্ষ বি.এস.সি. (অনার্স/ইঞ্জিনিয়ারিং) ভর্তি পরীক্ষা ২০২০-২০২১ এর ফলাফল</h1></Link>
      </div>
    </div>
  )
}

export default Notice
