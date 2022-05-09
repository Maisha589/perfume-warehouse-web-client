import { useEffect, useState } from 'react';

const usePerfume = (perfumeId) => {
    const [perfume, setPerfume] = useState({});

    useEffect(() => {
        const url = `https://floating-lowlands-90113.herokuapp.com/products/${perfumeId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setPerfume(data));
    }, [perfumeId]);

    return [perfume];
};

export default usePerfume;