import React from 'react';
import useOrderedProduct from '../../hooks/useOrderedProduct';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const OrderedProductDetails = ({ products }) => {
    const [orderProducts, refetch] = useOrderedProduct();
    const axiosPublic = useAxiosPublic();

    const  handleComplete = product =>{
        axiosPublic.patch(`/orderProduct/${product?._id}`)
        .then(res =>{
            refetch();
            console.log(res.data)
        })
    }
    return (
        <div className='flex flex-col gap-4'>
            {
                products?.map(orderProduct => <div key={orderProduct?._id} className="flex flex-row justify-between items-center space-y-4 rounded-lg shadow-lg bg-[#EFF4F7]">
                    <img alt="Product Image" className=" object-cover rounded-l-lg h-24" src="https://source.unsplash.com/200x200/?bed" />
                    <div className="flex flex-col items-center gap-2 px-2 py-1">
                        <h1 className="">Product Name</h1>
                        <h1 className="text-lg font-bold">{orderProduct?.name}</h1>
                    </div>
                    <div className="flex flex-col items-center gap-2 px-2 py-1">
                        <h1 className="">Product Code</h1>
                        <h1 className="text-lg font-bold">{orderProduct?.productCode}</h1>
                    </div>
                    <div className='flex flex-col items-center gap-3 px-2 py-1'>
                        <h3 className="">Total Amount</h3>
                        <div className="text-lg font-bold">BDT {orderProduct?.price}</div>
                    </div>
                    <div className='flex flex-col items-center gap-3 px-2 py-1'>
                        <p className=''>Quantity</p>
                        <p className='text-lg font-bold'>{orderProduct?.quantity}</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 px-2 py-1">
                        <h1 className="">Delivery Date</h1>
                        <h1 className="text-lg font-bold">{new Date(orderProduct?.deliveryDate).toLocaleDateString()}</h1>
                    </div>
                    <div className="flex flex-col items-center px-2 py-1">
                        <h1 className="">Status</h1>
                        {
                            orderProduct?.status === 'pending' ? <h1 className="text-lg font-bold">Pending</h1> : <h1 className="text-lg font-bold">Completed</h1>
                        }
                        {
                            orderProduct?.status === 'pending' ? <button onClick={() => handleComplete(orderProduct)} className="btn btn-xs btn-accent">Complete</button> : <button className="btn btn-xs hidden btn-accent">Complete</button>
                        }

                    </div>
                </div>)
            }
        </div>
    );
};

export default OrderedProductDetails;