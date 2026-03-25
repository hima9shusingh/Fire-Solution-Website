import React from 'react';
import { ServicePage } from '../../components/templates/ServicePage';

const FireAlarm = () => {
    const data = {
        hero: {
            title: 'Intelligent Fire Detection Systems',
            subtitle: 'Addressable and Conventional Alarm Systems for early warning and rapid evacuation.',
            image: 'https://images.unsplash.com/photo-1595842828695-88d4078ad8db?q=80&w=2074&auto=format&fit=crop'
        },
        overview: 'An effective fire alarm system is not just about mounting detectors; it is about intelligent zoning and reliable logic. We design systems that minimize false alarms while ensuring improved response times for genuine threats.',
        problems: [
            {
                title: 'False Alarms',
                description: 'Dust or steam triggering non-authentic alerts, leading to complacency and business disruption.'
            },
            {
                title: 'Complex Verification',
                description: 'Lack of precise location data in conventional systems delays emergency response.'
            },
            {
                title: 'Integration Gaps',
                description: 'Failure to trip AHUs, release access control doors, or activate PA systems during a fire.'
            }
        ],
        solution: (
            <>
                <p className="mb-4">
                    We deploy cutting-edge <strong>Addressable Analog Fire Alarm Systems</strong>. Unlike simple binary detectors, our analog sensors constantly communicate smoke/heat levels to the main panel, allowing for pre-alarm warnings and drift compensation.
                </p>
                <p>
                    For critical environments like server rooms, we utilize <strong>Aspirating Smoke Detection (VESDA)</strong> for ultra-early warning. All systems are fully integrated with your Building Management System (BMS) for unified control.
                </p>
            </>
        ),
        process: [
            {
                step: '01',
                title: 'Risk Zoning',
                description: 'Dividing the facility into logical detection zones based on compartmentation.'
            },
            {
                step: '02',
                title: 'Cable Loop design',
                description: 'Running redundant Class-A armored loops to ensure system integrity even with a cable cut.'
            },
            {
                step: '03',
                title: 'Device Addressing',
                description: 'Programming each detector with a unique ID and location label (e.g., "L2 Server Room").'
            },
            {
                step: '04',
                title: 'Auto-Cause & Effect',
                description: 'Programming logic: If Zone 1 Fire -> Trip AC -> Open Doors -> Start Hooters.'
            }
        ],
        standards: ['IS 2189: Installation of Fire Alarms', 'NFPA 72: National Fire Alarm Code', 'EN 54'],
        faqs: [
            {
                question: 'What is the difference between Conventional and Addressable systems?',
                answer: 'Conventional systems identify a "zone" (e.g., First Floor). Addressable systems identify the exact device (e.g., Detector 14, Conf Room, 1st Floor), allowing for pinpoint accuracy.'
            },
            {
                question: 'Can you integrate PA systems?',
                answer: 'Yes, we specialize in Voice Evacuation integration, allowing automated or manual voice messages to guide occupants safely.'
            },
            {
                question: 'Do detectors need cleaning?',
                answer: 'Absolutely. We recommend cleaning optical chambers every 6 months to prevent dust accumulation, which is the primary cause of false alarms.'
            }
        ]
    };

    return <ServicePage data={data} />;
};

export default FireAlarm;
