import React from 'react';
import { SEO } from '../components/layout/SEO';
import { AboutHero } from '../components/sections/About/AboutHero';
import { CompanyTimeline } from '../components/sections/About/CompanyTimeline';
import { FounderMessage } from '../components/sections/About/FounderMessage';
import { ComplianceStrip } from '../components/sections/About/ComplianceStrip';
import { EngineeringPhilosophy } from '../components/sections/About/EngineeringPhilosophy';
import { AboutCTA } from '../components/sections/About/AboutCTA';

const About = () => {
    return (
        <>
            <SEO
                title="About Us | Niranjali Firesolutions Limited"
                description="Niranjali Firesolutions Limited is an engineering-led industrial fire protection company delivering compliance-focused solutions for factories, warehouses, and corporate infrastructure across India."
            />
            <AboutHero />
            <ComplianceStrip />
            <CompanyTimeline />
            <FounderMessage />
            <EngineeringPhilosophy />
            <AboutCTA />
        </>
    );
};

export default About;
