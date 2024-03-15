import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const AdminTabs = () => {
    const axiosPublic = useAxiosPublic();
    const { data : categories = [], refetch } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
           const res = await axiosPublic.get('/category')
            return res.data;
        }
    })
    console.log(categories);


    return (
        <div className='overflow-hidden w-full h-full' >
            <Tabs>
                {/* tab lists */}
                <TabList className="font-bold">
                    <Tab>Sell Product</Tab>
                    <Tab>Order Product</Tab>
                </TabList>
                {/* tab panel */}
                <div className='my-5 overflow-y-scroll h-[85vh] border-2 border-blue-800 rounded-lg'>
                    <TabPanel>
                        <div className='flex flex-col p-3 gap-4'>
                            <Tabs>
                                {/* tab lists */}
                                <TabList className="font-bold">
                                    {
                                        categories?.map(category => <Tab>{category?.category}</Tab>)
                                    }
                                    {/* <Tab onClick={() => handleStatus("pending")}>Pending</Tab>
                                    <Tab onClick={() => handleStatus("completed")}>Completed</Tab> */}
                                </TabList>
                                {/* tab panel */}
                                <div className='my-5 overflow-y-scroll h-[85vh] border-2 border-blue-800 rounded-lg'>
                                    <TabPanel>
                                        <div className='flex flex-col p-3 gap-4'>
                                            <h1>Ki obosta</h1>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className='flex flex-col p-3 gap-4'>
                                            <h1>Amr obosta balo na</h1>
                                        </div>
                                    </TabPanel>
                                </div>
                            </Tabs>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='flex flex-col p-3 gap-4'>
                            <h1>Amr obosta balo na</h1>
                        </div>
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    );
};

export default AdminTabs;