import React, { useEffect, useRef, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProductDetails from '../../../components/ProductDetails/ProductDetails';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
// import useSellProduct from '../../../hooks/useSellProduct';
import useUser from '../../../hooks/useUser';
import useAuth from '../../../hooks/useAuth';
import useAllProduct from '../../../hooks/useAllProduct';
import Pagination from '../../../components/pagination/pagination';


const AllProduct = () => {
    const { sellProduct, currentPage, totalPages, setCurrentPage } = useAllProduct();
    const [filteredUser, setFilterdUser] = useState();
    const [users] = useUser();
    const { user } = useAuth();

    useEffect(() => {
        const findUser = users?.filter(person => person?.email === user?.email);
        setFilterdUser(findUser)
    }, [users, user])

    const filteredSells = Array.isArray(sellProduct?.data)
        ? sellProduct.data.filter(product => product?.email === user?.email)
        : [];

    console.log(filteredSells);


    return (
        <div className='my-5'>
            {/* section */}
            <div className='text-center'>
                <SectionTitle
                    title="Here is All Sold Products"
                    descrition=""
                />
            </div>
            {/* all product */}
            <div className=''>
                {
                    filteredUser && filteredUser.map(user => user?.role === 'employee' ?
                        <ProductDetails filteredSells={filteredSells} /> :
                        <ProductDetails filteredSells={sellProduct?.data} />)
                }
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};

export default AllProduct;


