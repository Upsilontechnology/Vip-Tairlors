import React from 'react';
import Banner from '../Banner/Banner';
import Faq from '../Faq/Faq';
import QuoteBanner from '../QuoteBanner/QuoteBanner';
import Partners from '../Partners/Partners';
import Featured from '../FeaturedProducts/Featured';
import useAuth from '../../../hooks/useAuth';
import SignIn from '../Login/SignIn';


const Home = () => {
    const { user } = useAuth();
    return (
        <div>
            {
                user ? <>
                    <Banner />
                    <Partners />
                    <Featured></Featured>
                    <QuoteBanner />
                    <Faq />
                </> : <>
                <SignIn />
                </>
            }
        </div>
    );
};

export default Home;








