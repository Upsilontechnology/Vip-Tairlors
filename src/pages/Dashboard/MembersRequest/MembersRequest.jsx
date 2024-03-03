import React from 'react';
import useUser from '../../../hooks/useUser';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const MembersRequest = () => {
    const [users, refetch] = useUser();
    const axiosPublic = useAxiosPublic();

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


    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Add as Employee</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map(user => <tr key={user?._id}>
                            <th>1</th>
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
                                {user?.role === "user" ?
                                    <button onClick={() => handleMakeEmployee(user)} className="btn btn-success btn-xs text-white">Approve</button> :
                                    " "}
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MembersRequest;