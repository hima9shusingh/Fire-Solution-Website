import React from 'react';
import { ServicePage } from '../../components/templates/ServicePage';

const FireHydrant = () => {
    const data = {
        hero: {
            title: 'Industrial Fire Hydrant Systems',
            subtitle: 'High-pressure water networks designed for rapid manual suppression and emergency brigade support.',
            image: 'https://images.unsplash.com/photo-1615818497672-c2e92c64d8a2?q=80&w=2070&auto=format&fit=crop'
        },
        overview: 'The fire hydrant system forms the backbone of active fire protection for any large industrial facility. It provides a reliable, high-volume water source for both internal fire fighting teams and external fire brigades.',
        problems: [
            {
                title: 'Pressure Drop',
                description: 'Poorly calculated hydraulic loops leading to insufficient pressure at remote hydrant points.'
            },
            {
                title: 'Corrosion & Blockage',
                description: 'Underground piping degrading over time, leading to leaks and reduced flow during emergencies.'
            },
            {
                title: 'Accessibility',
                description: 'Hydrant posts located in hard-to-reach areas or blocked by storage/machinery.'
            }
        ],
        solution: (
            <>
                <p className="mb-4">
                    Niranjali engineers robust <strong>Ring Main</strong> hydrant networks that ensure uniform pressure distribution across your entire campus. We utilize heavy-duty distinct pumping systems with dedicated jockey, main, and diesel standby pumps.
                </p>
                <p>
                    Our designs prioritize strategic placement of Yard Hydrants and Landing Valves to ensure 100% coverage of your facility perimeter and internal floors, strictly adhering to <strong>IS 3844</strong> and <strong>NBC Part 4</strong> standards.
                </p>
            </>
        ),
        process: [
            {
                step: '01',
                title: 'Hydraulic Calc',
                description: 'Computerized pressure loss calculations to size pipes and pumps accurately.'
            },
            {
                step: '02',
                title: 'Trenching & Laying',
                description: 'Excavation and laying of MS/HDPE pipes with proper wrapping and coating.'
            },
            {
                step: '03',
                title: 'Accessories Fitment',
                description: 'Installation of hydrant posts, hose boxes, and branch pipes.'
            },
            {
                step: '04',
                title: 'Hydro Testing',
                description: 'Testing the entire network at 1.5x working pressure to ensure leak-proof integrity.'
            }
        ],
        standards: ['IS 3844: Internal Hydrants', 'NBC Part 4', 'TAC Guidelines', 'NFPA 14/24'],
        faqs: [
            {
                question: 'What is the required pressure for a hydrant system?',
                answer: 'Typically, a minimum residual pressure of 3.5 kg/cm² is required at the hydraulically most remote hydrant point for effective firefighting.'
            },
            {
                question: 'Do you use MS or HDPE pipes?',
                answer: 'For underground networks, we verify soil conditions. We recommend heavy-grade MS pipes with anti-corrosive wrapping (Pypkote) or HDPE pipes for longevity in corrosive soils.'
            },
            {
                question: 'How often should hydrant systems be tested?',
                answer: 'We recommend weekly running of pumps (jockey/main) and quarterly wet drills to ensure valves and hoses are operational.'
            }
        ]
    };

    return <ServicePage data={data} />;
};

export default FireHydrant;
