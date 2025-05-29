import React, { useRef } from 'react';

const Rule9 = () => {
    const nameRef = useRef('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        console.log(name);
    }
    return (
        <div>
            <h1 className='text-4xl font-bold my-4'>Rule-9: useRef()</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" ref={nameRef} name="name" id="" placeholder='Your name' className='border p-2 rounded-2xl mb-2' /> <br />
            <button className='btn btn-primary'>Submit</button>
            </form>
        </div>
    );
};

export default Rule9;