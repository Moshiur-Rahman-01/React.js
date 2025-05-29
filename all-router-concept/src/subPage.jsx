import React from 'react';
import { NavLink } from 'react-router';

const subPage = () => {
    return (
        <div>
            <button className='text-5xl font-bold'><NavLink to='/page1' >ami Subpage 1</NavLink></button>
            </div>
    );
};

export default subPage;