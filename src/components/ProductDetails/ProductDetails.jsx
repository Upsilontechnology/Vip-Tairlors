import React from 'react';
import useSellProduct from '../../hooks/useSellProduct';
import "./ProductDetails.css";

const ProductDetails = () => {
    const [sellProducts] = useSellProduct();

    return (
        <div className='flex flex-col gap-4'>
            {
                sellProducts?.map(sellProduct => <div key={sellProduct?._id} className="flex product1 flex-row justify-between items-center md:space-y-4 rounded-lg shadow-lg bg-[#EFF4F7]">
                    <img alt="Product Image" className="porduct object-cover  rounded-l-lg h-36" src="https://source.unsplash.com/200x200/?bed" />
                        <div className="flex flex-col items-center gap-2 px-2 py-1">
                            <h1 className="">Product Name</h1>
                            <h1 className="md:text-xl font-bold">{sellProduct?.name}</h1>
                        </div>
                        <div className="flex flex-col items-center gap-2 px-2 py-1">
                            <h1 className="">Product Code</h1>
                            <h1 className="md:text-xl font-bold">{sellProduct?.productCode}</h1>
                        </div>
                        <div className='flex flex-col items-center gap-3 px-2 py-1'>
                            <h3 className="">Total Amount</h3>
                            <div className="md:text-xl font-bold">BDT {sellProduct?.price}</div>
                        </div>
                        <div className='flex flex-col items-center gap-3 px-2 py-1'>
                            <p className=''>Quantity</p>
                            <p className='md:text-xl font-bold'>{sellProduct?.quantity}</p>
                        </div>
                        <div className="flex flex-col items-center gap-2 px-2 py-1">
                            <h1 className="">Date</h1>
                            <h1 className="md:text-xl font-bold">{new Date(sellProduct?.sellingDate).toLocaleDateString()}</h1>
                        </div>
                </div>)
            }
        </div>
    );
};

export default ProductDetails;