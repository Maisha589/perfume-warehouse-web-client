import React from 'react';
import Banner from '../Banner/Banner';
import PerfumeQuality from '../PerfumeQuality/PerfumeQuality';
import TopSales from '../TopSales/TopSales';
import WarehouseBenefits from '../WarehouseBenefits/WarehouseBenefits';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopSales></TopSales>
            <PerfumeQuality></PerfumeQuality>
            <WarehouseBenefits></WarehouseBenefits>
        </div>
    )
}

export default Home;