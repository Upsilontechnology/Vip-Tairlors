import React from 'react';
import Banner from '../Banner/Banner';
import Faq from '../Faq/Faq';
import QuoteBanner from '../QuoteBanner/QuoteBanner';
import Partners from '../Partners/Partners';
import Featured from '../FeaturedProducts/Featured';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Partners />
            <Featured></Featured>
            <QuoteBanner />
            <Faq />
        </div>
    );
};

export default Home;








