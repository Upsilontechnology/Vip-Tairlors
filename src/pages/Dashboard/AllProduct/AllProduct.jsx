import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProductDetails from '../../../components/ProductDetails/ProductDetails';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const AllProduct = () => {
    return (
        <div className='supershop-container'>
            {/* section */}
            <div className='text-center'>
                <SectionTitle
                    title="Explore Our Product Catalog"
                    descrition="Welcome to our product catalog, your gateway to a world of possibilities!"
                />
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
                    <div className='my-5 overflow-y-scroll h-[85vh] border-2 border-blue-800 rounded-lg'>
                        <TabPanel>
                            <div className='flex flex-col p-3 gap-4'>
                                <ProductDetails name={"Premium Quality Suit"} price={400} stock={10000} code={401}></ProductDetails>
                                <ProductDetails name={"Quality Ladies Jacket"} price={1000} stock={9000} code={402} ></ProductDetails>
                                <ProductDetails name={"Quality Ladies Jacket"} price={1000} stock={9000} code={403}></ProductDetails>
                                <ProductDetails name={"Quality Ladies Jacket"} price={1000} stock={9000} code={404} ></ProductDetails>
                                <ProductDetails name={"Quality Ladies Jacket"} price={1000} stock={9000} code={405} ></ProductDetails>
                                <ProductDetails name={"Quality Ladies Jacket"} price={1000} stock={9000} code={406}></ProductDetails>
                                <ProductDetails name={"Quality Ladies Jacket"} price={1000} stock={9000} code={407} ></ProductDetails>
                                <ProductDetails name={"Quality Ladies Jacket"} price={1000} stock={9000} code={408}></ProductDetails>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='flex flex-col p-3 gap-4'>
                                <ProductDetails name={"Normal Jersey"} price={400} stock={10000}  code={401}></ProductDetails>
                                <ProductDetails name={"Sari"} price={1000} stock={9000} code={402}></ProductDetails>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='flex flex-col p-3 gap-4'>
                                <ProductDetails name={"Thai Gents Pent"} price={400} stock={10000}  code={401}></ProductDetails>
                                <ProductDetails name={"Sari"} price={1000} stock={9000} code={402}></ProductDetails>
                            </div>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default AllProduct;