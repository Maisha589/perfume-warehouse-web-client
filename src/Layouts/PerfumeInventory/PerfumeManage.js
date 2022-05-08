import React from 'react';

const PerfumeManage = ({ product }) => {
    const { _id, name, imageSrc, price, description } = product;
    return (
        <div>
            <table class="table-auto">
                <thead>
                    <tr>
                        <th>Song</th>
                        <th>Artist</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td>Malcolm Lockyer</td>
                        <td>1961</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default PerfumeManage;