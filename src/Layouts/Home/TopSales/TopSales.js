import React from 'react';
import useProducts from '../../../Hooks/useProducts';
import Perfume from '../Perfume/Perfume';



const TopSales = () => {
    const [products] = useProducts();

    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-3xl text-violet-600 font-extrabold tracking-tight">Our Top Stocks</h2>

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.slice(0, 4).map((product) => <Perfume
                        key={product._id}
                        product={product}
                    ></Perfume>)}
                </div>
            </div>
        </div>
    );
};

export default TopSales;