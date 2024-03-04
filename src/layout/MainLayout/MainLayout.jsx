import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../shared/Footer/Footer';
import Navbar from '../../shared/Navbar/Navbar';
import useAuth from '../../hooks/useAuth';
import useUser from '../../hooks/useUser';

const MainLayout = () => {
    const [loggedUser, setLoggedUser] = useState([]);
    const [users] = useUser();
    const { user, logout } = useAuth();

    useEffect(() => {
        if (user && users) {
            const filteredUser = users.find(us => us.email === user.email);
            setLoggedUser(filteredUser ? [filteredUser] : []);
        } else {
            setLoggedUser([]);
        }
    }, [users, user]);

    return (
        <div>
            {loggedUser.map(user => (
                <div key={user?._id}>
                    {user?.role === "user" && <Navbar />}
                </div>
            ))}
            <Outlet />
            {loggedUser.map(user => (
                <div key={user?._id}>
                    {user?.role === "user" && <Footer />}
                </div>
            ))}
        </div>
    );
};

export default MainLayout;


