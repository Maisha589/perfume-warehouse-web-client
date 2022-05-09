import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyInventory = () => {
    const [user] = useAuthState(auth);
    const [order, setOrder] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            const email = user.email;
            const url = `https://floating-lowlands-90113.herokuapp.com/order?email=${email}`;
            const { data } = await axios.get(url)
            setOrder(data);
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