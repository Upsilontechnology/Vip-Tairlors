import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useSellProduct from '../../hooks/useSellProduct';

const UpdateProductDetails = ({ productData }) => {
    const { _id, name, quantity, price, sellingDate, category, productCode, image } = productData;
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [sellProducts] = useSellProduct();

    useEffect(() => {
        const findProduct = sellProducts?.items?.filter(product => product?._id === _id);
        setSelectedProduct(findProduct)
    }, [])
    console.log(sellProducts);

    const handleApply = e => {

    }


    return (
        <div>
            {
                selectedProduct?.map(product => <form key={product?._id} onSubmit={handleApply}>
                    <div className='w-5/6 flex my-10 gap-8 mx-auto'>
                        <div className='w-1/2 form-control mb-6 border-b-2'>
                            <label>
                                <h2>Image</h2>
                            </label>
                            <input className='w-full p-2 rounded-lg' defaultValue={image} type="text" name="photo" placeholder='Photo URL' id="" />
                        </div>
                        <div className='w-1/2 form-control mb-6 border-b-2'>
                            <label>
                                <h2>Title</h2>
                            </label>
                            <input className='w-full p-2 rounded-lg' defaultValue={product?.productCode} type="text" placeholder='Job title' name="title" id="" />
                        </div>
                    </div>
                    <div className='w-5/6 flex my-10 gap-8 mx-auto'>
                        <div className='w-1/2 form-control mb-6 border-b-2'>
                            <label>
                                <h2>Name</h2>
                            </label>
                            <input className='w-full p-2 rounded-lg' type="text" name="name" defaultValue={product?.name} placeholder='Name' id="" />
                        </div>
                        <div className='w-1/2 '>
                            <label>
                                <h2>Category</h2>
                            </label>
                            <select className=' p-1 w-1/2' name="category" id="type">
                                <option defaultValue={category} value={category}>{category}</option>
                            </select>
                        </div>
                    </div>
                    <div className='w-5/6 flex my-10 gap-8 mx-auto '>
                        <div className='w-1/2 form-control mb-6 border-b-2'>
                            <label>
                                <h2>Salary</h2>
                            </label>
                            <input className='w-full p-2 rounded-lg' type="text" name="salary" placeholder='$' id="" />
                        </div>
                        <div className='w-full form-control mb-6 border-b-2'>
                            <label>
                                <h2>Email</h2>
                            </label>
                            <input className=' p-1' type="email" name="email" id="" />
                        </div>
                    </div>

                    <div className="form-control mb-6 border-b-2">
                        <input
                            type="text"
                            name="resume"
                            placeholder="Resume Link" className="input"
                        />
                    </div>
                    <div className='w-5/6 mx-auto'>
                        <input type="submit" className='btn btn-outline w-full' value="Apply" />
                    </div>
                </form>)
            }
        </div>
    );
};

export default UpdateProductDetails;