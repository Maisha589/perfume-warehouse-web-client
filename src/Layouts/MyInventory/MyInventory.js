import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyInventory = () => {
    const [user, loading, error] = useAuthState(auth);
    const [order, setOrder] = useState([]);

    useEffect(() => {
        const getOrders = () => {
            const email = user.email;
            const url = `http://localhost:5000/order?email=${email}`;
            fetch(url, {
                method: "GET",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify()
            })
                .then(res => res.json())
                .then(result => setOrder(result))
        }
        getOrders();
    }, [user])
    return (
        <div>
            <h2>This is my inventory: {user.displayName}</h2>
            <h2>This is my inventory: {order.length}</h2>
        </div>
    );
};

export default MyInventory;