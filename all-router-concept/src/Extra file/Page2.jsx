import React, { use } from 'react';
import Navbar from './Navbar/Navbar';

const Page2 = ({page2Promise}) => {
    const page2 = use(page2Promise);
    console.log(page2);
    return (
        <div>
            <Navbar></Navbar>
            <h1 className='text-center text-5xl font-bold'>ami page 2</h1>
        </div>
    );
};

export default Page2;