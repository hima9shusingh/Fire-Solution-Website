import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SEO = ({
    title,
    description,
    name = 'Niranjali Firesolutions',
    type = 'website',
    url,
    image
}) => {
    const siteTitle = title ? `${title} | ${name}` : name;
    const siteUrl = url || window.location.href;
    const defaultDescription = "Engineering-led fire protection solutions for industrial and corporate infrastructure. Protecting assets, ensuring compliance.";

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            {/* Open Graph Tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:site_name" content={name} />
            {image && <meta property="og:image" content={image} />}

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
            {image && <meta name="twitter:image" content={image} />}

            {/* Schema.org JSON-LD structure can be added here in future */}
        </Helmet>
    );
};
