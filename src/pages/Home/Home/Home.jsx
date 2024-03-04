import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import QuoteBanner from '../QuoteBanner/QuoteBanner';
import Featured from '../FeaturedProducts/Featured';
import useAuth from '../../../hooks/useAuth';
import SignIn from '../Login/SignIn';
import useUser from '../../../hooks/useUser';
import AdminDashboard from '../../Dashboard/AdminDashboard/AdminDashboard';
import EmployeeDashboard from '../../Dashboard-Employee/EmployeeDashbaord/EmployeeDashbaord';
import NoticeBoard from '../NoticeBoard/NoticeBoard';

const Home = () => {
    const [loggedUser, setLoggedUser] = useState();
    const [users] = useUser();
    const { user } = useAuth();

    useEffect(() => {
        if (user && users) {
            const filteredUser = users.find(us => us.email === user.email);
            setLoggedUser(filteredUser);
        }
    }, [users, user]);


    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
    const toggleSideMenu = () => {
        setIsSideMenuOpen(!isSideMenuOpen);
    };
    const closeSideMenu = () => {
        setIsSideMenuOpen(false);
    };

    return (
        <div>
            {user ? (
                loggedUser ? (
                    <div key={loggedUser._id}>
                        {loggedUser.role === "employee" ? (
                            <EmployeeDashboard
                                isSideMenuOpen={isSideMenuOpen}
                                toggleSideMenu={toggleSideMenu}
                                closeSideMenu={closeSideMenu}
                            />
                        ) : loggedUser.role === "admin" ? (
                            <AdminDashboard
                                isSideMenuOpen={isSideMenuOpen}
                                toggleSideMenu={toggleSideMenu}
                                closeSideMenu={closeSideMenu}
                            />
                        ) : (
                            <>
                                <Banner />
                                <Featured />
                                <NoticeBoard />
                                <QuoteBanner />
                            </>
                        )}
                    </div>
                ) : <></>
            ) : (
                <SignIn />
            )}
        </div>
    );
};

export default Home;









