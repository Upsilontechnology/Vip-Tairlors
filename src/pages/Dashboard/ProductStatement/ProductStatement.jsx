import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import ProductStatementCard from '../../../components/ProductStatementCard/ProductStatementCard';

const ProductStatement = () => {
    return (
        <div>
            <div className='w-6/12 mx-auto text-center my-7'>
                <SectionTitle
                    title="Statement Pieces"
                    descrition="Explore our collection and make a statement that reflects your individuality."
                />
                <div className="divider"></div>
            </div>
            <div>
                <div className=' py-5 shadow-md shadow-gray-300 bg-[#0a1d56] text-white rounded-xl p-3 flex justify-between items-center w-1/2 mx-auto'>
                    <h1 className='text-xl font-bold'>Balance: </h1>
                    <p className='text-xl font-bold'> 000 BDT</p>
                </div>
                <div className='mt-[3rem] overflow-hidden w-full h-full'>
                    <div className='w-full overflow-y-scroll h-[28rem] '>
                        <div className=' flex flex-col'>
                            <div className=''>
                                <ProductStatementCard></ProductStatementCard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductStatement;