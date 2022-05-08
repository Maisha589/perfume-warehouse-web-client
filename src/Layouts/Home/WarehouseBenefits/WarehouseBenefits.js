import React from 'react';
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const WarehouseBenefits = () => {
    const features = [
        {
            name: 'Easy to store',
            description:
                'You can easily store perfume in our warehouse to . Process is safe and easy. You can manage from any country in the world .',
            icon: GlobeAltIcon,
        },
        {
            name: 'No hidden fees',
            description:
                'The rate is altime same and exact. You can store in our warehouse from anywhere with no extra fee tension.',
            icon: ScaleIcon,
        },
        {
            name: 'Transfers are instant',
            description:
                'We can transfer our orders easily',
            icon: LightningBoltIcon,
        },
        {
            name: 'Mobile notifications',
            description:
                'We will notify you about the condition and update of the warehouse. No need to worry.',
            icon: AnnotationIcon,
        },
    ]
    return (
        <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Transactions</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Best way to use our Warehouse
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        We will supply best and authentic products. We will take care of your products with all care and concern.
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default WarehouseBenefits;