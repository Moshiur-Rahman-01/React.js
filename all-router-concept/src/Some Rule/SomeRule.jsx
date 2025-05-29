import React from 'react';
import Rule1 from './Rule1';
import Rule2 from './Rule2';
import Rule3 from './Rule3';
import Rule4 from './Rule4';
import Rule5 from './Rule5';
import Rule6 from './Rule6';
import Rule7 from './Rule7';
import Rule8 from './Rule8';
import Rule9 from './Rule9';
import Rule10 from './Rule10';

const SomeRule = () => {
    return (
        <div>
            <h1 className='text-center font-bold text-5xl'>Some Rule</h1>
            <Rule1></Rule1>
            <Rule2></Rule2>
            <Rule3></Rule3>
            <Rule4></Rule4>
            <Rule5></Rule5>
            <Rule6></Rule6>
            <h1 className='text-center text-5xl font-bold my-4'>Form Handling</h1>
            <Rule7></Rule7>
            <Rule8></Rule8>
            <Rule9></Rule9>
            <Rule10></Rule10>
        </div>
    );
};

export default SomeRule;