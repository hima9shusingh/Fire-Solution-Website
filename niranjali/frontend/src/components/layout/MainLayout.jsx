import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import Navbar from './Navbar';
import { WhatsAppButton } from '../ui/WhatsAppButton';

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-dark text-light font-body transition-colors duration-300">
            {/* Navigation */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-grow">
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />

            {/* Floating WhatsApp Button */}
            <WhatsAppButton />
        </div>
    );
};

export default MainLayout;
