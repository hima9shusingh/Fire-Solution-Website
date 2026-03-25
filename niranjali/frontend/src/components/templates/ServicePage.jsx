import React from 'react';
import { SEO } from '../layout/SEO';
import { ServiceHero } from '../sections/Service/ServiceHero';
import { ServiceOverview } from '../sections/Service/ServiceOverview';
import { ServiceProblems } from '../sections/Service/ServiceProblems';
import { ServiceSolution } from '../sections/Service/ServiceSolution';
import { ServiceProcess } from '../sections/Service/ServiceProcess';
import { ServiceStandards } from '../sections/Service/ServiceStandards';
import { ServiceFAQ } from '../sections/Service/ServiceFAQ';
import { ServiceCTA } from '../sections/Service/ServiceCTA';

export const ServicePage = ({ data }) => {
    const { hero, overview, problems, solution, process, standards, faqs } = data;

    return (
        <>
            <SEO
                title={hero.title}
                description={hero.subtitle}
            />
            <ServiceHero title={hero.title} subtitle={hero.subtitle} image={hero.image} />
            <ServiceOverview overview={overview} />
            <ServiceProblems problems={problems} />
            <ServiceSolution solution={solution} />
            <ServiceProcess process={process} />
            <ServiceStandards standards={standards} />
            <ServiceFAQ faqs={faqs} />
            <ServiceCTA />
        </>
    );
};
