import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { DNA } from 'react-loader-spinner';
import useUser from '../hooks/useUser';

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    // const [users] = useUser();
    // const [admin, setAdmin] = useState();

    // useEffect(() => {
    //     const filteredUser = users?.filter(us => us?.email === user.email);
    //     setAdmin(filteredUser)
    // }, [])
    // console.log(admin[0]?.role)
    const admin = true;

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

    if (user && admin) {
        return children;
    }
    return <Navigate to="/"></Navigate>;
};

export default AdminRoute;