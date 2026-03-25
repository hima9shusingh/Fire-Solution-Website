import React from 'react';
import { SEO } from '../components/layout/SEO';
import { ServicesHero } from '../components/sections/ServicesPage/ServicesHero';
import { ServicesIndex } from '../components/sections/ServicesPage/ServicesIndex';
import { ServiceProcess } from '../components/sections/ServicesPage/ServiceProcess';
import { EngineeringCapabilities } from '../components/sections/ServicesPage/EngineeringCapabilities';
import { ServicesCTA } from '../components/sections/ServicesPage/ServicesCTA';

const Services = () => {
    return (
        <>
            <SEO
                title="Fire Protection Services | Niranjali Firesolutions Limited"
                description="Technical fire protection services including sprinkler systems, hydrant networks, and alarm integration. Engineered for NBC compliance and industrial safety."
            />
            <ServicesHero />
            <ServicesIndex />
            <ServiceProcess />
            <EngineeringCapabilities />
            <ServicesCTA />
        </>
    );
};

export default Services;
