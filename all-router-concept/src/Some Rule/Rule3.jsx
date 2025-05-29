import React from 'react';
import { useNavigation } from 'react-router';

const Rule3 = () => {
    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);
    console.log(isNavigating)
    return (
        <div>
            <h1 className='text-4xl font-bold my-4'>Rule-3: useNavigate()</h1>
            <button className='btn btn-primary'>click me</button>
            {
                isNavigating && <h1>Loading...</h1>
            }
        </div>
    );
};

export default Rule3;