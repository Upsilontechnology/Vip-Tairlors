import React from 'react'
import QuoteImg from "../../../assets/quoteBanner.png"
import AdminImg from "../../../assets/admin.png"
import SectionTitle from '../../../components/SectionTitle/SectionTitle'

const QuoteBanner = () => {
  return (
    <div className='supershop-container '>
      <div>
      <SectionTitle
                title="Owner Insights"
                descrition="Gain valuable insights into your business with our Owner Insights section."
            />
      </div>
      <div className='flex xl:flex-row flex-col gap-20 xl:gap-0 justify-center xl:justify-between p-[2rem]  shadow-lg rounded px-[0rem] lg:px-[4rem]  bg-[#EFF4F7] '>
        <div className=' flex flex-col justify-center items-center '>
          <div className='  w-[20rem] pt-5 pl-3  rounded-lg bg-slate-400'>
            <img src={AdminImg} alt="" className='w-full object-cover rounded-full' />
          </div>
          <div className='flex flex-col items-center mt-5 text-xl font-semibold font-mono '>
            <h3>Mojammel Hok Patoari</h3>
            <h4>Founder of VIP Tailor</h4>
          </div>
        </div>
        <div className='flex items-center justify-center text-3xl font-semibold font-serif'>
          <h3>“ Success is not the result of spontaneous <br /> combustion. You must  set yourself on fire ”</h3>
        </div>
      </div>
    </div>
  )
}

export default QuoteBanner
