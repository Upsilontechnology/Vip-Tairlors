import React from 'react';

const ProductDetails = ({ name = "Product", price = 0, stock = 0 }) => {
    return (
        <div className="card gap-2 card-side bg-base-100 shadow-xl my-10 h-44">
            <figure><img className='w-44 h-full' src="https://i.ibb.co/NsvjBvg/profile.jpg" alt="Product" /></figure>
            <div className="p-2 space-y-2">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p> Price: <span className='font-bold'>{price} BDT</span></p>
                <p>Stock: <span className='font-bold'> {stock}</span> </p>
                <div className="card-actions">
                    <button className="btn btn-outline btn-info">Edit Price</button>
                    <button className="btn btn-outline btn-accent">Edit Stock</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;