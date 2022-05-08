import React from 'react';

const Footer = () => {
    const today = new Date();
    return (
        <footer className='text-center bg-gray-900 text-white'>

            <div className="text-center p-4">
                <p>&copy; reserved in {today.getFullYear()} </p>

            </div>
        </footer>
    );
};

export default Footer;