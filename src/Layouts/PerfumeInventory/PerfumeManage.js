import React from 'react';

const PerfumeManage = ({ product, handleDelete }) => {
    const { _id, name, imageSrc, price } = product;
    return (
        <div className='container flex mb-3'>
            <img className='w-20 h-20' src={imageSrc} alt="" />
            <h2 className='p-5 text-2xl'>Perfume Name: {name}</h2>
            <h2 className='p-5 font-bold'>Price: {price}</h2>
            <button onClick={() => handleDelete(_id)} className='py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>Delete</button>
        </div>
    );
};

export default PerfumeManage;