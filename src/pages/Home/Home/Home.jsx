import React from 'react';
import Banner from '../Banner/Banner';
import Faq from '../Faq/Faq';
import QuoteBanner from '../QuoteBanner/QuoteBanner';
import AllProduct from '../../Dashboard/AllProduct/AllProduct';


const Home = () => {
    return (
        <div>
            <Category />
            <QuoteBanner />
            <Banner></Banner>
            <Faq /> 
        </div>
    );
};

export default Home;








