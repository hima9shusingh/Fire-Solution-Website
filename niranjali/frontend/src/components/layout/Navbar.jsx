import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../utils/cn';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Industries', href: '/industries' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header
            className={cn(
                'sticky top-0 z-50 w-full transition-all duration-300 border-b',
                scrolled
                    ? 'bg-[var(--background)]/95 backdrop-blur-md border-[var(--border-subtle)] shadow-sm py-2'
                    : 'bg-transparent border-transparent py-4'
            )}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between">
                    {/* Logo Section */}
                    {/* Logo Section */}
                    <Link to="/home" className="flex items-center gap-4 group relative z-50">
                        {/* Logo Image Container with Glow */}
                        <div className="relative">
                            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-2 rounded-xl shadow-lg group-hover:border-primary/30 transition-all duration-300 group-hover:shadow-primary/20">
                                <img
                                    src="/Images/WhatsApp Image 2026-02-19 at 13.30.25.jpeg"
                                    alt="Niranjali Fire Solutions"
                                    className="h-10 sm:h-12 w-auto object-contain drop-shadow-md"
                                />
                            </div>
                        </div>

                        {/* Text Section */}
                        <div className="flex flex-col">
                            <span className="text-xl sm:text-2xl font-heading font-bold tracking-tight text-[var(--foreground)] leading-none group-hover:text-primary transition-all duration-300">
                                NIRANJALI
                            </span>
                            <div className="h-0.5 w-0 bg-primary/50 mt-1 transition-all duration-500 group-hover:w-full" />
                            <span className="text-[0.65rem] sm:text-xs font-medium text-gray-400 tracking-[0.2em] uppercase mt-0.5 group-hover:text-primary transition-colors duration-300">
                                Fire Solutions Pvt. Ltd.
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        <div className="flex items-center bg-[var(--surface-secondary)]/50 backdrop-blur-sm px-2 py-1.5 rounded-full border border-[var(--border-subtle)] shadow-inner">
                            {navigation.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.href}
                                    className={({ isActive }) =>
                                        cn(
                                            "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full",
                                            isActive
                                                ? "text-primary bg-[var(--background)] shadow-sm"
                                                : "text-[var(--text-muted)] hover:text-[var(--foreground)] hover:bg-[var(--background)]/50"
                                        )
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>
                    </nav>

                    {/* CTA Button & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <div className="hidden lg:block relative z-10">
                            <Link to="/request-inspection">
                                <Button
                                    variant="primary"
                                    className="shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    Request Inspection
                                </Button>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden relative z-50 p-2 text-gray-300 hover:text-primary transition-colors focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <X className="h-7 w-7 animate-in fade-in zoom-in duration-200" />
                            ) : (
                                <Menu className="h-7 w-7 animate-in fade-in zoom-in duration-200" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            <div
                className={cn(
                    'fixed inset-0 z-40 bg-dark/95 backdrop-blur-xl transition-all duration-500 lg:hidden',
                    isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
                )}
            >
                <div className="flex flex-col h-full justify-center items-center space-y-8 p-8">
                    {navigation.map((item, index) => (
                        <NavLink
                            key={item.name}
                            to={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={({ isActive }) =>
                                cn(
                                    "text-2xl font-heading font-medium tracking-wide transition-all duration-300 transform",
                                    isActive
                                        ? "text-primary scale-110"
                                        : "text-gray-600 hover:text-[var(--foreground)] hover:scale-105"
                                )
                            }
                            style={{
                                transitionDelay: `${index * 50}ms`,
                                opacity: isMenuOpen ? 1 : 0,
                                transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)'
                            }}
                        >
                            {item.name}
                        </NavLink>
                    ))}

                    <div
                        className="pt-8 transition-all duration-500 delay-300"
                        style={{
                            opacity: isMenuOpen ? 1 : 0,
                            transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)'
                        }}
                    >
                        <Link to="/request-inspection" onClick={() => setIsMenuOpen(false)}>
                            <Button className="w-full text-lg px-8 py-4 shadow-xl shadow-primary/20">
                                Request Inspection
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
