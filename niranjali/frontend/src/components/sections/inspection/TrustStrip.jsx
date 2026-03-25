import React from 'react';

const TrustItem = ({ title }) => (
    <div className="text-center px-4 py-2">
        <span className="text-xs font-bold text-gray-900 uppercase tracking-widest block">{title}</span>
    </div>
);

export const TrustStrip = () => {
    return (
        <section className="bg-white border-y border-gray-200 py-8">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                    <TrustItem title="Government Licensed Agency" />
                    <TrustItem title="Engineering-Led Assessment" />
                    <TrustItem title="ISO 9001:2015 Certified" />
                    <TrustItem title="Multi-State Deployment" />
                </div>
            </div>
        </section>
    );
};
