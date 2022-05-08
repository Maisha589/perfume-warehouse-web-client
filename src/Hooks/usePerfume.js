import { useEffect, useState } from 'react';

const usePerfume = (perfumeId) => {
    const [perfume, setPerfume] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/products/${perfumeId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setPerfume(data));
    }, [perfumeId]);

    return [perfume];
};

export default usePerfume;