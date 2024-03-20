import React, { useEffect, useRef, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import ProductStats from '../../../components/ProductStats/ProductStats';
import { IoBagOutline } from 'react-icons/io5';
import { BsCart3 } from 'react-icons/bs';
import { ReactToPrint } from 'react-to-print';

const AdminTabs = ({ allOrderProducts, pendingOrders, completedOrders, completeOrderAmount }) => {
    const axiosPublic = useAxiosPublic();
    const [selectedData, setSelectedData] = useState();
    const [defaultTab, setDefaultTab] = useState(0);
    const componentRef = useRef(null);

    const { data: categories = [] } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await axiosPublic.get('/category')
            return res.data;
        }
    })

    useEffect(() => {
        if (categories.length > 0) {
            handleCategory(categories[defaultTab].category, defaultTab);
        }
    }, []);

    const handleCategory = async (category, index) => {
        setDefaultTab(index)
        const categoryName = category.toLowerCase();
        // console.log(categoryName)
        await axiosPublic.get(`/sellProduct/${categoryName}`)
            .then(res => {
                setSelectedData(res.data);
            })
    }

    const totalSells = selectedData?.reduce((total, product) => total + parseInt(product?.price), 0)

    return (
        <div className='overflow-hidden w-full h-full' >
            <Tabs>
                {/* tab lists */}
                <TabList className="font-bold">
                    <Tab>Sell Product</Tab>
                    <Tab>Order Product</Tab>
                </TabList>
                {/* tab panel */}
                <div className='my-5 border border-blue-800 rounded-lg'>
                    {/* sell product */}
                    <TabPanel>
                        <div className='flex flex-col p-3 gap-4'>
                            <Tabs defaultIndex={defaultTab}>
                                {/* tab lists */}
                                <TabList className="font-bold pb-3">
                                    {
                                        categories?.map((category, index) =>
                                            <Tab
                                                onClick={() => handleCategory(category?.category, index)}
                                                key={category._id}>{category?.category}</Tab>)
                                    }
                                </TabList>
                                {/* tab panel */}
                                <div className='my-5 h-auto '>
                                    {
                                        categories?.map(category => (
                                            <TabPanel key={category?._id}>
                                                <div className=''>
                                                    {selectedData && (
                                                        <div>
                                                            <ProductStats totalSells={totalSells} totalProduct={selectedData?.length} category={category?.category} />
                                                        </div>
                                                    )}
                                                </div>
                                            </TabPanel>
                                        ))
                                    }
                                </div>
                            </Tabs>
                        </div>
                    </TabPanel>
                    {/* order product */}
                    <TabPanel>
                        {/* Print button */}
                        <div className="flex justify-end mb-3 mt-2 mr-4">
                            <ReactToPrint
                                trigger={() => (
                                    <button className="bg-[#1D2A3B] hover:bg-[#131c29] text-white font-bold py-1.5 px-4 rounded">
                                        Print
                                    </button>
                                )}
                                content={() => componentRef.current}
                                documentTitle='Product Summary'
                                pageStyle="print"
                            />
                        </div>
                        {/* card container */}
                        <div ref={componentRef} className='flex justify-center mb-5'>
                            <div className='flex flex-col gap-5 justify-center p-4 lg:p-12 mt-5 bg-white lg:w-5/6'>
                                <div className='flex justify-between items-center'>
                                    <h3 className="text-2xl font-semibold">Total Summary</h3>
                                </div>
                                {/* cards */}
                                <div className='grid grid-cols-2 gap-4 lg:gap-10'>
                                    <div className='max-w-[25rem] border border-gray-400 shadow-md rounded-md flex gap-5 items-center p-2 lg:p-4 '>
                                        <div className='p-3 bg-[#9da6c0] rounded-lg '>
                                            <div className='bg-[#0a1d56] p-2 rounded-lg text-white text-xl '>
                                                <IoBagOutline className='font-semibold' />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className='text-sm font-medium '>Total Sales</h3>
                                            <h2 className='text-xl font-semibold '>{completeOrderAmount} BDT</h2>
                                        </div>
                                    </div>

                                    <div className='max-w-[25rem] pr-[3rem] border border-gray-400 shadow-md rounded-md flex gap-5 items-center p-4 '>
                                        <div className='p-3 bg-[#9da6c0] rounded-lg '>
                                            <div className='bg-[#0a1d56] p-2 rounded-lg text-white text-xl '>
                                                <BsCart3 className='font-semibold' />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className='text-sm font-medium '>Total Orders</h3>
                                            <h2 className='text-[1.3rem] font-semibold '>{allOrderProducts?.length}</h2>
                                        </div>
                                    </div>

                                    <div className='max-w-[25rem] pr-[3rem] border border-gray-400 shadow-md rounded-md flex gap-5 items-center p-4 '>
                                        <div className='p-3 bg-[#9da6c0] rounded-lg '>
                                            <div className='bg-[#0a1d56] p-2 rounded-lg text-white text-xl '>
                                                <BsCart3 className='font-semibold' />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className='text-sm font-medium '>Total Delivered</h3>
                                            <h2 className='text-[1.3rem] font-semibold '>{completedOrders?.length}</h2>
                                        </div>
                                    </div>

                                    <div className='max-w-[25rem] pr-[3rem] border border-gray-400 shadow-md rounded-md flex gap-5 items-center p-4 '>
                                        <div className='p-3 bg-[#9da6c0] rounded-lg '>
                                            <div className='bg-[#0a1d56] p-2 rounded-lg text-white text-xl '>
                                                <BsCart3 className='font-semibold' />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className='text-sm font-medium '>Total Pending</h3>
                                            <h2 className='text-[1.3rem] font-semibold '>{pendingOrders?.length}</h2>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    );
};

export default AdminTabs;