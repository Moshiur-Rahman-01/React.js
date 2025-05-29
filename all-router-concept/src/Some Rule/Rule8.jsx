import React from 'react';

const Rule8 = () => {
    const handleFormAction = (formData) => {
        console.log(formData.get('name'))
    }
    return (
        <div>
            <h1 className='text-4xl font-bold my-4'>Rule-8: Form Action()</h1>
            <form action={handleFormAction}>
            <input type="text" name="name" id="" placeholder='Your name' className='border p-2 rounded-2xl mb-2' /> <br />
            <button className='btn btn-primary'>Submit</button>
            </form>
        </div>
    );
};

export default Rule8;