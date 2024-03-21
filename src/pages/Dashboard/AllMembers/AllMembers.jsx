import React, { useEffect, useState } from 'react';
// import useUser from '../../../hooks/useUser';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery, useQueryClient } from "@tanstack/react-query";

const AllMembers = () => {
    // const [users, refetch] = useUser();
    const [axiosSecure] = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ["Users"],
        queryFn: async () => {
            const res = await axiosSecure.get('/user')
            return res.data;
        }
    })
    
    const [confirmedUser, setConfirmedUser] = useState(users);
    const axiosPublic = useAxiosPublic();
    
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

    useEffect(() => {
        const filteredUser = users?.filter(us => us.role === 'employee' || us.role === 'admin');
        setConfirmedUser(filteredUser);
        refetch();
    }, [users])



    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Make Admin</th>
                        <th>Make User</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        confirmedUser?.map((user, ind) => <tr key={user?._id}>
                            <th>{ind + 1}</th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div>
                                        <div className="font-bold">{user?.name}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {user?.email}
                            </td>
                            <td>
                                {user?.role === 'admin' ? <h1 className='font-bold'>Admin</h1> : <button onClick={() => handleMakeAdmin(user)} className="btn btn-success btn-xs text-white">Make Admin</button>}
                            </td>

                            <td><button onClick={() => handleMakeUser(user)} className="btn btn-success btn-xs text-white">Make User</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllMembers;