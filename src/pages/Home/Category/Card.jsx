import React from 'react'
import CategoryImg from "../../../assets/CategoryImg.png"
import Button from './Button'

const Card = () => {
  return (
    <div className='px-3 py-2 border-2 cursor-pointer min-w-[10rem] flex flex-col rounded shadow-lg justify-center items-center hover:border-teal-200 hover:duration-500'>
      <div className='w-[8rem] bg-slate-100 rounded'>
        <img src={CategoryImg} alt="categoryImg" className='w-full h-auto object-cover'/>
      </div>
      <div className='flex justify-center flex-col items-center mt-2'>
        <h3>পাঞ্জাবি</h3>
        <Button />
      </div>
    </div>
  )
}

export default Card
