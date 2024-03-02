import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../shared/Footer/Footer';
import Navbar from '../../shared/Navbar/Navbar';
import useAuth from '../../hooks/useAuth';
import useUser from '../../hooks/useUser';

const MainLayout = () => {
    const [loggedUser, setLoggedUser] = useState();
    const [users] = useUser();
    const { user } = useAuth();

    useEffect(() => {
        // Ensure user is defined before filtering users
        if (user) {
            const filteredUser = users?.filter(us => us.email === user.email);
            setLoggedUser(filteredUser);
        }
    }, [users, user]);

    return (
        <div>
            {/* Ensure loggedUser is an array before mapping */}
            {loggedUser && loggedUser.map(user => (
                <div key={user?._id}>
                    {user?.role === "user" ? <Navbar /> : <></>}
                </div>
            ))}
            {/* <Navbar></Navbar> */}
            <Outlet />
            {/* Ensure loggedUser is an array before mapping */}
            {loggedUser && loggedUser.map(user => (
                <div key={user?._id}>
                    {user?.role === "user" ? <Footer /> : <></>}
                </div>
            ))}
        </div>
    );
};

export default MainLayout;
