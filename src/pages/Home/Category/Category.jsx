import React from 'react'
import Card from "./Card.jsx"

const Category = () => {
  return (
    <div className='flex justify-center items-center w-full'>
      <div className='w-[1200px] grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-8 place-items-center px-3'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Category
