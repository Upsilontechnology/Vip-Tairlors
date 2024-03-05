import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProductDetails from '../../../components/ProductDetails/ProductDetails';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useSellProduct from '../../../hooks/useSellProduct';

const AllProduct = () => {
    const [sellProducts, refetch] = useSellProduct();
    

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
                <ProductDetails />
            </div>
        </div>
    );
};

export default AllProduct;