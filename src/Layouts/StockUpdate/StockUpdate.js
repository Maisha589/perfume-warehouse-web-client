import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const StockUpdate = () => {
    const { id } = useParams();
    const [perfume, setPerfume] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPerfume(data))
    }, [])

    const handleDeliver = () => {
        const previousStock = parseInt(perfume.stock);
        const updateStock = previousStock - 1;

        const currentStock = { updateStock }
        const url = `http://localhost:5000/products/${id}`
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
        <div className='flex'>
            <img className='w-80' src={perfume.imageSrc} alt="" />
            <div>
                <h2><span className='font-semibold'>Product Name</span>: {perfume.name}</h2>
                <br />
                <p><span className='font-semibold'>Price:</span>{perfume.price}</p>
                <br />
                <p><span className='font-semiibold'>Quantity</span>:{perfume.stock}</p>
                <div>
                    <button onClick={handleDeliver}>Deliver</button>
                </div>
            </div>
        </div>
    );
};

export default StockUpdate;