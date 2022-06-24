import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import OrderRow from './OrderRow';

const MyInventory = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            const email = user.email;
            const url = `https://floating-lowlands-90113.herokuapp.com/order/user?email=${email}`;
            const { data } = await axios.get(url)
            setOrders(data);
            // console.log(data);
        }
        getOrders();
    }, [user])
    return (
        <div>
            <h2 className='text-3xl p-5 mb-3 font-bold text-violet-800'>You have {orders.length} orders</h2>
            <div className='mb-5'>
                <table className="table-auto mx-auto gap-3">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Ordered Perfume</th>
                            <th>Email</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    {
                        orders.map(order => <OrderRow
                            key={order._id}
                            order={order}
                        ></OrderRow>)
                    }
                </table>
            </div>
        </div>
    );
};

export default MyInventory;