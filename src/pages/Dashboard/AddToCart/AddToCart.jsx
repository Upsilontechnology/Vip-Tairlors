
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import Swal from 'sweetalert2';
import useCarts from '../../../hooks/useCarts';
import { useState } from 'react';

const AddToCart = () => {
    const axiosPublic = useAxiosPublic();
    const [carts, refetch] = useCarts();
    const [items, setItems] = useState(null);

    const totalAmount = carts?.reduce((total, product) => (total + (product?.price)), 0);
    console.log(carts)

    const handlePay = async (product) => {
        setItems(product)
        const data = product?.map(data => ({ 'quantity': data?.quantity, 'code': data?.productCode }));

        // let title = items?.map(product => product?.title);

        if (carts?.length === 0) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Please add data first",
                showConfirmButton: false,
                timer: 2000
            });
        } else {
            // send data to the server
            await axiosPublic.post('/soldItems', { items: carts })
                .then(res => {
                    console.log(res.data, "stored data");
                    if (res.data.message === 'success') {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Payment successfull",
                            showConfirmButton: false,
                            timer: 1000
                        });
                    }
                })

            // delete all the product
            await axiosPublic.delete(`/carts/items?title=${"cart"}`)
                .then(res => {
                    console.log(res.data, "data deleted");
                    refetch();
                })

            // update the product quantity
            await axiosPublic.patch('/sellProduct/cartUpdate', { items: data })
                .then(res => {
                    console.log(res.data);
                })
        }



    }

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
                axiosPublic.delete(`/carts/${product?._id}`)
                    .then(res => {
                        console.log(res)
                        refetch();
                        if (res.status === 200) {
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
            <div className='flex justify-between items-center  bg-gray-300 -ml-8 p-2 mb-5'>
                <h2 className="font-medium text-2xl">Total Items: <span>{carts?.length}</span> </h2>
                <h2 className="font-medium text-2xl">Total Price: TK. {totalAmount}  </h2>
                <button onClick={() => handlePay(carts)} className="btn ">Confirm Payment</button>
            </div>
            {/* cart item details */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            carts?.map((product, ind) => <tr key={product?._id}>
                                <th>{ind + 1}</th>
                                <th>{product?.productName}</th>
                                <td>
                                    {product?.category}
                                </td>
                                <td>
                                    {product?.quantity}
                                </td>
                                <td>
                                    {
                                        product?.price
                                    }
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
        </div>
    );
};

export default AddToCart;