import React from 'react';
import { Helmet } from 'react-helmet-async';

const Schema: React.FC = () => {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Pascal Zirn Photography",
        "image": "https://pascalzirn.com/og-image.jpg",
        "url": "https://pascalzirn.com",
        "telephone": "+1-604-555-0123", // Needs update if user provides real number
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Vancouver",
            "addressRegion": "BC",
            "addressCountry": "CA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "49.2827",
            "longitude": "-123.1207"
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "09:00",
            "closes": "17:00"
        },
        "priceRange": "$$$",
        "sameAs": [
            "https://instagram.com/pascalzirn",
            "https://linkedin.com/in/pascalzirn"
        ]
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schemaData)}
            </script>
        </Helmet>
    );
};

export default Schema;
