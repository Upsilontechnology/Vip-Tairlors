import React from 'react';

const MembersRequest = () => {
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
                    {/* row 1 */}
                    <tr>
                        <th>1</th>
                        <td>
                            <div className="flex items-center gap-3">
                                <div>
                                    <div className="font-bold">Hart Hagerty</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            hart@gmail.com
                        </td>
                        <td> <button className="btn btn-success btn-xs text-white">Approve</button> </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MembersRequest;