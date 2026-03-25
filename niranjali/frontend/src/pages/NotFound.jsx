import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/layout/SEO';
import { AlertTriangle } from 'lucide-react';
import { Button } from '../components/ui/Button';

const NotFound = () => {
    return (
        <>
            <SEO
                title="404 Not Found"
                description="Page not found"
            />

            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-dark text-[var(--foreground)]">
                <AlertTriangle className="h-16 w-16 text-primary mb-6" />
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Page Not Found</h1>
                <p className="text-gray-600 max-w-md mb-8">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Link to="/">
                    <Button size="lg">Return Home</Button>
                </Link>
            </div>
        </>
    );
};

export default NotFound;
