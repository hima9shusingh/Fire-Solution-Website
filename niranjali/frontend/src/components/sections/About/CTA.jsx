import React from 'react';
import { Button } from '../../ui/Button';
import { Link } from 'react-router-dom';

export const CTA = () => {
    return (
        <section className="py-20 bg-primary text-white text-center">
            <div className="container-custom">
                <h2 className="text-3xl font-heading font-bold mb-6">Join our journey of safety</h2>
                <Link to="/contact">
                    <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                        Contact Us
                    </Button>
                </Link>
            </div>
        </section>
    );
};
