import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';
import PerfumeManage from './PerfumeManage';

const PerfumeInventory = () => {
    const [products, setProducts] = useProducts();

    const handleDelete = id => {
        const del = window.confirm("Are you sure?")
        if (del) {
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const rest = products.filter(product => product._id !== id);
                    setProducts(rest);
                })
        }
    };

    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Best Sales</h2>
                {products.map((product) => <PerfumeManage
                    key={product._id}
                    product={product}
                    handleDelete={handleDelete}
                // handleOrder={handleOrder}
                ></PerfumeManage>)}
                <Link to="/addPerfume"> <button className='py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>Add more to Inventory</button></Link>
            </div>
        </div>
    );
};

export default PerfumeInventory;