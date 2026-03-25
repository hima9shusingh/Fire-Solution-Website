import React from 'react';
import { SEO } from '../components/layout/SEO';
import { IndustriesHero } from '../components/sections/IndustriesPage/IndustriesHero';
import { RiskClassificationTable } from '../components/sections/IndustriesPage/RiskClassificationTable';
import { IndustryDetailList } from '../components/sections/IndustriesPage/IndustryDetailList';
import { EngineeringResponse } from '../components/sections/IndustriesPage/EngineeringResponse';
import { IndustriesCoverage } from '../components/sections/IndustriesPage/IndustriesCoverage';
import { IndustriesCTA } from '../components/sections/IndustriesPage/IndustriesCTA';

const Industries = () => {
    return (
        <>
            <SEO
                title="Industries We Serve | Niranjali Firesolutions Limited"
                description="Sector-specific fire protection engineering. Risk analysis and compliance solutions for Manufacturing, Warehousing, Corporate, and Healthcare infrastructure."
            />
            <IndustriesHero />
            <RiskClassificationTable />
            <IndustryDetailList />
            <EngineeringResponse />
            <IndustriesCoverage />
            <IndustriesCTA />
        </>
    );
};

export default Industries;
