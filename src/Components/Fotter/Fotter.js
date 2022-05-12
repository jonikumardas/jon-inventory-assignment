import React from 'react';

const Fotter = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
             <div className='container-fluid bg-black text-info mt-5 p-2'>
            <p className='text-center'>Copyright &copy; {year} All Rights Reserved </p>
        </div>
            
       
    );
};

export default Fotter;