import React from 'react';
import { FadeLoader } from 'react-spinners';

const LoadingData = () => {
    return (
        <div className='flex justify-center my-9'>
            <FadeLoader></FadeLoader>
        </div>
    );
};

export default LoadingData;