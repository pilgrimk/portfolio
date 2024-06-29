import React from 'react';
import shortid from 'shortid'

// Checkmark component for boolean values
const Checkmark = ({ value }) => (
    value ? <span>&#10003;</span> : <span>&#10007;</span>
);

const PricePlans = ({ pricePlans }) => {
    const features = [
        'functional_website',
        'social_media_icons',
        'image_gallery',
        'email_contact',
        'content_upload',
        'database',
        'payment_processing',
        'hosting_setup',
        'pages',
        'revisions',
        'delivery_time',
    ];

    const featureNames = {
        functional_website: 'Functional website',
        social_media_icons: 'Social media icons',
        image_gallery: 'Image gallery',
        email_contact: 'Email contact*',
        content_upload: 'Content upload*',
        database: 'Database*',
        payment_processing: 'Payment processing*',
        hosting_setup: 'Hosting setup',
        pages: 'Pages',
        revisions: 'Revisions',
        delivery_time: 'Delivery time (days)',
    };

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="px-2 py-2 border">Feature</th>
                        {pricePlans.map(plan => (
                            <th key={shortid()} className="px-4 py-2 border">
                                <h1 className='mt-2 text-xs sm:text-base'>{plan.name}</h1>
                                <h2 className='mt-2 text-xs sm:text-2xl'>{plan.price}</h2>
                                <p className='mt-2 text-xs sm:text-base hidden sm:block'>{plan.desc}</p>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {features.map(feature => (
                        <tr key={shortid()}>
                            <td className="px-4 py-2 border text-xs sm:text-base">{featureNames[feature]}</td>
                            {pricePlans.map(plan => (
                                <td key={shortid()} className="px-4 py-2 border text-center">
                                    {typeof plan.features[feature] === 'boolean'
                                        ? <Checkmark value={plan.features[feature]} />
                                        : plan.features[feature]
                                    }
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PricePlans
