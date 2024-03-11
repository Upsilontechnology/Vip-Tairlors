import "./ProductDetails.css";
import useSellProduct from "../../hooks/useSellProduct";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ProductDetails = () => {
    const [searchValue, setSearchValue] = useState("");
    const [axiosSecure] = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const email = user?.email;

    const { data: userInfo } = useQuery({
        queryKey: ['userInfo'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/${email}`)
            return res.data;
        }
    })
    const role = userInfo?.role;


    // delete handler
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
                axiosPublic.delete(`/sellProduct/${product?._id}`)
                    .then(res => {
                        console.log(res)
                        if (res.status === 200) {
                            // remaining product
                            const remaining = filterBySearch?.filter(products => products?._id !== product?._id)
                            setFilterBySearch(remaining)

                            Swal.fire({
                                title: "Deleted!",
                                text: "Product has been deleted..!",
                                icon: "success"
                            });
                        }
                    })
            }
        });


    }

    return (
        <div>
            <div className='flex flex-col gap-4'>
                <div className="form-control w-1/2 mx-auto mb-5">
                    <input onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="Search by Product Code" className="input input-bordered focus:outline-none" />
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className=' text-black'>
                                <th>#</th>
                                <th>Product Code</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Date</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filterBySearch?.map((product, ind) => <tr key={product?._id} className="">
                                    <td>
                                        {ind + 1}
                                    </td>
                                    <td>
                                        {product?.productCode}
                                    </td>
                                    <td>
                                        {product?.name}
                                    </td>
                                    <td>
                                        BDT {product?.price}
                                    </td>
                                    <td>
                                        {product?.quantity}
                                    </td>
                                    <td>
                                        {new Date(product?.sellingDate).toLocaleDateString()}
                                    </td>
                                    <td>
                                        <img className="w-10 h-10" src={product?.image} alt="" />
                                    </td>
                                    <th>
                                        <button onClick={() => handleDelete(product)} className="btn btn-ghost btn-sm">
                                            <MdOutlineDeleteOutline className="text-xl" />
                                        </button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;