import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import OrderedProductDetails from '../../../components/OrderedProductDetails/OrderedProductDetails';
import useOrderedProduct from '../../../hooks/useOrderedProduct';
import useAuth from '../../../hooks/useAuth';

const OrderedList = () => {
    const [orderProducts, refetch] = useOrderedProduct();
    const { user } = useAuth();

    // filtered for login user
    const allProducts = orderProducts?.filter(product => product?.status === 'pending');
    const filteredOrders = allProducts?.filter(product => product?.email === user?.email);

    // filtered for login user
    const completeProducts = orderProducts?.filter(product => product.status === 'completed');
    const filteredCompleteOrders = completeProducts?.filter(product => product?.email === user?.email)


    return (
        <div className='supershop-container'>
            {/* section */}
            <div className='text-center'>
                <SectionTitle
                    title="Explore Our Product Catalogue"
                    descrition="Welcome to our product catalog, your gateway to a world of possibilities!"
                />
            </div>
            {/* tabs */}
            <div className='overflow-hidden w-full h-full'>
                <Tabs>
                    {/* tab lists */}
                    <TabList className="font-bold">
                        <Tab>Pending</Tab>
                        <Tab>Completed</Tab>
                    </TabList>
                    {/* tab panel */}
                    <div className='my-5 overflow-y-scroll h-[85vh] border-2 border-blue-800 rounded-lg'>
                        <TabPanel>
                            <div className='flex flex-col p-3 gap-4'>
                                <OrderedProductDetails products={filteredOrders} />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='flex flex-col p-3 gap-4'>
                                <OrderedProductDetails products={filteredCompleteOrders} />
                            </div>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default OrderedList;