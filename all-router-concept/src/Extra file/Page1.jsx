import React from 'react';
import Navbar from './Navbar/Navbar';
import { NavLink, useLoaderData } from 'react-router';

const Page1 = () => {
    const page1 = useLoaderData();
    console.log(page1)
    return (
        <div>
            <Navbar></Navbar>
            <h1 className='text-center text-5xl font-bold'>useLoaderData</h1>
            <button className='text-5xl font-bold'><NavLink to='/page1/page11' >ami page 1</NavLink></button>
            
        </div>
    );
};

export default Page1;<h1>ami page 1</h1>