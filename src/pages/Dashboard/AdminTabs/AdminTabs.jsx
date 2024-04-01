import React, { useEffect, useRef, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import ProductStats from "../../../components/ProductStats/ProductStats";
import {
  IoBagOutline,
  IoBarChartOutline,
  IoPrintOutline,
} from "react-icons/io5";
import { BsCart3, BsFilterLeft } from "react-icons/bs";
import { ReactToPrint } from "react-to-print";
import { FaSortAmountDown } from "react-icons/fa";
import DashBoardTitle from "../../../components/dashboardTitle/DashBoardTitle";

const AdminTabs = ({ allOrderProducts }) => {
  const axiosPublic = useAxiosPublic();
  const [selectedData, setSelectedData] = useState();
  const [defaultTab, setDefaultTab] = useState(0);
  const componentRef = useRef(null);
  const [filter, setFilter] = useState(null);
  const [orderProducts, setOrderProducts] = useState(allOrderProducts);
  const [commentRef, setCommentRef] = useState();

  const { data: categories = [] } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await axiosPublic.get("/category");
      return res.data;
    },
  });

  useEffect(() => {
    if (categories.length > 0) {
      handleCategory(categories[defaultTab]?.category, defaultTab);
    }
  }, [categories]);

  const { data: soldItemsInfo = [] } = useQuery({
    queryKey: ["soldItemsInfo"],
    queryFn: async () => {
      const res = await axiosPublic.get("/soldItems");
      return res.data;
    },
  });

  const handleCategory = async (category, index) => {
    setDefaultTab(index);
    setFilter(category);
    const categoryName = category.toLowerCase();
    console.log(categoryName);

    await axiosPublic.get(`/soldItems/${categoryName}`).then((res) => {
      setSelectedData(res.data);
    });
  };

    const pendingOrders = orderProducts?.filter(product => product.status === 'pending');
    const completedOrders = orderProducts?.filter(product => product.status === 'completed');
    const completeOrderAmount = completedOrders?.reduce((total, product) => total + (parseFloat(product?.price) * parseFloat(product?.quantity)), 0)

    const totalSells = soldItemsInfo?.reduce((total, product) => total + parseInt(product?.price), 0)
    const totalSellsByCategory = selectedData?.reduce((total, product) => total + parseInt(product?.price), 0)
    const totalqunatity = selectedData?.reduce((total, product) => total + parseInt(product?.quantity), 0)

    console.log(totalSellsByCategory)

    return (
        <div className='overflow-hidden w-full h-full'>
            <Tabs>
                {/* tab lists */}
                <div className='flex lg:flex-row flex-col w-full gap-5'>
                    <div className='md:w-1/3 bg-gray-100 h-24 flex flex-col px-16 py-4 lg:px-4 lg:py-4 space-y-3 rounded-md mx-auto md:mx-0'>
                        <h4 className="text-sm font-semibold"><IoBarChartOutline className='inline mr-1' /> Total Sales</h4>
                        <h1 className="text-xl md:text-2xl font-bold">{totalSells} BDT</h1>
                    </div>
                    {/* tab lists */}
                    <TabList className="font-bold md:w-2/3 w-5/6 mx-auto py-4 bg-gray-100 flex flex-row justify-center items-center gap-2 md:gap-4 lg:gap-10 rounded-md">
                        <Tab className="border-none bg-white md:py-5 py-2 md:px-14 px-4 rounded-md cursor-pointer" selectedClassName='selected-tab bg-yellow-950 text-white md:py-5 py-2 md:px-14 px-4'>Sell Product</Tab>
                        <Tab className="border-none bg-white md:py-5 py-2 md:px-14 px-4 rounded-md cursor-pointer" selectedClassName='selected-tab bg-yellow-950 text-white md:py-5 py-2 md:px-14 px-4'>Order Product</Tab>
                    </TabList>
                </div>
                {/* tab panel */}
                <div className='my-5 bg-gray-100 rounded-lg'>
                    {/* sell product */}
                    <TabPanel>
                        <div className='flex flex-col p-1 md:p-3 gap-4'>
                            <div >
                                {/* tab lists */}
                                <div className="font-bold pb-3 flex flex-row  justify-between items-center">
                                    <div>
                                        <select className='bg-white p-2 rounded-sm' onChange={(e) => handleCategory(e.target.value)} value={filter}>
                                            {categories?.map((category, index) => (
                                                <option value={category?.category} key={category._id}>
                                                    {category?.category}
                                                </option>
                                            ))}
                                        </select>

                                    </div>
                                    <div className='flex flex-row items-center'>
                                        <div className="dropdown dropdown-hover mr-5">
                                            <div tabIndex={0} role="button" className=" m-1">
                                                <FaSortAmountDown className='text-2xl' />
                                            </div>
                                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-28">
                                                <li>
                                                    <button onClick={() => handleFilter(filter, 'all')} className="">All</button>
                                                </li>
                                                <li>
                                                    <button onClick={() => handleFilter(filter, 'daily')} className="">Today</button>
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
                                        {/* print */}
                                        <div className="flex justify-end mr-4">
                                            <ReactToPrint
                                                trigger={() => (
                                                    <button className="font-bold">
                                                        <IoPrintOutline className='text-2xl' />
                                                    </button>
                                                )}
                                                content={() => commentRef.current}
                                                documentTitle='Product Summary'
                                                pageStyle="print"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* sub tab panel */}
                                <div className='my-5 h-auto '>
                                    <div className=''>
                                        {selectedData && (
                                            <div>
                                                <ProductStats totalSells={totalSellsByCategory} totalProduct={totalqunatity} setCommentRef={setCommentRef} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    {/* order product */}
                    <TabPanel>
                        {/* Print and filter button */}
                        <div className="flex items-center justify-between mb-3 mt-2 md:px-5 px-2">
                            <h1 className="text-xl font-semibold">Order Product</h1>
                            <div className='flex justify-end my-5'>
                                <div className="dropdown dropdown-hover mr-2 md:mr-5">
                                    <div tabIndex={0} role="button" className="">
                                        <FaSortAmountDown className='text-2xl' />
                                    </div>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-28 font-bold">
                                        <li>
                                            <button onClick={() => handleOrderFilter('all')} className="">All</button>
                                        </li>
                                        <li>
                                            <button onClick={() => handleOrderFilter('daily')} className="">Today</button>
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
                                <div>
                                    <ReactToPrint
                                        trigger={() => (
                                            <button className="font-bold rounded">
                                                <IoPrintOutline className='text-2xl' />
                                            </button>
                                        )}
                                        content={() => componentRef.current}
                                        documentTitle='Product Summary'
                                        pageStyle="print"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* card container */}
                        <div ref={componentRef}>
                            {/* card container */}
                            <div className='flex justify-center mb-5'>
                                <div className='flex flex-col gap-5 justify-center lg:w-4/6 w-5/6 pb-8'>
                                    {/* cards */}
                                    <div className='grid grid-cols-1 md:grid-cols-2 px-1 md:px-0 gap-2 md:gap-4'>
                                        <div className='max-w-[20rem] shadow-md rounded-md flex flex-col gap-2 md:p-5 px-4 py-5 bg-white'>
                                            <div className='rounded-lg flex items-center gap-1'>
                                                <div className='rounded-lg text-black text-base '>
                                                    <IoBagOutline className='font-semibold' />
                                                </div>
                                                <h3 className='text-base font-semibold '>Total Sales</h3>
                                            </div>
                                            <div>
                                                <h2 className='text-xl md:text-2xl font-bold '>{completeOrderAmount} BDT</h2>
                                            </div>
                                        </div>
                                        <div className='max-w-[20rem] shadow-md rounded-md flex flex-col gap-2  md:p-5 px-4 py-5 bg-white'>
                                            <div className='rounded-lg flex items-center gap-1'>
                                                <div className='rounded-lg text-black text-base '>
                                                    <BsCart3 className='font-semibold' />
                                                </div>
                                                <h3 className='text-sm md:text-base font-semibold '>Total Orders</h3>
                                            </div>
                                            <div>
                                                <h2 className='text-xl md:text-2xl font-bold '>{orderProducts?.length}</h2>
                                            </div>
                                        </div>
                                        <div className='max-w-[20rem] shadow-md rounded-md flex flex-col gap-2  md:p-5 px-4 py-5 bg-white'>
                                            <div className='rounded-lg flex items-center gap-1'>
                                                <div className='rounded-lg text-black text-base '>
                                                    <IoBagOutline className='font-semibold' />
                                                </div>
                                                <h3 className='text-sm md:text-base font-semibold '>Total Delivered</h3>
                                            </div>
                                            <div>
                                                <h2 className='text-xl md:text-2xl font-bold '>{completedOrders?.length}</h2>
                                            </div>
                                        </div>
                                        <div className='max-w-[20rem] shadow-md rounded-md flex flex-col gap-2  md:p-5 px-4 py-5 bg-white'>
                                            <div className='rounded-lg flex items-center gap-1'>
                                                <div className='rounded-lg text-black text-base '>
                                                    <IoBagOutline className='font-semibold' />
                                                </div>
                                                <h3 className='text-sm md:text-base font-semibold '>Total Pending</h3>
                                            </div>
                                            <div>
                                                <h2 className='text-xl md:text-2xl font-bold '>{pendingOrders?.length}</h2>
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
