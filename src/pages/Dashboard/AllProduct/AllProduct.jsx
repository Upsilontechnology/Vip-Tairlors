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
                        <div className='flex justify-center items-center gap-4'>
                            <ProductDetails name={"Premium Quality Shirt"} price={400} stock={10000}></ProductDetails>
                            <ProductDetails name={"Quality Ladies Jacket"} price={1000} stock={9000}></ProductDetails>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <ProductDetails></ProductDetails>
                    </TabPanel>
                    <TabPanel>
                        <ProductDetails></ProductDetails>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default AllProduct;