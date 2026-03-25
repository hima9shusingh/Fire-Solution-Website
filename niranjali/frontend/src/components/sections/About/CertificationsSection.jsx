import React from 'react';
import { ShieldCheck, CheckCircle, FileCheck, Award } from 'lucide-react';

const CertificationItem = ({ icon: Icon, title }) => (
    <div className="flex items-center gap-4 p-6 bg-[var(--surface)] border border-[var(--border-subtle)] card-hover rounded-sm">
        <Icon className="h-8 w-8 text-primary shrink-0" strokeWidth={1.5} />
        <span className="text-light font-bold text-sm md:text-base">{title}</span>
    </div>
);

export const CertificationsSection = () => {
    return (
        <section className="py-24 bg-[var(--background)] border-t border-[var(--border-subtle)]">
            <div className="container-custom">
                <div className="max-w-3xl mb-12">
                    <h2 className="text-3xl font-heading font-bold text-light mb-4">Certifications & Regulatory Compliance</h2>
                    <p className="text-[var(--text-muted)] leading-relaxed">
                        In industrial environments, compliance is not optional—it is a critical safety and legal requirement. We ensure all our designs and installations meet stringent government and safety authority approvals.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <CertificationItem icon={ShieldCheck} title="Government Licensed Agency" />
                    <CertificationItem icon={CheckCircle} title="Fire Department Approved" />
                    <CertificationItem icon={FileCheck} title="NBC & IS Code Compliant" />
                    <CertificationItem icon={Award} title="ISO 9001:2015 Certified" />
                </div>
            </div>
        </section>
    );
};
