import React from 'react'
import CategoryImg from "../../assets/CategoryImg.png"

const Card = () => {
  return (
    <div className='px-3 py-2 border-2 cursor-pointer max-w-[7rem] flex flex-col justify-center items-center hover:border-teal-200 hover:duration-500'>
      <div className='w-[5rem] bg-slate-100'>
        <img src={CategoryImg} alt="categoryImg" className='w-full h-auto object-cover'/>
      </div>
      <div className='flex justify-center mt-3'>
        <h3>পাঞ্জাবি</h3>
      </div>
    </div>
  )
}

export default Card
