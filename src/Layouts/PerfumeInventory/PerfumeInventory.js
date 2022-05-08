import React from 'react';
import useProducts from '../../Hooks/useProducts';
import PerfumeManage from './PerfumeManage';

const PerfumeInventory = () => {
    const [products] = useProducts();

    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Best Sales</h2>
                {products.map((product) => <PerfumeManage
                    key={product._id}
                    product={product}
                ></PerfumeManage>)}
            </div>
        </div>
    );
};

export default PerfumeInventory;