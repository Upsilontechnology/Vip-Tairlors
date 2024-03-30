import Swal from 'sweetalert2';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useOrderedProduct from '../../../hooks/useOrderedProduct';
import { MdOutlineDeleteOutline } from "react-icons/md";
import Pagination from '../../../components/pagination/pagination';
import { useEffect, useState } from 'react';

const OrderStatement = () => {
    const [orderProducts, refetch, currentPage, totalPages, setCurrentPage] = useOrderedProduct();
    const axiosPublic = useAxiosPublic();
 

    const handleDelete = (product) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/orderProduct/${product?._id}`)
                    .then(res => {
                        console.log(res)
                        refetch();
                        if (res.status === 200) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Order Statement has been deleted..!",
                                icon: "success"
                            });
                        }
                    })
            }
        });


    }
    return (
        <div>
            <div className='px-3 lg:w-6/12 mx-auto text-center my-7'>
                <SectionTitle
                    title="Statement Pieces"
                    descrition="Explore our collection and make a statement that reflects your individuality."
                />
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='border-b-[1.2px] border-black'>
                            <th className='p-auto md:p-0'>#</th>
                            <th>Code</th>
                            <th>Delivery Date</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orderProducts?.items?.map((product, ind) => <tr className='border-b-[1.2px] border-black' key={product?._id}>
                                <th className='p-auto md:p-0'>{ind + 1}</th>
                                <th>{product?.productCode}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <div className="font-bold">{new Date(product?.deliveryDate).toLocaleDateString()}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {product?.quantity}
                                </td>
                                <td>
                                    {product?.price}
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(product)} className="btn btn-sm">
                                        <MdOutlineDeleteOutline />
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {/* pagination */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};

export default OrderStatement;