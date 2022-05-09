import React from 'react';
import { useParams } from 'react-router-dom';
import usePerfume from '../../Hooks/usePerfume';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyInventoryOrder = () => {
    const { id } = useParams();
    const [perfume] = usePerfume(id);
    const [user] = useAuthState(auth);

    const handleOrder = event => {
        event.preventDefault();
        const orderPerfume = {
            name: user.displayName,
            email: user.email,
            perfume: perfume.name,
            id: id,
            quantity: event.target.quantity.value
        }
        const url = `http://localhost:5000/order`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(orderPerfume),
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast("Order Placed");
                event.target.reset();
            });
    }

    return (
        <div>
            <h2>Order: {perfume.name}</h2>
            <form onSubmit={handleOrder} action="">
                <span className='p-2'>User Name:</span>
                <input className='border border-3 mb-3 mt-3' type="text" name="name" value={user.displayName} id="" disabled readOnly /> <br />
                <span className='p-2'>User Email</span>
                <input className='border border-3 mb-3' disabled readOnly type="email" name="email" value={user.email} id="" /><br />
                <span className='p-2'>Product Name</span>
                <input className='border border-3 mb-3' type="text" name="perfume name" value={perfume.name} readOnly disabled id="" /> <br />
                <span className='p-2'>Quantity</span>
                <input className='border border-3 mb-3' required type="number" name="quantity" placeholder="Quantity" id="" /> <br />
                <input type="submit" value="Place Order" />
                <ToastContainer></ToastContainer>
            </form>
        </div>
    );
};
export default MyInventoryOrder;