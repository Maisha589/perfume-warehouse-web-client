import React from 'react';

const PerfumeQuality = () => {
    const features = [
        { name: 'Origin', description: 'Every fragrance came from nature.' },
        { name: 'Material', description: 'soil, flower,root' },
        { name: 'Weight', description: '200ml' },
        { name: 'Finish', description: 'Machine Process' },
        { name: 'Includes', description: 'Artificial fragrance are used' },
        { name: 'Purity', description: 'You can trust our warehouse for storing your product. Because we manage with strict rules and regulation. Also for supply our warehouse products.' },
    ]
    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
                <div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Our Warehouse Product Feature</h2>
                    <p className="mt-4 text-gray-500">
                        Every Perfume in our Warehouse are authentic and pure.
                    </p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {features.map((feature) => (
                            <div key={feature.name} className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">{feature.name}</dt>
                                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                    <img
                        src="https://i.ibb.co/y0LXMNK/rosy-h-nguyen-5-Hrl-EGTsa-B4-unsplash-1.jpg"
                        alt=""
                        className="bg-gray-100 rounded-lg"
                    />
                    <img
                        src=" https://i.ibb.co/tbw9zjd/fulvio-ciccolo-Al6-U8-Ed-TG58-unsplash.jpg"
                        alt=""
                        className="bg-gray-100 rounded-lg"
                    />
                    <img
                        src="https://i.ibb.co/t3tph5d/fulvio-ciccolo-Pmkq0y-Z80-4-unsplash.jpg"
                        alt=""
                        className="bg-gray-100 rounded-lg"
                    />
                    <img
                        src="   https://i.ibb.co/qWY73vm/yixian-zhao-q7i-ZCOXGOWY-unsplash.jpg"
                        alt=""
                        className="bg-gray-100 rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default PerfumeQuality;