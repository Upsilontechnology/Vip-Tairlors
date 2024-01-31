import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProductDetails from '../../../components/ProductDetails/ProductDetails';

const AllProduct = () => {
    return (
        <div>
            {/* section */}
            <div className='w-6/12 mx-auto text-center my-10'>
                <p className='text-[#3d48df] text-3xl font-bold font-mono'>~~ All Product List ~~</p>
                <div className="divider"></div>
            </div>
            {/* tabs */}
            <div className=''>
                <Tabs>
                    {/* tab lists */}
                    <TabList className="font-bold">
                        <Tab>All Product</Tab>
                        <Tab>Pending</Tab>
                        <Tab>Completed</Tab>
                    </TabList>
                    {/* tab panel */}
                    <TabPanel>
                        <div className='grid grid-cols-2 justify-center items-center gap-4'>
                            <ProductDetails name={"Premium Quality Suit"} price={400} stock={10000}></ProductDetails>
                            <ProductDetails name={"Quality Ladies Jacket"} price={1000} stock={9000}></ProductDetails>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-2 justify-center items-center gap-4'>
                            <ProductDetails name={"Normal Jersey"} price={400} stock={10000}></ProductDetails>
                            <ProductDetails name={"Sari"} price={1000} stock={9000}></ProductDetails>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-2 justify-center items-center gap-4'>
                            <ProductDetails name={"Thai Gents Pent"} price={400} stock={10000}></ProductDetails>
                            <ProductDetails name={"Sari"} price={1000} stock={9000}></ProductDetails>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default AllProduct;