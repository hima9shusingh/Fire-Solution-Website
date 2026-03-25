import React from 'react';
import { SEO } from '../components/layout/SEO';
import { Hero } from '../components/sections/Home/Hero';
import { Certifications } from '../components/sections/Home/Certifications';
import { HomeServices } from '../components/sections/Home/HomeServices';
import { Industries } from '../components/sections/Home/Industries';
import { WhyUs } from '../components/sections/Home/WhyUs';
import { FinalCTA } from '../components/sections/Home/FinalCTA';
import { EmergencyBanner } from '../components/sections/Home/EmergencyBanner';

const Home = () => {
    return (
        <>
            <SEO
                title="Industrial Fire Protection Systems | Niranjali Firesolutions"
                description="Engineering-led industrial fire protection systems for factories, warehouses, and corporate infrastructure. Creating resilient safety ecosystems."
            />

            <main className="flex flex-col bg-dark">
                <Hero />
                <Certifications />
                <HomeServices />
                <Industries />
                <WhyUs />
                <EmergencyBanner />
                <FinalCTA />
            </main>
        </>
    );
};

export default Home;
