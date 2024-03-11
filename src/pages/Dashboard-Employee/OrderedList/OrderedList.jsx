import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import OrderedProductDetails from '../../../components/OrderedProductDetails/OrderedProductDetails';
import useAuth from '../../../hooks/useAuth';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const OrderedList = () => {
    const [searchValue, setSearchValue] = useState("");
    const [status, setStatus] = useState("pending");
    const [axiosSecure] = useAxiosSecure();
    const axiosPublic = useAxiosPublic();

    const handleStatus = (set) => {
        setStatus(set);
        console.log(set);
    }

    const [productLength, setProductLength] = useState(0);
    // Pagination
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;
    const totalPages = Math.ceil(productLength / itemsPerPage);
    const { user } = useAuth();
    const email = user?.email;
    console.log(currentPage, totalPages, productLength);

    const { data: userInfo } = useQuery({
        queryKey: ['userInfo', email],
        staleTime: Infinity,
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/${email}`)
            return res.data;
        }
    })
    const role = userInfo?.role;

    const { data: orderBySearch = [], refetch, isLoading } = useQuery({
        queryKey: ["orderBySearch", email, role, searchValue, itemsPerPage, currentPage, status],
        cacheTime: 0,
        staleTime: Infinity,
        queryFn: async () => {
            const res = await axiosPublic.get(
                `/orderProduct/1/search?email=${email}&role=${role}&searchValue=${searchValue}&itemsPerPage=${itemsPerPage}&currentPage=${currentPage}&status=${status}`
            );
            return res.data;
        },
    });

    console.log(orderBySearch);
    useEffect(() => {
        if (orderBySearch && orderBySearch.totalCount) {
            setProductLength(orderBySearch.totalCount);
        } else {
            setProductLength(0);
        }
    }, [orderBySearch]);
    console.log(orderBySearch);

    return (
        <div className='supershop-container'>
            {/* section */}
            <div className='text-center'>
                <SectionTitle
                    title="Explore Our Product Catalogue"
                    descrition="Welcome to our product catalog, your gateway to a world of possibilities!"
                />
            </div>
            {/* search bar */}
            <div className="form-control w-1/2 mx-auto mb-5">
                <input onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="Search by Product Code" className="input input-bordered focus:outline-none" />
            </div>
            {/* tabs */}
            <div className='overflow-hidden w-full h-full'>
                <Tabs>
                    {/* tab lists */}
                    <TabList className="font-bold">
                        <Tab onClick ={()=> handleStatus("pending")}>Pending</Tab>
                        <Tab onClick ={()=> handleStatus("completed")}>Completed</Tab>
                    </TabList>
                    {/* tab panel */}
                    <div className='my-5 overflow-y-scroll h-[85vh] border-2 border-blue-800 rounded-lg'>
                        <TabPanel>
                        <div className='flex flex-col p-3 gap-4'>
                            <OrderedProductDetails products={orderBySearch} filteredUser={userInfo} currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} refetch={refetch}/>
                        </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='flex flex-col p-3 gap-4'>
                                <OrderedProductDetails products={orderBySearch} filteredUser={userInfo} currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} refetch={refetch}/>
                            </div>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default OrderedList;