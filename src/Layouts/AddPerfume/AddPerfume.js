import React from 'react';
import { useForm } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';

const AddPerfume = () => {

    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/products`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))
        toast("Product added")
    };
    return (
        <>
            <h2 className='text-3xl text-violet-600 font-extrabold tracking-tight'>Add Perfumes in our warehouse</h2>
            <form className='mt-8 mb-5 space-y-6' onSubmit={handleSubmit(onSubmit)}>
                <span className='font-semibold text-violet-700 mr-2'>Name:</span>
                <input placeholder='Perfume Name' className='border border-3' {...register("name", { required: true })} />
                <br />
                <span className='font-semibold text-violet-700 mr-2'  >Email:</span>
                <input value={user.email} readOnly disabled className='border border-3' {...register("email")} />
                <br />
                <span className='font-semibold text-violet-700 mr-2'>Photo URL:</span>
                <input placeholder='Photo URL' className='border border-3' {...register("imageSrc")} />
                <br />
                <span className='font-semibold text-violet-700 mr-2'>Description:</span>
                <input placeholder='Description' className='border border-3' {...register("description")} />
                <br />
                <span className='font-semibold text-violet-700 mr-2'>Price:</span>
                <input placeholder='Price' className='border border-3' type="number" {...register("price")} />
                <br />
                <span className='font-semibold text-violet-700 mr-2'>Stock:</span>
                <input placeholder='Quantity' className='border border-3' type="number" {...register("stock")} />
                <br />
                <input className=' py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75' type="submit" value="Add Item" />
            </form>
            <ToastContainer></ToastContainer>
        </>

    );
};

export default AddPerfume;