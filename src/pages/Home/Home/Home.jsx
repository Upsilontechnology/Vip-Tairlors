import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Faq from '../Faq/Faq';
import AllProduct from '../../Dashboard/AllProduct/AllProduct';
const Home = () => {
    return (
        <div>
            <Category />
            <AllProduct></AllProduct>
            <Faq /> 
            
        </div>
    );
};

export default Home;