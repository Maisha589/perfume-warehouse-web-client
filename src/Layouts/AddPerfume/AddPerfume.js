import React from 'react';
import { useForm } from "react-hook-form";

const AddPerfume = () => {
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
    };
    return (
        <>
            <h2 className='text-3xl text-violet-600 font-extrabold tracking-tight'>Add Perfumes in our warehouse</h2>
            <form className='mt-8 space-y-6' onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email-address" className="sr-only">
                    Email address
                </label>
                <input placeholder='Perfume Name' className='border border-3' {...register("Name", { required: true, maxLength: 20 })} />
                <br />
                <input placeholder='Photo URL' className='border border-3' {...register("imageSrc")} />
                <br />
                <input placeholder='Description' className='border border-3' {...register("description")} />
                <br />
                <input placeholder='Price' className='border border-3' type="number" {...register("price")} />
                <br />
                <input className='py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75' type="submit" value="Add Item" />
            </form>
        </>

    );
};

export default AddPerfume;