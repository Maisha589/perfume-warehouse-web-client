import React from 'react';
import { useParams } from 'react-router-dom';
import usePerfume from '../../Hooks/usePerfume';
import 'react-toastify/dist/ReactToastify.css';

const StockUpdate = () => {
    const { id } = useParams();
    const [perfume] = usePerfume(id);

    const handleDeliver = () => {
        const previousStock = parseInt(perfume.stock);
        const updateStock = previousStock - 1;

        const currentStock = { updateStock }
        const url = `https://floating-lowlands-90113.herokuapp.com/products/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(currentStock),
        })
            .then(res => res.json())
            .then(result => {
                console.log("success", result);
            })

    }

    return (
        <>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">To Restock</h2>
            <div className='flex mx-auto container p-3 mt-4'>
                <img className='w-80' src={perfume.imageSrc} alt="" />
                <div>
                    <h2 className='font-bold bold my-2'><span className='font-semibold text-violet-700'>Product Name</span>: {perfume.name}</h2>
                    <br />
                    <h2 className='font-bold bold'><span className='font-semibold text-violet-700'>Supplier Name</span>: {perfume.supplierName}</h2>
                    <br />
                    <p className='font-bold'><span className='font-semibold text-violet-700'>Price:</span>{perfume.price}</p>
                    <br />
                    <p className='font-bold bold'><span className='font-semibold text-violet-700'>Quantity:</span> <br />{perfume.stock}</p>
                    <div>
                        <button className='mb-4 mt-3 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75' onClick={handleDeliver}>Deliver</button>
                        <br />
                        <button className=' py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75' >Restock</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StockUpdate;