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
            name: event.target.name.value,
            email: user.email,
            img: perfume.imageSrc,
            perfume: perfume.name,
            quantity: event.target.quantity.value
        }
        const url = `https://floating-lowlands-90113.herokuapp.com/order`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(orderPerfume),
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result);
                toast("Order Placed");
                event.target.reset();
            });
    }

    return (
        <div>
            <h2 className="text-3xl text-blue-900 font-bold m-3 p-5">Withdraw Your perfume</h2>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 justify-center justify-items-center'>
                <div>
                    <img className='w-80 mb-5 p-3' src={perfume.imageSrc} alt="" />
                </div>
                <div>
                    <form onSubmit={handleOrder} action="">
                        <input className='border border-3 mb-3 mt-3 p-2' type="text" name="name" placeholder='Your name' id="" required /> <br />
                        <input className='border border-3 mb-3 p-2' disabled readOnly type="email" name="email" value={user?.email} id="" /><br />
                        <input className='border border-3 mb-3 p-2' type="text" name="perfume name" value={perfume.name} readOnly disabled id="" /> <br />
                        <input className='border border-3 mb-3 p-2' type="text" name="perfume name" value={perfume.description} readOnly disabled id="" /> <br />
                        <input className='border border-3 mb-3 p-2' required type="number" name="quantity" placeholder="Quantity" id="" /> <br />
                        <input className=' py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75' type="submit" value="Place Order" />
                        <ToastContainer></ToastContainer>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default MyInventoryOrder;