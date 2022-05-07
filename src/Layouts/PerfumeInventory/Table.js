import React from 'react';

const Table = ({ product }) => {
    return (
        <div>
            <table className="table-fixed">
                <thead>
                    <tr>
                        <th>Perfume Name</th>
                        <th>Supplier</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{product.name}</td>
                        <td>{product.supplierName}</td>
                        <td>{product.stock}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;