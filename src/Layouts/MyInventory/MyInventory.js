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
            const url = `http://localhost:5000/order/user?email=${email}`;
            const { data } = await axios.get(url)
            setOrder(data);
            // console.log(data);
        }
        getOrders();
    }, [user])
    return (
        <div>
            <h2 className='text-2xl font-semibold text-violet-800'>This is my Orders</h2>
            <h2>This is my inventory: {order.length}</h2>
        </div>
    );
};

export default MyInventory;