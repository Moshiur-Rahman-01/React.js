import React from 'react';

const Rule7 = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        console.log(name);
    }
    return (
        <div>
            <h1 className='text-4xl font-bold my-4'>Rule-7: onSubmit()</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" placeholder='Your name' className='border p-2 rounded-2xl mb-2' /> <br />
                <button className='btn btn-primary'>Submit</button>
            </form>
        </div>
    );
};

export default Rule7;