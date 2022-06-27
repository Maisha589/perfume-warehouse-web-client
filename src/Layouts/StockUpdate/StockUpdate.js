import React from 'react';
import { useParams } from 'react-router-dom';
import usePerfume from '../../Hooks/usePerfume';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useEffect } from 'react';

const StockUpdate = () => {
    const { id } = useParams();
    const [perfume] = usePerfume(id);
    const [recallStock, setRecallStock] = useState(false);
    const [quantityData, setQuantityData] = useState({});

    useEffect(() => {
        const url = `https://floating-lowlands-90113.herokuapp.com/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setQuantityData(data))
    }, [id, recallStock])

    // console.log(quantityData);
    const updateStock = quantityData.stock - 1;

    const handleDeliver = () => {
        const currentStock = { updateStock }
        // console.log(currentStock);

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
                setRecallStock(!recallStock);
                // console.log("success", result);
            })
    }

    const updateStock2 = quantityData.stock + 1;

    const handleRestock = () => {
        const currentStock2 = { updateStock2 }
        // console.log(currentStock2);

        const url = `https://floating-lowlands-90113.herokuapp.com/product/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(currentStock2),
        })
            .then(res => res.json())
            .then(result => {
                setRecallStock(!recallStock);
                // console.log("success", result);
            })
    }

    return (
        <>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">To Restock</h2>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 justify-items-center mb-5'>
                <div>
                    <img className='w-80' src={perfume.imageSrc} alt="" />
                </div>
                <div>
                    <h2 className='font-bold bold my-2'><span className='font-semibold text-violet-700'>Product Name</span>: {perfume.name}</h2>
                    <br />
                    <h2 className='font-bold bold'><span className='font-semibold text-violet-700'>Supplier Name</span>: {perfume.supplierName}</h2>
                    <br />
                    <p className='font-bold'><span className='font-semibold text-violet-700'>Price:</span>{perfume.price}</p>
                    <br />
                    <p className='font-bold bold'><span className='font-semibold text-violet-700'>Quantity:</span> <br />{quantityData.stock}</p>
                    <div>
                        <button className='mb-4 mt-3 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75' onClick={handleDeliver}>Deliver</button>
                        <br />
                        <button className=' py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75' onClick={handleRestock} >Restock</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StockUpdate;