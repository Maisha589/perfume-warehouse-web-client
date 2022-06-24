import React from 'react';

const OrderRow = ({ order }) => {
    const { name, email, perfume, quantity } = order;
    return (
        <tbody>
            <tr>
                <td>{name}</td>
                <td>{perfume}</td>
                <td>{email}</td>
                <td>{quantity}</td>
            </tr>
        </tbody>
    );
};

export default OrderRow;