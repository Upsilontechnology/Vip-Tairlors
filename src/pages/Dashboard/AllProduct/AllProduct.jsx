import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProductDetails from '../../../components/ProductDetails/ProductDetails';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useSellProduct from '../../../hooks/useSellProduct';
import useUser from '../../../hooks/useUser';
import useAuth from '../../../hooks/useAuth';

const AllProduct = () => {
    const [sellProducts, refetch] = useSellProduct();
    const [filteredUser, setFilterdUser] = useState();
    const [users] = useUser();
    const { user } = useAuth();

    useEffect(() => {
        const findUser = users?.filter(person => person?.email === user?.email);
        setFilterdUser(findUser)
    }, [])

    const filteredSells = sellProducts?.filter(product => product?.email === user?.email);

    return (
        <div className='supershop-container'>
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
                    filteredUser?.map(user => user?.role === 'employee' ?
                        <ProductDetails filteredSells={filteredSells} /> :
                        <ProductDetails filteredSells={sellProducts} />)
                }
                {/* <ProductDetails /> */}
            </div>
        </div>
    );
};

export default AllProduct;