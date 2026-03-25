import React from 'react';
import { Mail, Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactOption = ({ icon: Icon, title, description, action, link, isEmergency }) => (
    <div className={`p-10 border border-gray-200 transition-all duration-300 ${isEmergency ? 'bg-primary/5 border-primary/20' : 'bg-white hover:border-gray-400'}`}>
        <Icon className={`h-8 w-8 mb-6 ${isEmergency ? 'text-primary' : 'text-gray-800'}`} strokeWidth={1.5} />
        <h3 className="text-xl font-bold text-blue-900 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm mb-8 leading-relaxed h-16 font-medium">{description}</p>

        {link ? (
            <Link to={link} className={`inline-block text-sm font-bold uppercase tracking-wider py-3 px-6 border-2 transition-colors ${isEmergency
                ? 'border-primary text-primary hover:bg-primary hover:text-white'
                : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                }`}>
                {action}
            </Link>
        ) : (
            <div className="text-lg font-bold text-gray-900 font-mono select-all">
                {action}
            </div>
        )}
    </div>
);

export const ContactOptions = () => {
    return (
        <section className="py-24 bg-[#FAFAFA] border-b border-gray-200">
            <div className="container-custom">
                <div className="grid lg:grid-cols-3 gap-8">
                    <ContactOption
                        icon={Calendar}
                        title="Site Inspection"
                        description="Request a physical audit of your facility for NFPA/NBC compliance and gap analysis."
                        action="Request Inspection"
                        link="/request-inspection"
                        isEmergency={false}
                    />
                    <ContactOption
                        icon={Mail}
                        title="Project Inquiry"
                        description="Submit tender documents or request a technical proposal for new installations."
                        action="himanshusingh.bit9995@gmail.com"
                        isEmergency={false}
                    />
                    <ContactOption
                        icon={Phone}
                        title="Emergency Support"
                        description="24/7 technical assistance for critical system failures or accidental discharge."
                        action="9939555664"
                        isEmergency={true}
                    />
                </div>
            </div>
        </section>
    );
};
