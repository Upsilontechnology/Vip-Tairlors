import React from 'react';
import Banner from '../../components/BannerTitle/BannerTitle';
import { Outlet } from 'react-router-dom';
import Footer from '../../shared/Footer/Footer';
import Navbar from '../../shared/Navbar/Navbar';
import useAuth from '../../hooks/useAuth';

const MainLayout = () => {
    const { user } = useAuth();
    return (
        <div>
            {
                user ? <>
                    <Navbar />
                </> :
                    <>
                    </>
            }
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;