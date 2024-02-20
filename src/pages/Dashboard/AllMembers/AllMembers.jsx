import React from 'react';

const AllMembers = () => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Employee Code</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Make Admin</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>1</th>
                        <th>0001</th>
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
                        <td> <button className="btn btn-success btn-xs text-white">Make Admin</button> </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AllMembers;