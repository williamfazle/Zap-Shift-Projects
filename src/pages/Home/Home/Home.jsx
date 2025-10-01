import React from 'react';
import Banner from '../Banner/Banner';
import ServicesSection from '../services/ServicesSection';
import ClientLogosMarquee from '../ClientLogosMarquee/ClientLogosMarquee';
import Benefits from '../Benifits/Benefits';
import BeMerchant from '../BeMerchant/BeMerchant';




const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <ServicesSection></ServicesSection>
        <ClientLogosMarquee></ClientLogosMarquee>
        <Benefits></Benefits>
        <BeMerchant></BeMerchant>
           
        </div>
    );
};

export default Home;