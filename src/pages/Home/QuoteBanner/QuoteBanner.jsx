import React from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import QuoteImg from "../../../assets/QuoteImg.jpg"
import QuoteIcon from "../../../assets/quoteIcon.png"
import { FaQuoteLeft } from "react-icons/fa";

const QuoteBanner = () => {
  return (
    <div className='my-3 md:my-10'>
      <SectionTitle title="Admin Insight" descrition="Explore the quote and insight from our administration." />
      <div className='bg-[#F2F1F1] mt-6 py-10 '>

        <div className='max-w-[1280px] mx-auto lg:flex-row flex-col gap-[5rem] lg:gap-16 px-5 flex items-center justify-center lg:justify-between '>
          <div className=' flex flex-col justify-center items-center '>
            <div className='w-[20rem]'>
              <img src={QuoteImg} alt="" className='w-full object-cover rounded-lg ' />
            </div>
            <div className='flex flex-col items-center mt-4 text-xl'>
              <h3 className='font-bold'>MD Tozammel Hoque Patwary </h3>
              <h4 className='text-base'>Founder of VIP Tailors</h4>
            </div>
          </div>
          <div className='flex flex-col md:text-3xl md:gap-4 relative font-semibold '>
            <FaQuoteLeft className='md:text-5xl text-[#4F4F4F]  absolute top-[-2rem] md:top-[-4rem] left-0 lg:left-[-48px] ' />
            <h3 className='text-[#4F4F4F] '>Success is not the result of spontaneous <br /> combustion. You must  set yourself on fire.</h3>
          </div>
        </div>

      </div>
    </div>
  )
}

export default QuoteBanner
