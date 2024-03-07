import React from 'react';
import useOrderedProduct from '../../hooks/useOrderedProduct';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Pagination from '../pagination/pagination';
import useAllOrder from '../../hooks/useAllOrder';

const OrderedProductDetails = ({ products, filteredUser }) => {
    // const [orderProducts, refetch] = useOrderedProduct();
    const { orderProduct, currentPage, totalPages, setCurrentPage } = useAllOrder();
    const axiosPublic = useAxiosPublic();

    const handleComplete = product => {
        axiosPublic.patch(`/orderProduct/${product?._id}`)
            .then(res => {
                refetch();
                console.log(res.data)
            })
    };

    return (
        <div className='flex flex-col gap-4'>
            {
                products?.map(orderProduct => <div key={orderProduct?._id} className="flex flex-row justify-between items-center space-y-4 rounded-lg shadow-lg bg-[#EFF4F7] w-[180%] md:w-full">
                    <img alt="Product Image" className=" object-cover rounded-l-lg h-24 hidden lg:flex" src={orderProduct?.image} />
                    <div className="flex flex-col items-center gap-2 px-2 py-1">
                        <h1 className="text-xs md:text-sm">Product Name</h1>
                        <h1 className="text-base md:text-lg font-bold">{orderProduct?.name}</h1>
                    </div>
                    <div className="flex flex-col items-center gap-2 px-2 py-1">
                        <h1 className="text-xs md:text-sm">Product Code</h1>
                        <h1 className="text-base md:text-lg font-bold">{orderProduct?.productCode}</h1>
                    </div>
                    <div className='flex flex-col items-center gap-3 px-2 py-1'>
                        <h3 className="text-xs md:text-sm">Total Amount</h3>
                        <div className="text-base md:text-lg font-bold">BDT {orderProduct?.price}</div>
                    </div>
                    <div className='flex flex-col items-center gap-3 px-2 py-1'>
                        <p className='text-xs md:text-sm'>Quantity</p>
                        <p className='text-base md:text-lg font-bold'>{orderProduct?.quantity}</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 px-2 py-1">
                        <h1 className="text-xs md:text-sm">Delivery Date</h1>
                        <h1 className="text-base md:text-lg font-bold">{new Date(orderProduct?.deliveryDate).toLocaleDateString()}</h1>
                    </div>
                    <div className="flex flex-col items-center px-2 py-1">
                        <h1 className="text-xs md:text-sm">Status</h1>
                        {
                            orderProduct?.status === 'pending' ? <h1 className="text-base md:text-lg font-bold">Pending</h1> : <h1 className="text-base md:text-lg font-bold">Completed</h1>
                        }
                        {
                            orderProduct?.status === 'pending' ?
                                (
                                    filteredUser[0]?.role === 'employee' ?
                                        <button onClick={() => handleComplete(orderProduct)} className="btn btn-xs btn-accent">Complete</button> :
                                        <button disabled className="btn btn-xs btn-accent">Complete</button>

                                ) :
                                <button className="btn btn-xs hidden btn-accent">Complete</button>
                        }

                    </div>
                </div>)
            }
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};

export default OrderedProductDetails;