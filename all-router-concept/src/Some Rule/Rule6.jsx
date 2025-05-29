import React from 'react';
import { useLocation } from 'react-router';

const Rule6 = () => {
    const location = useLocation();
    console.log(location)
    return (
        <div>
            <h1 className='text-4xl font-bold my-4'>Rule-6: useLocation()</h1>
            <h1>Page er location dekhabe...</h1>
        </div>
    );
};

export default Rule6;