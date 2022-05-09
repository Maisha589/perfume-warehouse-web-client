import React from 'react';
import { Disclosure } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleLogOut = () => {
        signOut(auth);
    }

    return (
        <Disclosure as="nav" className=" bg-gray-800">
            {({ open }) => (
                <>
                    <div className=" max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <img
                                        className="block lg:hidden h-10 w-100"
                                        src="https://i.ibb.co/kgT6QfZ/logo1-removebg-preview.png"
                                        alt="Workflow"
                                    />
                                    <img
                                        className="hidden lg:block h-8 w-auto"
                                        src="https://i.ibb.co/kgT6QfZ/logo1-removebg-preview.png"
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        <Link className=" text-gray-300 hover:bg-gray-700 hover:text-white
                                            px-3 py-2 rounded-md text-sm font-medium"
                                            to='/' >Home</Link>
                                        <Link className=" text-gray-300 hover:bg-gray-700 hover:text-white
                                            px-3 py-2 rounded-md text-sm font-medium"
                                            to='/perfumeInventory' >Perfume Inventory</Link>
                                        <Link className=" text-gray-300 hover:bg-gray-700 hover:text-white
                                            px-3 py-2 rounded-md text-sm font-medium"
                                            to='/blogs' >Blogs</Link>
                                        {
                                            user && <>
                                                <Link className=" text-gray-300 hover:bg-gray-700 hover:text-white
                                            px-3 py-2 rounded-md text-sm font-medium"
                                                    to='/myInventory' >My Inventory</Link>
                                                <Link className=" text-gray-300 hover:bg-gray-700 hover:text-white
                                            px-3 py-2 rounded-md text-sm font-medium"
                                                    to='/addPerfume' >Add Perfume</Link>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {
                                    user ?
                                        <>

                                            <Link onClick={handleLogOut} className=" text-gray-300 hover:bg-gray-700 hover:text-white
                                    px-3 py-2 rounded-md text-sm font-medium"
                                                to='/login' >Log Out</Link>
                                        </>

                                        :
                                        <Link className=" text-gray-300 hover:bg-gray-700 hover:text-white
                                            px-3 py-2 rounded-md text-sm font-medium"
                                            to='/login' >Login</Link>
                                }
                                <button
                                    type="button"
                                    className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                >
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <Link className=" text-gray-300 hover:bg-gray-700 hover:text-white
                                            px-3 py-2 rounded-md text-sm font-medium"
                                to='/' >Home</Link>
                            <br />
                            <Link className=" text-gray-300 hover:bg-gray-700 hover:text-white
                                            px-3 py-2 rounded-md text-sm font-medium"
                                to='/perfumeInventory' >Perfume Inventory</Link>
                            <br />
                            <Link className=" text-gray-300 hover:bg-gray-700 hover:text-white
                                            px-3 py-2 rounded-md text-sm font-medium"
                                to='/blogs' >Blogs</Link>
                            <br />
                            <Link className=" text-gray-300 hover:bg-gray-700 hover:text-white
                                            px-3 py-2 rounded-md text-sm font-medium"
                                to='/myInventory' >My Inventory</Link>
                            <br />
                            <Link className=" text-gray-300 hover:bg-gray-700 hover:text-white
                                            px-3 py-2 rounded-md text-sm font-medium"
                                to='/addPerfume' >Add Perfume</Link>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default Header;