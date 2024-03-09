import React, { useEffect, useRef, useState } from 'react';
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
                <div>
                    {
                        filteredUser?.map(user => user?.role === 'employee' ?
                            <ProductDetails key={user?._id} filteredSells={filteredSells} /> :
                            <ProductDetails key={user?._id} filteredSells={sellProducts} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllProduct;