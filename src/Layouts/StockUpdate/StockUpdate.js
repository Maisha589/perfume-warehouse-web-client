import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const StockUpdate = () => {
    const { perfumeId } = useParams();

    // const [perfume, setPerfume] = useState({});
    // useEffect(() => {
    //     const url = `http://localhost:5000/products/${perfumeId}`
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [])
    console.log(perfumeId);
    return (
        <div>
            {/* <h2>Update stock: {perfume.name}</h2> */}
        </div>
    );
};

export default StockUpdate;