import React from 'react';
import { useParams } from 'react-router';

const Rule4 = () => {
    const params = useParams();
    console.log(params)
    return (
        <div>
            <h1 className='text-4xl font-bold my-4'>Rule-4: useParams()</h1>
            <div>
                dynamic page er id pete useParams() use kora hoi
            </div>
        </div>
    );
};

export default Rule4;