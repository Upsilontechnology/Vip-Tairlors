import React from 'react'
import { Link } from 'react-router-dom'

const Button = () => {
  return (
    <div className='mt-4 mb-2 rounded shadow-inner'>
      <Link to="/addProduct" className='px-4 py-2 shadow-md hover:shadow-xl focus:outline-none focus:shadow-xl transition-all duration-300 hover:border-2 hover:bg-transparent text-black bg-teal-300 rounded font-semibold'>Add New</Link>
    </div>
  )
}

export default Button
