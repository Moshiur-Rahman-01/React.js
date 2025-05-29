import React, { useState } from 'react';

const Rule10 = () => {
    const [error, setError] = useState('');
    const handlechange = (e) => {
        e.preventDefault();
        const name = e.target.value;
        console.log(name)
        if(name.lenght < 5) 
            return setError("less then 7");
    }
    return (
        <div>
            <h1 className='text-4xl font-bold my-4'>Rule-10: onChange()</h1>
            <form>
            <input type="text" onChange={handlechange} name="name" id="" placeholder='Your name' className='border p-2 rounded-2xl mb-2' /> <br />
            <button className='btn btn-primary'>Submit</button>
            </form>
            {
                <h1>{error}</h1>
            }
        </div>
    );
};

export default Rule10;