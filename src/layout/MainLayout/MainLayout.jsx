import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from '../../shared/Footer/Footer';
import Navbar from '../../shared/Navbar/Navbar';
import useAuth from '../../hooks/useAuth';
import useUser from '../../hooks/useUser';
import SignIn from '../../pages/Home/Login/SignIn';

const MainLayout = () => {
    const [loggedUser, setLoggedUser] = useState(null); // Initialize with null or an empty object
    const [users] = useUser();
    const { user, loading, setLoading } = useAuth();

    useEffect(() => {
        if (user && users) {
            const filteredUser = users.find(us => us.email === user.email);
            setLoggedUser(filteredUser || null); // Set to null if no user found
        } else {
            setLoggedUser(null);
        }
    }, [users, user]);

    // if (loading) {
    //     return <div className='flex justify-center items-center h-screen'>
    //         <div className="w-10 h-10 animate-[spin_2s_linear_infinite] rounded-full border-8 border-dotted border-sky-600"></div>
    //     </div>
    // }

    // Ensure loggedUser is resolved
    // if (!loggedUser) {
    //     return <SignIn></SignIn>; // Add loading state or spinner if necessary
    // }

    // if (!loggedUser) {
    //     return setLoading(false); // Add loading state or spinner if necessary
    // }

    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;











