import React from 'react';

const ProductDetails = ({ name = "Product", price = 0, stock = 0, code }) => {
    return (
        <div className='flex flex-col gap-4'>
            {/* first card */}
            <div className="flex flex-row justify-between items-center space-y-4 rounded-lg shadow-lg bg-[#EFF4F7]">
                <img alt="Product Image" className=" object-cover  rounded-l-lg h-36" src="https://source.unsplash.com/200x200/?bed" />
                <div className="flex flex-col items-center gap-2 px-6 py-3">
                    <h1 className="">Product Name</h1>
                    <h1 className="text-xl font-bold">{name}</h1>
                </div>
                <div className="flex flex-col items-center gap-2 px-6 py-3">
                    <h1 className="">Product Code</h1>
                    <h1 className="text-xl font-bold">{code}</h1>
                </div>
                <div className='flex flex-col items-center gap-3 px-6 py-3'>
                    <h3 className="">Price</h3>
                    <div className="text-xl font-bold">{price}</div>
                    <button className="btn-sm bg-white hover:bg-gray-800 hover:text-white border-black border duration-300 rounded-md">Edit Price</button>
                </div>
                <div className='flex flex-col items-center gap-3 px-6 py-3'>
                    <p className=''>Stock</p>
                    <p className='text-xl font-bold'>{stock} pcs</p>
                    <button className=" bg-white hover:bg-gray-800 hover:text-white btn-sm border-black border duration-300 rounded-md">Edit Stock</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;