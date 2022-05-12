import React from 'react';
import notFound from '../image/404img.jpg'

const NotFound = () => {
    return (
        <div className='mx-auto'>
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;