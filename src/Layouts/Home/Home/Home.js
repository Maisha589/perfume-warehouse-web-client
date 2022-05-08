import React from 'react';
import Banner from '../Banner/Banner';
import PerfumeQuality from '../PerfumeQuality/PerfumeQuality';
import TopSales from '../TopSales/TopSales';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopSales></TopSales>
            <PerfumeQuality></PerfumeQuality>
        </div>
    )
}

export default Home;