import React, { useEffect, useState } from 'react';
import useUser from '../../../hooks/useUser';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const AllMembers = () => {
    const [users, refetch] = useUser();
    
    const [confirmedUser, setConfirmedUser] = useState();
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        const filteredUser = users?.filter(us => us.role === 'employee' || us.role === 'admin');
        setConfirmedUser(filteredUser);
    }, [])
    
    // make admin
    const handleMakeAdmin = (user) => {
        axiosPublic.patch(`/user/admin/${user?._id}`)
            .then(res => {
                refetch();
                if (res?.data?.message === 'success') {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user?.name} is now an Admin`,
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
                refetch();
                if (res?.data?.message === 'success') {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user?.name} is now an user`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Employee Number</th>
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