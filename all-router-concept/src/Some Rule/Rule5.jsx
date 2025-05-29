import React, { useState } from 'react';
import { Navigate } from 'react-router';

const Rule5 = () => {
    const [visitRoute1, setVisitRoute1] = useState(false);
    if(visitRoute1) return <Navigate to='/page1'></Navigate>
    return (
        <div>
            <h1 className='text-4xl font-bold my-4'>Rule-5: Navigate</h1>
            <h1>shorto shapekkhe onno route e niye jai...</h1>
            <button onClick={() => setVisitRoute1(!visitRoute1)} className='btn btn-primary'>click me</button>
        </div>
    );
};

export default Rule5;