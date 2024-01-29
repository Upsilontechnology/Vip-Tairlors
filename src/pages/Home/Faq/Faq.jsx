import React from 'react'
import FaqImg from "../../../assets/faqImg.png"

const Faq = () => {
  return (
    <div className='supershop-container'>
      <div className='bg-[#0A1D56] text-white p-5 rounded py-10 lg:flex md:flex justify-between items-center'>
        <div className='pl-5'>
            <h3 className='text-2xl lg:text-4xl md:text-3xl font-semibold text-[#f5f5f5]'>Optimizing Stocks <br /> for Maximum Efficiency</h3>
            <p className='mt-10 text-base lg:text-xl max-w-[80%] text-[#dbd9d9]'>Explore strategic stock allocation, streamline inventory processes, and implement data-driven decisions to enhance operational efficiency and maximize profitability in stock management for sustainable business growth.</p>
        </div>
        <div className='lg:min-w-[35rem] md:min-w-[25rem] min-w-[10rem]'>
            <img src={FaqImg} alt="" className='w-full h-auto object-cover' />
        </div>
      </div>
    </div>
  )
}

export default Faq
