import React from 'react';
import { Link } from 'react-router-dom';

const PerfumeManage = ({ product, handleDelete }) => {
    const { _id, name, imageSrc, price, supplierName, stock, description } = product;
    return (
        <tbody>
            <tr>
                <td><img className='w-20 h-20' src={imageSrc} alt="" /></td>
                <td>{name}</td>
                <td>{description}</td>
                <td>{supplierName}</td>
                <td>{price}</td>
                <td>{stock}</td>
                <td><Link to={`/myInventoryOrder/${_id}`} className='py-2 px-4 mx-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>Order</Link></td>
                <td><button onClick={() => handleDelete(_id)} className='py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>Delete</button></td>
            </tr>
        </tbody>
    );
};

export default PerfumeManage;