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

    return (
        <div className='flex'>
            <img className='w-80' src={perfume.imageSrc} alt="" />
            <div>
                <h2><span className='font-semibold'>Product Name</span>: {perfume.name}</h2>
                <br />
                <p><span className='font-semibold'>Price:</span>{perfume.price}</p>
                <br />
                <p><span className='font-semiibold'>Quantity</span>:{perfume.stock}</p>
            </div>
        </div>
    );
};

export default StockUpdate;