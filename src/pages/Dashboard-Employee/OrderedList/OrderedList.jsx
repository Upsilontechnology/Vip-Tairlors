import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import OrderedProductDetails from '../../../components/OrderedProductDetails/OrderedProductDetails';
import useOrderedProduct from '../../../hooks/useOrderedProduct';
import useAuth from '../../../hooks/useAuth';
import useUser from '../../../hooks/useUser';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const OrderedList = () => {
    const [filterBySearch, setFilterBySearch] = useState();
    const [searchValue, setSearchValue] = useState("");
    const axiosPublic = useAxiosPublic();
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const [ , refetch] = useOrderedProduct();
    const email = user?.email;

    const { data: userInfo } = useQuery({
        queryKey: ['userInfo'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/${email}`)
            return res.data;
        }
    })
    const role = userInfo?.role;

    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await axiosPublic.get("/orderProduct/1/search", {
                    params: {
                        email,
                        role,
                        searchValue: searchValue,
                    },
                });
                console.log(res.data)
                setFilterBySearch(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchProducts();
    }, [axiosPublic, searchValue, email])


    // filtered for login user
    const allProducts = filterBySearch?.filter(product => product?.status === 'pending');

    // filtered for login user
    const completeProducts = filterBySearch?.filter(product => product.status === 'completed');
    // console.log(allProducts)

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
                        <Tab>Pending</Tab>
                        <Tab>Completed</Tab>
                    </TabList>
                    {/* tab panel */}
                    <div className='my-5 overflow-y-scroll h-[85vh] border-2 border-blue-800 rounded-lg'>
                        <TabPanel>
                            <div className='flex flex-col p-3 gap-4'>
                                <OrderedProductDetails products={allProducts} filteredUser={userInfo}/>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='flex flex-col p-3 gap-4'>
                                <OrderedProductDetails products={completeProducts} filteredUser={userInfo}/>
                            </div>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default OrderedList;