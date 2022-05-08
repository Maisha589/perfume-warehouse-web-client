import React from 'react';
import { useNavigate } from 'react-router-dom';

const Perfume = ({ product }) => {
    const { _id, name, imageSrc, price, description } = product;

    const navigate = useNavigate();

    const handleStock = (perfumeId) => {
        navigate(`/stockUpdate/${perfumeId}`);
    }

    return (
        <div>
            <div className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                        src={imageSrc}
                        alt={product.imageAlt}
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm font-bold text-gray-700 m-auto">
                            <span aria-hidden="true" className="absolute inset-0" />
                            {name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{description}</p>
                        <p className="mt-1 text-sm text-gray-500">Supplier: {product.supplierName}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{price}</p>
                </div>
                <button onClick={() => handleStock(_id)} className=" py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 group-hover:opacity-75">Stock Update
                </button>
            </div>
        </div>
    );
};

export default Perfume;