import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import StatementCard from '../../../components/StatementCard/StatementCard';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Statement = () => {
    return (
        <div>
            {/* section */}
            <div className='w-6/12 mx-auto text-center my-10'>
                <SectionTitle
                    title="Statement Pieces"
                    descrition="Explore our collection and make a statement that reflects your individuality."
                />
                <div className="divider"></div>
            </div>
            <div>
                <div className='h-24 shadow-md shadow-gray-300 rounded-xl p-3 flex justify-between items-center w-1/2 mx-auto'>
                    <h1 className='text-xl font-bold'>Balance: </h1>
                    <p className='text-xl font-bold'> 000 BDT</p>
                </div>
                {/* tabs */}
                <div className='my-10 pr-5 overflow-hidden w-full h-full'>
                    <Tabs>
                        {/* tab lists */}
                        <TabList className="font-bold">
                            <Tab>Pending</Tab>
                            <Tab>Paid</Tab>
                        </TabList>
                        {/* tab panel */}
                        <div className='my-5 overflow-y-scroll -mr-16 pr-16 h-72 py-5'>
                            <TabPanel>
                                <div className='space-y-5'>
                                    <StatementCard code={402} orderedDate={"12/1/24"} deliveredDate={"20/1/24"} product={200} amount={40000}></StatementCard>
                                    <StatementCard code={402} orderedDate={"12/1/24"} deliveredDate={"20/1/24"} product={200} amount={40000}></StatementCard>
                                    <StatementCard code={402} orderedDate={"12/1/24"} deliveredDate={"20/1/24"} product={200} amount={40000}></StatementCard>
                                    <StatementCard code={402} orderedDate={"12/1/24"} deliveredDate={"20/1/24"} product={200} amount={40000}></StatementCard>
                                    <StatementCard code={402} orderedDate={"12/1/24"} deliveredDate={"20/1/24"} product={200} amount={40000}></StatementCard>
                                    <StatementCard code={402} orderedDate={"12/1/24"} deliveredDate={"20/1/24"} product={200} amount={40000}></StatementCard>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className=''>
                                    <StatementCard code={401} orderedDate={"09/1/24"} deliveredDate={"18/1/24"} product={200} amount={80000}></StatementCard>
                                </div>
                            </TabPanel>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default Statement;