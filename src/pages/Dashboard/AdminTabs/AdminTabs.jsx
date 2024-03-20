import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import ProductStats from '../../../components/ProductStats/ProductStats';
import { IoBagOutline } from 'react-icons/io5';
import { BsCart3 } from 'react-icons/bs';

const AdminTabs = ({ allOrderProducts }) => {
    const axiosPublic = useAxiosPublic();
    const [selectedData, setSelectedData] = useState();
    const [defaultTab, setDefaultTab] = useState(0);
    const [filter, setFilter] = useState(null);
    const [orderProducts, setOrderProducts] = useState(allOrderProducts);

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
        setFilter(category);
        const categoryName = category.toLowerCase();
        // console.log(categoryName)
        await axiosPublic.get(`/sellProduct/${categoryName}`)
            .then(res => {
                setSelectedData(res.data);
            })
    }

    const handleFilter = async (category, filterName) => {
        const categoryName = category.toLowerCase();
        const res = await axiosPublic.get(`/sellProduct/1/filter?categoryName=${categoryName}&filterName=${filterName}`)
        setSelectedData(res.data);
    }

    const handleOrderFilter = async (filterName) => {
        const res = await axiosPublic.get(`/orderProduct/1/filter?filterName=${filterName}`);
        setOrderProducts(res.data);
        // console.log(res.data);
    }

    const pendingOrders = orderProducts?.filter(product => product.status === 'pending');
    const completedOrders = orderProducts?.filter(product => product.status === 'completed');
    const completeOrderAmount = completedOrders?.reduce((total, product) => total + parseFloat(product?.price), 0)
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
                                <TabList className="font-bold pb-3 flex flex-row  justify-between items-center">
                                    <div>
                                        {
                                            categories?.map((category, index) =>
                                                <Tab
                                                    onClick={() => handleCategory(category?.category, index)}
                                                    key={category._id}>{category?.category}</Tab>)
                                        }
                                    </div>
                                    <div>
                                        <div className="dropdown dropdown-hover mr-5">
                                            <div tabIndex={0} role="button" className="btn m-1">Sort By</div>
                                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-28">
                                                <li>
                                                    <button onClick={() => handleFilter(filter, 'all')} className="">All</button>
                                                </li>
                                                <li>
                                                    <button onClick={() => handleFilter(filter, 'weekly')} className="">Weekly</button>
                                                </li>
                                                <li>
                                                    <button onClick={() => handleFilter(filter, 'monthly')} className="">Monthly</button>
                                                </li>
                                                <li>
                                                    <button onClick={() => handleFilter(filter, 'yearly')} className="">Yearly</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </TabList>
                                {/* sub tab panel */}
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
                        {/* order product part */}
                        <div>
                            <div className='flex justify-end my-5'>
                                <div className="dropdown dropdown-hover mr-5">
                                    <div tabIndex={0} role="button" className="btn m-1">Sort By</div>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-28 font-bold">
                                        <li>
                                            <button onClick={() => handleOrderFilter('all')} className="">All</button>
                                        </li>
                                        <li>
                                            <button onClick={() => handleOrderFilter('weekly')} className="">Weekly</button>
                                        </li>
                                        <li>
                                            <button onClick={() => handleOrderFilter('monthly')} className="">Monthly</button>
                                        </li>
                                        <li>
                                            <button onClick={() => handleOrderFilter('yearly')} className="">Yearly</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* card container */}
                            <div className='flex justify-center mb-5'>
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
                                                <h2 className='text-[1.3rem] font-semibold '>{orderProducts?.length}</h2>
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
                        </div>

                    </TabPanel>
                </div>
            </Tabs>
        </div>
    );
};

export default AdminTabs;