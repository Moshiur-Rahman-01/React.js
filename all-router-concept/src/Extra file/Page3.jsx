import React from 'react';
import Navbar from './Navbar/Navbar';
import { useNavigate } from 'react-router';

const Page3 = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/')
    }
    return (
        <div>
            <Navbar></Navbar>
            <h1 className='text-center text-5xl font-bold'>ami page 3</h1>
            <h1 className='text-center text-5xl font-bold'>useNavigate</h1>
            <button onClick={handleNavigate} className='text-3xl btn btn-primary'>Back to Homepage</button>
        </div>
    );
};

export default Page3;