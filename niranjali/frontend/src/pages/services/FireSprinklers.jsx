import React from 'react';
import { ServicePage } from '../../components/templates/ServicePage';

const fireSprinklerData = {
    hero: {
        title: 'Precision Fire Sprinkler Systems',
        subtitle: 'Automated suppression technology engineered for rapid response in high-hazard industrial environments.',
        image: 'https://images.unsplash.com/photo-1542750202-995cc21d5806?q=80&w=2070&auto=format&fit=crop'
    },
    overview: 'Fire sprinkler systems are the first line of defense in active fire protection. Niranjali Firesolutions designs, installs, and maintains hydraulic-calculated sprinkler networks that automatically detect and suppress fires before they escalate. Our systems are tailored for factories, warehouses, and commercial complexes, ensuring 24/7 protection with minimal water damage.',
    problems: [
        {
            title: 'Delayed Response',
            description: 'Manual intervention takes too long. In industrial fires, every second counts before thermal runaway occurs.'
        },
        {
            title: 'Regulatory Non-Compliance',
            description: 'Many facilities operate with outdated systems that fail to meet current NBC 2016 and NFPA standards.'
        },
        {
            title: 'Water Damage',
            description: 'Poorly designed systems can cause excessive water damage during false alarms or minor incidents.'
        }
    ],
    solution: `
    <p>Our engineering approach begins with a comprehensive hazard classification analysis. We determine the precise water density requirements based on your facility's storage height, commodity class, and layout.</p>
    <p>We utilize advanced hydraulic calculation software to design efficient piping networks that deliver optimal pressure and flow rates. Our systems integrate seamlessly with fire alarm panels and monitoring stations for immediate alert notification.</p>
    <p>From Wet Pipe systems for standard environments to Pre-action systems for data centers, we engineer the right solution for your specific risk profile.</p>
  `,
    process: [
        {
            step: '01',
            title: 'Hazard Analysis',
            description: 'Site survey and classification of fire risks according to NBC/NFPA standards.'
        },
        {
            step: '02',
            title: 'Hydraulic Design',
            description: 'CAD mapping and hydraulic calculations to size pipes and pumps accurately.'
        },
        {
            step: '03',
            title: 'Installation',
            description: 'Precision fabrication and installation by certified technicians with minimal disruption.'
        },
        {
            step: '04',
            title: 'Testing & Handover',
            description: 'Hydrostatic testing and system commissioning with full documentation.'
        }
    ],
    standards: [
        'NBC 2016 Part 4',
        'IS 15105',
        'NFPA 13',
        'FM Global Guidelines'
    ],
    faqs: [
        {
            question: 'Do sprinklers go off all at once?',
            answer: 'No. This is a common myth. Sprinklers are individually heat-activated. Only the sprinkler heads directly above the fire will activate, minimizing water damage to unaffected areas.'
        },
        {
            question: 'How often do systems need maintenance?',
            answer: 'Visual inspections should be conducted weekly/monthly, with quarterly operational testing and comprehensive annual maintenance as mandated by fire safety codes.'
        },
        {
            question: 'Can you retrofit sprinklers in existing buildings?',
            answer: 'Yes. We specialize in retrofitting active facilities using non-intrusive installation techniques to ensure business continuity during the project.'
        }
    ]
};

const FireSprinklers = () => {
    return <ServicePage data={fireSprinklerData} />;
};

export default FireSprinklers;
