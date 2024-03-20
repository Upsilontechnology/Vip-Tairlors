import "./ProductDetails.css";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { MdOutlineDeleteOutline, MdOutlineEdit } from 'react-icons/md';
import { useEffect, useState, useRef } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Pagination from "../pagination/pagination";
import { useForm } from "react-hook-form";
import useUser from "../../hooks/useUser";

const ProductDetails = () => {
    const queryClient = useQueryClient();
    const [searchValue, setSearchValue] = useState("");
    const [axiosSecure] = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const [openModal, setOpenModal] = useState(false);
    const [openSell, setSellModal] = useState(false);
    const [sell, setSell] = useState(null);
    const [id, setId] = useState(null);

    const [productLength, setProductLength] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 20;
    const { user } = useAuth();
    const email = user?.email;
    const { register, handleSubmit, reset } = useForm();

    const [loggedUser, setLoggedUser] = useState();
    const [users] = useUser();

    useEffect(() => {
        if (user && users) {
            const filteredUser = users.find(us => us.email === user.email);
            setLoggedUser(filteredUser);
        }
    }, [users, user]);

    const handleEdit = async (id) => {
        setId(id);
        try {
            const response = await axiosPublic.get(`/sellProduct/${id}`);
            setSell(response?.data);
            setOpenModal(true);
        } catch (error) {
            console.error("Error fetching product details:", error);
        }
    }

    const editSaller = async (id) => {
        setId(id);
        try {
            const response = await axiosPublic.get(`/sellProduct/${id}`);
            setSell(response?.data);
            setSellModal(true);
        } catch (error) {
            console.error("Error fetching product details:", error);
        }
    }

    const handleSell = async event => {
        event.preventDefault();

        const form = event.target;
        const quantity1 = parseInt(form.quantity.value, 10);
        let currentStock = sell?.quantity || 0;

        currentStock = Math.max(currentStock, 0);

        if (quantity1 >= 0 && currentStock >= 0) {
            const quantity = currentStock - quantity1;
            const sellUpdate = { quantity };
            if (quantity >= 0) {
                fetch(`http://localhost:5000/sellProduct/${id}`, {
                    method: "PUT",
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(sellUpdate)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        queryClient.invalidateQueries("filterBySearch");
                        setSellModal(false);
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Sell Product",
                            showConfirmButton: false,
                            timer: 1000
                        });
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
            }
            else {
                console.log("Invalid quantity or current stock not available.");
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "current stock not available",
                    showConfirmButton: false,
                    timer: 1000
                });
            }
        }
    }

    const handleUpdate = async event => {
        event.preventDefault();

        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const name = form.name.value;
        const sellingDate = form.date.value;
        const category = form.category.value;
        const productCode = form.code.value;

        const updatedToy = { price, quantity, name, sellingDate, category, productCode };

        fetch(`http://localhost:5000/sellProduct/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                queryClient.invalidateQueries("filterBySearch");
                setOpenModal(false);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Sell Product",
                    showConfirmButton: false,
                    timer: 1000
                });
            })
    }

    const { data: userInfo } = useQuery({
        queryKey: ['userInfo', email],
        staleTime: Infinity,
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/${email}`)
            return res.data;
        }
    })
    const role = userInfo?.role;

    const { data: filterBySearch = [], isLoading } = useQuery({
        queryKey: ["filterBySearch", searchValue, itemsPerPage, currentPage],
        cacheTime: 0,
        staleTime: Infinity,
        queryFn: async () => {
            const res = await axiosPublic.get(
                `/sellProduct/search?searchValue=${searchValue}&itemsPerPage=${itemsPerPage}&currentPage=${currentPage}`
            );
            return res.data;
        },
    });

    useEffect(() => {
        if (filterBySearch && filterBySearch.totalCount) {
            setProductLength(filterBySearch.totalCount);
        } else {
            setProductLength(0);
        }
    }, [filterBySearch]);

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
                            // const remaining = filterBySearch?.filter(products => products?._id !== product?._id)
                            // setFilterBySearch(remaining)
                            refetch();
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

    const modalRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setOpenModal(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);


    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setSellModal(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    return (
        <div>
            <div className='flex flex-col gap-4'>
                <div className="form-control w-1/2 mx-auto mb-5">
                    <input onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="Search by Product Code" className="input input-bordered focus:outline-none" />
                </div>
                <div key={loggedUser?._id}>
                    {loggedUser?.role === "employee" ? (
                        <div className="overflow-x-auto">
                            <table className="table">
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
                                    {filterBySearch?.items?.map((product, ind) => (
                                        <tr key={product?._id}>
                                            <td>{ind + 1}</td>
                                            <td>{product?.productCode}</td>
                                            <td>{product?.name}</td>
                                            <td>BDT {product?.price}</td>
                                            <td>{product?.quantity}</td>
                                            <td>{new Date(product?.sellingDate).toLocaleDateString()}</td>
                                            <td><img className="w-10 h-10" src={product?.image} alt="" /></td>
                                            <td className="flex gap-2">
                                                <button onClick={() => editSaller(product?._id)}>
                                                    <spam className="md:px-2 md:py-2 md:mr-4 rounded-lg bg-gray-300 hover:bg-gray-400">Sell Product</spam>
                                                </button>
                                                <button onClick={() => handleDelete(product)} className="btn btn-ghost btn-sm bg-gray-300">
                                                    <MdOutlineDeleteOutline className="text-xl" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : loggedUser?.role === "admin" ? (
                        <div className="overflow-x-auto">
                            <table className="table">
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
                                    {filterBySearch?.items?.map((product, ind) => (
                                        <tr key={product?._id}>
                                            <td>{ind + 1}</td>
                                            <td>{product?.productCode}</td>
                                            <td>{product?.name}</td>
                                            <td>BDT {product?.price}</td>
                                            <td>{product?.quantity}</td>
                                            <td>{new Date(product?.sellingDate).toLocaleDateString()}</td>
                                            <td><img className="w-10 h-10" src={product?.image} alt="" /></td>
                                            <td className="flex gap-2">
                                                <button onClick={() => handleEdit(product?._id)} className="btn btn-ghost btn-sm bg-gray-300">
                                                    <MdOutlineEdit className="text-xl" />
                                                </button>
                                                <button onClick={() => handleDelete(product)} className="btn btn-ghost btn-sm bg-gray-300">
                                                    <MdOutlineDeleteOutline className="text-xl" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <>
                        </>
                    )}
                </div>
            </div >
            <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(productLength / itemsPerPage)}
                setCurrentPage={setCurrentPage}
            />

            {
                openModal && (
                    <div className="fixed inset-0 z-10 flex items-center ml-32 justify-center bg-black bg-opacity-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                        {/* Modal content goes here */}
                        <div ref={modalRef} className="bg-white rounded-lg shadow-xl dark:bg-gray-900 ">
                            <div className="p-6">
                                <form className='' onSubmit={handleUpdate}>
                                    <div className='flex gap-6'>
                                        {/* Product Name */}
                                        <div className="form-control w-full my-1">
                                            <label className="label">
                                                <span className="label-text">Product Name*</span>
                                            </label>
                                            <input
                                                name="name"
                                                defaultValue={sell?.name}
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
                                                name="quantity"
                                                defaultValue={sell?.quantity}
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
                                                name="price"
                                                defaultValue={sell?.price}
                                                type="number"
                                                placeholder="Price"
                                                className="input input-bordered focus:outline-none w-full" />
                                        </div>
                                        {/* Date */}
                                        <div className="form-control w-full my-1">
                                            <label className="label">
                                                <span className="label-text">Date(mm/dd/yyyy)*</span>
                                            </label>
                                            <input
                                                name="date"
                                                defaultValue={sell?.sellingDate}
                                                placeholder="Date"
                                                className="input input-bordered focus:outline-none w-full" />
                                        </div>
                                    </div>
                                    <div className='flex gap-6'>
                                        {/* category */}
                                        <div className="form-control w-full my-1">
                                            <label className="label">
                                                <span className="label-text">Category*</span>
                                            </label>
                                            <select
                                                name="category"
                                                defaultValue={sell?.category}
                                                className="select select-bordered focus:outline-none w-full">
                                                <option disabled value="default">Select a category</option>
                                                <option value="punjabi">Punjabi</option>
                                                <option value="suit">Suit</option>
                                                <option value="cosmetics">Cosmetics</option>
                                                <option value="shelai">Shelai</option>
                                                <option value="ready-Made">Ready-Made</option>
                                            </select>
                                        </div>
                                        {/* product Code */}
                                        <div className="form-control w-full my-1">
                                            <label className="label">
                                                <span className="label-text">Product Code*</span>
                                            </label>
                                            <input
                                                name="code"
                                                defaultValue={sell?.productCode}
                                                type="number"
                                                placeholder="Product Code"
                                                className="input input-bordered focus:outline-none w-full" />
                                        </div>
                                    </div>
                                    <button className="focus:outline-none focus:ring-2 w-full mt-5 focus:ring-blue-800 focus:border-transparent bg-[#1D2A3B] hover:bg-[#131c29] text-white font-semibold py-2.5 rounded-md">Sell Product</button>
                                </form>
                                {/* <button onClick={() => setOpenModal(false)} className="absolute top-0 right-0 p-2 mt-1 mr-1 btn btn-ghost btn-sm bg-gray-300">
                                <MdClose className="text-xl" />
                            </button> */}
                            </div>
                        </div>
                    </div>
                )
            }



            {
                openSell && (
                    <div className="fixed inset-0 z-10 flex items-center ml-32 justify-center bg-black bg-opacity-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                        {/* Modal content goes here */}
                        <div ref={modalRef} className="bg-white rounded-lg shadow-xl dark:bg-gray-900 ">
                            <div className="p-6">
                                <form className='' onSubmit={handleSell}>
                                    <div className='flex gap-6'>
                                        {/* Product Name */}
                                        <div className="form-control w-full my-1">
                                            <label className="label">
                                                <span className="label-text">Product Name*</span>
                                            </label>
                                            <input
                                                name="name"
                                                defaultValue={sell?.name}
                                                type="text"
                                                placeholder="Product Name"
                                                className="input input-bordered w-full focus:outline-none"
                                                disabled />
                                        </div>
                                        {/* Quantity */}
                                        <div className="form-control w-full my-1">
                                            <label className="label">
                                                <span className="label-text">Quantity*</span>
                                            </label>
                                            <input
                                                name="quantity"
                                                // defaultValue={sell?.quantity}
                                                type="number"
                                                placeholder={sell?.quantity}
                                                className="input input-bordered border-2 border-slate-500 w-full focus:outline-none" />
                                        </div>
                                    </div>
                                    <div className='flex gap-6'>
                                        {/* price */}
                                        <div className="form-control w-full my-1">
                                            <label className="label">
                                                <span className="label-text">Price*</span>
                                            </label>
                                            <input
                                                name="price"
                                                defaultValue={sell?.price}
                                                type="number"
                                                placeholder="Price"
                                                className="input input-bordered focus:outline-none w-full"
                                                disabled />
                                        </div>
                                        {/* Date */}
                                        <div className="form-control w-full my-1">
                                            <label className="label">
                                                <span className="label-text">Date(mm/dd/yyyy)*</span>
                                            </label>
                                            <input
                                                name="date"
                                                defaultValue={sell?.sellingDate}
                                                placeholder="Date"
                                                className="input input-bordered focus:outline-none w-full"
                                                disabled />
                                        </div>
                                    </div>
                                    <div className='flex gap-6'>
                                        {/* category */}
                                        <div className="form-control w-full my-1">
                                            <label className="label">
                                                <span className="label-text">Category*</span>
                                            </label>
                                            <input
                                                name="date"
                                                defaultValue={sell?.category}
                                                placeholder="Date"
                                                className="input input-bordered focus:outline-none w-full"
                                                disabled />
                                        </div>
                                        {/* product Code */}
                                        <div className="form-control w-full my-1">
                                            <label className="label">
                                                <span className="label-text">Product Code*</span>
                                            </label>
                                            <input
                                                name="code"
                                                defaultValue={sell?.productCode}
                                                type="number"
                                                placeholder="Product Code"
                                                className="input input-bordered focus:outline-none w-full"
                                                disabled />
                                        </div>
                                    </div>
                                    <button className="focus:outline-none focus:ring-2 w-full mt-5 focus:ring-blue-800 focus:border-transparent bg-[#1D2A3B] hover:bg-[#131c29] text-white font-semibold py-2.5 rounded-md">Sell Product</button>
                                </form>
                                {/* <button onClick={() => setOpenModal(false)} className="absolute top-0 right-0 p-2 mt-1 mr-1 btn btn-ghost btn-sm bg-gray-300">
                                <MdClose className="text-xl" />
                            </button> */}
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    );
};

export default ProductDetails;


