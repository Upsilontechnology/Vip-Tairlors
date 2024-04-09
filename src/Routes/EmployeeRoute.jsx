import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { DNA } from 'react-loader-spinner';
import useUser from '../hooks/useUser';

const EmployeeRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const employee = true;
    // const [users] = useUser();
    // const [employee, setEmployee] = useState();

    // useEffect(() => {
    //     const filteredUser = users?.filter(us => us?.email === user.email);
    //     setEmployee(filteredUser)
    // }, [])

    if (loading) {
        return <DNA
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
        />
    }

    if (user && employee) {
        return children;
    }

    return <Navigate to="/"></Navigate>;
};

export default EmployeeRoute;