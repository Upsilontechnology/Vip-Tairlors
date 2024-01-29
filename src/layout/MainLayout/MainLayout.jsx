import React from 'react';
import Banner from '../../components/BannerTitle/BannerTitle';
import { Outlet } from 'react-router-dom';
import Footer from '../../shared/Footer/Footer';
import Navbar from '../../shared/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;