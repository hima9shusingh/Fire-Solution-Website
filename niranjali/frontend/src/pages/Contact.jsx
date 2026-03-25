import React from 'react';
import { SEO } from '../components/layout/SEO';
import { ContactHero } from '../components/sections/Contact/ContactHero';
import { ContactOptions } from '../components/sections/Contact/ContactOptions';
import { ContactForm } from '../components/sections/Contact/ContactForm';
import { ResponseStrip } from '../components/sections/Contact/ResponseStrip';
import { ContactCTA } from '../components/sections/Contact/ContactCTA';

const Contact = () => {
    return (
        <>
            <SEO
                title="Contact Us | Niranjali Firesolutions Limited"
                description="Get in touch with our engineering team for fire protection system design, installation, and maintenance inquiries. Office in New Delhi, serving North & East India."
            />
            <ContactHero />
            <ContactOptions />
            <ContactForm />
            <ResponseStrip />
            <ContactCTA />
        </>
    );
};

export default Contact;
