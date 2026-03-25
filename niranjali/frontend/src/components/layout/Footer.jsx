// Footer stays hardcoded dark, so text-white/text-gray-400 works fine.
// No changes needed for Footer.jsx unless we want it dynamic.
// I will skip changes to Footer.jsx for now.
import { Shield, Facebook, Twitter, Linkedin, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const Footer = () => {
    return (
        <footer className="bg-[#050A14] border-t border-primary pt-12 md:pt-20 pb-8 text-sm shadow-[0_-5px_30px_rgba(255,107,0,0.15)] relative z-10">
            <div className="container-custom">

                {/* Top Section: Newsletter & Branding */}
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16 border-b border-white/5 pb-12 md:pb-16">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <Shield className="h-8 w-8 text-primary" />
                            <div className="flex flex-col">
                                <span className="text-xl font-heading font-bold text-white tracking-wider leading-none">
                                    NIRANJALI
                                </span>
                                <span className="text-xs font-medium text-primary tracking-[0.2em] leading-none">
                                    FIRESOLUTIONS
                                </span>
                            </div>
                        </div>
                        <p className="text-gray-400 leading-relaxed max-w-md mb-6">
                            Engineering-led fire protection solutions for industrial and corporate infrastructure. Protecting assets, ensuring compliance, and saving lives since 2010.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="h-10 w-10 bg-white/5 flex items-center justify-center rounded-sm hover:bg-primary hover:text-white text-gray-400 transition-all duration-300">
                                    <Icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Links Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
                    {/* Services */}
                    <div>
                        <h3 className="text-white font-heading font-semibold mb-6 uppercase tracking-wider text-xs">Services</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li>
                                <a href="/services/fire-sprinklers" className="hover:text-primary transition-colors flex items-center gap-2 group">
                                    <ArrowRight className="h-3 w-3 opacity-0 text-primary -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                    Fire Sprinkler Systems
                                </a>
                            </li>
                            <li>
                                <a href="/services/fire-hydrant" className="hover:text-primary transition-colors flex items-center gap-2 group">
                                    <ArrowRight className="h-3 w-3 opacity-0 text-primary -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                    Hydrant Systems
                                </a>
                            </li>
                            <li>
                                <a href="/services/fire-alarm" className="hover:text-primary transition-colors flex items-center gap-2 group">
                                    <ArrowRight className="h-3 w-3 opacity-0 text-primary -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                    Alarm & Detection
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors flex items-center gap-2 group">
                                    <ArrowRight className="h-3 w-3 opacity-0 text-primary -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                    Risk Assessment
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors flex items-center gap-2 group">
                                    <ArrowRight className="h-3 w-3 opacity-0 text-primary -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                    Maintenance (AMC)
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Industries */}
                    <div>
                        <h3 className="text-white font-heading font-semibold mb-6 uppercase tracking-wider text-xs">Industries</h3>
                        <ul className="space-y-3 text-gray-400">
                            {['Manufacturing', 'Warehousing', 'Power Plants', 'Data Centers', 'Pharmaceuticals'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-primary transition-colors flex items-center gap-2 group">
                                        <ArrowRight className="h-3 w-3 opacity-0 text-primary -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-heading font-semibold mb-6 uppercase tracking-wider text-xs">Company</h3>
                        <ul className="space-y-3 text-gray-400">
                            {['About Us', 'Our Projects', 'Certifications', 'Careers', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-primary transition-colors flex items-center gap-2 group">
                                        <ArrowRight className="h-3 w-3 opacity-0 text-primary -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-heading font-semibold mb-6 uppercase tracking-wider text-xs">Contact</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <span>404, 4th Floor, Rajeev Ranjan complex,<br />Ashiyana Digha Road, Patna, Bihar - 800014</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-primary shrink-0" />
                                <span className="font-mono">9939555664</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-primary shrink-0" />
                                <span>himanshusingh.bit9995@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
                    <p>&copy; {new Date().getFullYear()} Niranjali Firesolutions Ltd. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
