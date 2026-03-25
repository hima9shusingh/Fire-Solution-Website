import React from 'react';
import { SEO } from '../components/layout/SEO';
import { InspectionHero } from '../components/sections/inspection/InspectionHero';
import { ProcessExplanation } from '../components/sections/inspection/ProcessExplanation';
import { QualificationPanel } from '../components/sections/inspection/QualificationPanel';
import { InspectionForm } from '../components/sections/inspection/InspectionForm';
import { TrustStrip } from '../components/sections/inspection/TrustStrip';
import { InspectionCTA } from '../components/sections/inspection/InspectionCTA';

const RequestInspection = () => {
    return (
        <>
            <SEO
                title="Request Site Inspection | Niranjali Firesolutions Limited"
                description="Schedule a technical fire safety audit for your industrial facility. Our engineers conduct risk assessment, compliance gap analysis, and system design evaluation."
            />
            <InspectionHero />
            <ProcessExplanation />

            <section className="bg-white pb-24">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Info Panel: Left Side */}
                        <div className="lg:col-span-4 hidden lg:block">
                            <QualificationPanel />
                        </div>

                        {/* Form: Right Side */}
                        <div className="lg:col-span-8">
                            <InspectionForm />
                        </div>
                    </div>
                </div>
            </section>

            <TrustStrip />
        </>
    );
};

export default RequestInspection;
