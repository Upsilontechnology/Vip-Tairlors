import React, { useEffect, useState } from 'react';
// import useUser from '../../../hooks/useUser';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { FaRegTrashAlt } from "react-icons/fa";
import Pagination from '../../../components/pagination/pagination';
import useAuth from '../../../hooks/useAuth';

const AllMembers = () => {
    const [axiosSecure] = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    // Pagination
    const [productLength, setProductLength] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(productLength / itemsPerPage);
    const { user } = useAuth();
    const email = user?.email;


    const { data: users = [], refetch } = useQuery({
        queryKey: ["Users"],
        queryFn: async () => {
            const res = await axiosSecure.get('/user')
            return res.data;
        }
    })

    const { data: userInfo } = useQuery({
        queryKey: ['userInfo', email],
        staleTime: Infinity,
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/${email}`)
            return res.data;
        }
    })
    const role = userInfo?.role;

    const { data: userPagination, refetch: refetchByPagination } = useQuery({
        queryKey: ['userPagination', role, itemsPerPage, currentPage],
        queryFn: async () => {
            const res = await axiosPublic.get(
                `/user/1/state?role=${role}&itemsPerPage=${itemsPerPage}&currentPage=${currentPage}`
            )
            return res.data;
        }
    });

    useEffect(() => {
        if (userPagination && userPagination?.totalCount) {
            setProductLength(userPagination?.totalCount);
            refetchByPagination();
        } else {
            setProductLength(0);
            refetchByPagination();
        }
    }, [userPagination]);
    console.log(userPagination?.totalCount);



    // make admin
    const handleMakeAdmin = (user) => {
        axiosPublic.patch(`/user/admin/${user?._id}`)
            .then(res => {
                if (res?.data?.message === 'success') {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user?.name} is now an Admin`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                refetch();
            })
    }

    // make employee
    const handleMakeEmployee = (user) => {
        axiosPublic.patch(`/user/employee/${user?._id}`)
            .then(res => {
                refetch();
                if (res?.data?.message === 'success') {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user?.name} is now an employee`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    // make user
    const handleMakeUser = (user) => {
        axiosPublic.patch(`/user/${user?._id}`)
            .then(res => {
                if (res?.data?.message === 'success') {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user?.name} is now an user`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                refetch();
            })
    }

    const handleDelete = (user) => {
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
                axiosPublic.delete(`/user/${user?._id}`)
                    .then(res => {
                        console.log(res)
                        if (res.status === 200) {
                            refetchByPagination();
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
        <div className='bg-white h-auto flex justify-center items-center py-5'>
            <div className='w-11/12'>
                <div className='bg-gray-100 w-full mx-auto p-6 rounded-md'>
                    <h3 className="text-base font-semibold">User List</h3>
                    {/* user container */}
                    {
                        userPagination?.items?.map(user => <div key={user?._id} className='flex flex-row justify-between items-center my-10'>
                            {/* name and email */}
                            <div>
                                <h2 className="text-lg font-semibold">{user?.name || ''}</h2>
                                <h4 className="text-sm text-gray-600">{user?.email}</h4>
                            </div>
                            <div className='flex flex-row gap-3'>
                                {/* make admin */}
                                {user?.role === 'admin' ?
                                    <h1 className='bg-yellow-950 text-white font-bold px-12 py-3 rounded-lg hover:shadow-md hover:scale-105 duration-300 hover:duration-300'>Admin</h1> :
                                    <button onClick={() => handleMakeAdmin(user)} className='bg-white font-bold px-6 py-3 rounded-lg hover:shadow-md hover:scale-105 duration-300 hover:duration-300'>
                                        Make Admin
                                    </button>}
                                {/* make employee */}
                                {user?.role === 'employee' ?
                                    <h1 className='bg-yellow-950 text-white font-bold px-12 py-3 rounded-lg hover:shadow-md hover:scale-105 duration-300 hover:duration-300'>Employee</h1> :
                                    <button onClick={() => handleMakeEmployee(user)} className='bg-white font-bold px-6 py-3 rounded-lg hover:shadow-md hover:scale-105 duration-300 hover:duration-300'>
                                        Make Employee
                                    </button>}
                                {/* make user */}
                                {user?.role === 'user' ?
                                    <h1 className='bg-yellow-950 text-white font-bold px-[52px] py-3 rounded-lg hover:shadow-md hover:scale-105 duration-300 hover:duration-300'>User</h1> :
                                    <button onClick={() => handleMakeUser(user)} className='bg-white font-bold px-7 py-3 rounded-lg hover:shadow-md hover:scale-105 duration-300 hover:duration-300'>
                                        Make User
                                    </button>}

                                <button onClick={() => handleDelete(user)} className=''>
                                    <FaRegTrashAlt className='text-xl' />
                                </button>
                            </div>
                        </div>)
                    }
                </div>
                {/* pagination */}
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    );
};

export default AllMembers;