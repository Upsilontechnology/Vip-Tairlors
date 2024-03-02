import React from 'react';
import { useForm } from 'react-hook-form';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import toast from "react-hot-toast";
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';

const OrderedProduct = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const productDetails = {
            name: data?.name,
            quantity: data?.quantity,
            category: data?.category,
            productCode: data?.code,
            image: data?.image,
            deliveryDate: data?.date,
            price: data?.price,
            status: "pending",
            email: user?.email
        }

        // product added to the server
        axiosPublic.post('/orderProduct', productDetails)
            .then(res => {
                // console.log(res)
                if (res.data.message === 'success') {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Order added successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    // const { register, formState: { errors } } = useForm();


    // const handleCheckService = event => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const name = form.name.value;
    //     const date = form.date.value;
    //     const photo = form.image.value;
    //     const price = form.price.value;
    //     const category = form.category.value;
    //     const quantity = form.quantity.value;
    //     const status = "Pending";
    //     const dataInfo = {
    //         name,
    //         photo,
    //         date,
    //         category,
    //         quantity,
    //         price,
    //         status
    //     }
    //     console.log(dataInfo);
    //     fetch('http://localhost:5000/orderProduct', {
    //         method: 'POST',
    //         headers: {
    //             "content-type": 'application/json',
    //         },
    //         body: JSON.stringify(dataInfo)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.message === "success") {
    //                 toast.success("Wow! You Leave a feedback!")
    //             }
    //         })
    // }

    return (
        <div className='supershop-container'>
            <SectionTitle
                title="Order Products"
                descrition="Welcome to our showcase selections, where uniqueness meets quality."
            />
            <div className='md:w-5/6 rounded-lg mx-auto w-full shadow-lg p-10'>
                <form className='' onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex gap-6'>
                        {/* Product Name */}
                        <div className="form-control w-full my-1">
                            <label className="label">
                                <span className="label-text">Product Name*</span>
                            </label>
                            <input
                                {...register("name", { required: true })}
                                type="text"
                                placeholder="Product Name"
                                className="input input-bordered w-full focus:outline-none" />
                        </div>
                        {/* Quantity */}
                        <div className="form-control w-full my-1">
                            <label className="label">
                                <span className="label-text">Quantity*</span>
                            </label>
                            <input
                                {...register("quantity", { required: true })}
                                type="number"
                                placeholder="Quantity"
                                className="input input-bordered w-full focus:outline-none" />
                        </div>
                    </div>
                    <div className='flex gap-6'>
                        {/* price */}
                        <div className="form-control w-full my-1">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                {...register("price", { required: true })}
                                type="number"
                                placeholder="Price"
                                className="input input-bordered w-full focus:outline-none" />
                        </div>
                        {/* Date */}
                        <div className="form-control w-full my-1">
                            <label className="label">
                                <span className="label-text">Delivary Date*(mm/dd/yyyy)</span>
                            </label>
                            <input
                                {...register("date", { required: true })}
                                type="date"
                                placeholder="Date"
                                className="input input-bordered w-full focus:outline-none" />
                        </div>
                    </div>
                    <div className='flex gap-6'>
                        {/* category */}
                        <div className="form-control w-full my-1">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select
                                defaultValue="default"
                                {...register('category', { required: true })}
                                className="select select-bordered w-full focus:outline-none">
                                <option disabled value="default">Select a category</option>
                                <option value="Breakfast">Breakfast</option>
                                <option value="Lunch">Lunch</option>
                                <option value="Dinner">Dinner</option>
                            </select>
                        </div>
                        {/* product Code */}
                        <div className="form-control w-full my-1">
                            <label className="label">
                                <span className="label-text">Product Code*</span>
                            </label>
                            <input
                                {...register("code", { required: true })}
                                type="number"
                                placeholder="Product Code"
                                className="input input-bordered w-full focus:outline-none" />
                        </div>
                    </div>
                    {/* Image */}
                    <div className='form-control w-full my-1'>
                        <label className="label">
                            <span className="label-text">Image URL*</span>
                        </label>
                        <input
                            {...register("image")}
                            type="file"
                            placeholder="Select Image"
                            className="input input-bordered w-full focus:outline-noned" />
                    </div>
                    <button className="focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent bg-[#1D2A3B] hover:bg-[#131c29] text-white font-semibold py-2.5 rounded-md w-full mt-5 ">Add Product</button>
                </form>
            </div>
        </div>
    );
};

export default OrderedProduct;