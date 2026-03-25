import React from 'react';
import { MapPin, Phone, Mail, Clock, Globe, Shield } from 'lucide-react';

export const ContactInfo = () => {
    return (
        <div className="lg:col-span-4 space-y-12">
            <div>
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6 border-b border-gray-200 pb-2">Headquarters</h3>
                <div className="flex items-start gap-4 mb-4">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <p className="text-gray-600 leading-relaxed text-sm">
                        404, 4th Floor, Rajeev Ranjan complex<br />
                        Ashiyana Digha Road, Patna<br />
                        Bihar - 800014, India
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <Globe className="h-5 w-5 text-primary shrink-0" />
                    <p className="text-gray-600 text-sm">www.niranjali-firesolutions.com</p>
                </div>
            </div>

            <div>
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6 border-b border-gray-200 pb-2">Direct Lines</h3>
                <div className="space-y-4">
                    <div className="flex items-start gap-4 group">
                        <div className="p-2 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors rounded-sm">
                            <Phone className="h-4 w-4" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase font-semibold">Sales & Projects</p>
                            <p className="text-gray-900 font-medium">9939555664</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 group">
                        <div className="p-2 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors rounded-sm">
                            <Shield className="h-4 w-4" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase font-semibold">Emergency Support (24/7)</p>
                            <p className="text-gray-900 font-medium">9939555664</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 group">
                        <div className="p-2 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors rounded-sm">
                            <Mail className="h-4 w-4" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase font-semibold">General Inquiry</p>
                            <p className="text-gray-900 font-medium">[HIMANSHUSINGH.BIT9995@GMAIL.com]</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 p-6 border border-gray-200 rounded-sm">
                <h4 className="flex items-center gap-2 font-bold text-gray-900 mb-2">
                    <Clock className="h-4 w-4 text-primary" /> Phone Hours
                </h4>
                <p className="text-sm text-gray-600 mb-1 flex justify-between">
                    <span>Mon - Sat:</span>
                    <span className="font-medium">09:00 - 18:00</span>
                </p>
                <p className="text-xs text-gray-500 mt-3 pt-3 border-t border-gray-200">
                    *Emergency support is available 24/7 for tailored AMC clients.
                </p>
            </div>
        </div>
    );
};
