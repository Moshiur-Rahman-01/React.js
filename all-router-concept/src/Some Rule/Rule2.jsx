import React from 'react';

const Rule2 = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold my-4'>Rule-2: loader or data fetch</h1>
            <div>
                2 ta system e data load kora jai <br />
                1. 'loader' use kore data fetch kora jai + 'component'<br />
                2. Suspense diye data fetch kora jai - 'element use kore'-
                shathe fallback o dewa jai - ei suspense use korte hole same file er upore promise ber kore jei file data gulo lagbe sekhane 'use' bebohar korte hobe
            </div>
        </div>
    );
};

export default Rule2;