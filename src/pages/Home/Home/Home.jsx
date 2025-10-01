import React from 'react';
import Banner from '../Banner/Banner';
import ServicesSection from '../services/ServicesSection';
import ClientLogosMarquee from '../ClientLogosMarquee/ClientLogosMarquee';




const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <ServicesSection></ServicesSection>
        <ClientLogosMarquee></ClientLogosMarquee>
           
        </div>
    );
};

export default Home;