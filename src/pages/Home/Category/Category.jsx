import React from 'react'
import Card from "./Card.jsx"
import SectionTitle from '../../../components/SectionTitle/SectionTitle.jsx'

const Category = () => {
  return (
    <div className='supershop-container'>
      <SectionTitle
        title="Explore Our Categories"
        descrition="Explore our diverse range of categories to find exactly what you're looking for. "
      />
      <div className='flex justify-center items-center w-full'>
        <div className='grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-8 place-items-center'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default Category
