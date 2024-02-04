import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProductDetails from '../../../components/ProductDetails/ProductDetails';

const AllProduct = () => {
    return (
        <div className='supershop-container'>
            {/* section */}
            <div className='w-6/12 mx-auto text-center my-10'>
                <p className='text-[#3d48df] text-3xl font-bold font-mono'>~~ All Product List ~~</p>
                <div className="divider"></div>
            </div>
            {/* tabs */}
            <div className='overflow-hidden w-full h-full'>
                <Tabs>
                    {/* tab lists */}
                    <TabList className="font-bold">
                        <Tab>All Product</Tab>
                        <Tab>Pending</Tab>
                        <Tab>Completed</Tab>
                    </TabList>
                    {/* tab panel */}
                    <div className='my-5 overflow-y-scroll -mr-16 pr-16 h-96 py-5 bg-gray-200'>
                        <TabPanel>
                            <div className='grid grid-cols-2 justify-center items-center gap-4'>
                                <ProductDetails name={"Premium Quality Suit"} price={400} stock={10000} status={"Pending"}></ProductDetails>
                                <ProductDetails name={"Quality Ladies Jacket"} price={1000} stock={9000} status={"Paid"}></ProductDetails>
                                <ProductDetails name={"Quality Ladies Jacket"} price={1000} stock={9000} status={"Pending"}></ProductDetails>
                                <ProductDetails name={"Quality Ladies Jacket"} price={1000} stock={9000} status={"Paid"}></ProductDetails>
                                <ProductDetails name={"Quality Ladies Jacket"} price={1000} stock={9000} status={"Paid"}></ProductDetails>
                                <ProductDetails name={"Quality Ladies Jacket"} price={1000} stock={9000} status={"Pending"}></ProductDetails>
                                <ProductDetails name={"Quality Ladies Jacket"} price={1000} stock={9000} status={"Paid"}></ProductDetails>
                                <ProductDetails name={"Quality Ladies Jacket"} price={1000} stock={9000} status={"Pending"}></ProductDetails>
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
                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default AllProduct;