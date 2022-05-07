import React, { useEffect, useState } from 'react';
import Table from './Table';

const PerfumeInventory = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = "http://localhost:5000/products";
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Best Sales</h2>
                {products.map((product) => <Table
                    key={product._id}
                    product={product}
                ></Table>)}
            </div>
        </div>
    );
};

export default PerfumeInventory;