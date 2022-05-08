import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-2xl font-semibold text-violet-600 '>1. Difference between javascript and nodejs:</h2>
            <p className='text-2xl'><span className='font-bold text-violet-700'>JavaScript:</span>It is a programming language which can run only inside browser. Javascript are able to write with html and css components which leads to manage the client side of a website.It is the upgraded version of ECMA script</p>
            <p className='text-2xl'><span className='font-bold text-violet-700'>Node.js:</span>It is a javascript runtime environment which helps javascript to run outside of browser. It cannot use html . It is used to build sever side of website. It is written in mostly C, C++  and javascript.</p>
            <br />
            <h2 className='text-2xl font-semibold text-violet-600 '>2. When should you use node.js and when should you use mongodb?</h2>
            <p className='text-2xl '>Mongodb runs with no sequel. It stores the data as collection. So, using mongodb is flexible for working. As i mentioned it is noSQL , Node.js mainly gives us the way to use mongodb. So for a flexible data collection store we should use mongodb connected by node.js.</p>
            <br />
            <h2 className='text-2xl font-semibold text-violet-600 '>3. Differences between SQL and noSQL databases.</h2>
            <p className='text-2xl '><span className='font-bold text-violet-700'>SQL:</span>It is a relational database system.As it stores data as table ,It is not flexible to store data. But best for complex database store.</p>
            <p className='text-2xl '><span className='font-bold text-violet-700'>NoSQL:</span> It is a no relational database system.It stores data by collection so flexible. It is not suitable for store complex database.</p>
            <br />
            <h2 className='text-2xl font-semibold text-violet-600 '>4. What is the purpose of jwt and how does it work?</h2>
            <p className='text-2xl '>JWT stands for Json Web Token.It is mainly used for share security information between client and server. It is a token that is generate by server and which gives permission to user use the website for with a limited time.</p>
        </div>
    );
};

export default Blogs;