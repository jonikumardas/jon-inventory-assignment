import React from 'react';
import AllProduct from '../AllProduct/AllProduct';
import Hook from '../Hook/Hook';

const Product = () => {
    const [products] = Hook([]);
    return (
        <div className='bg-gray'>
            <h1 className='text-center text-gray'>All Product </h1>
            <div className="row bg-grey">
                {
                    products.map(product => <AllProduct key={product._id}
                    product={product}
                    ></AllProduct>)
                }
            </div>
        </div>
    );
};

export default Product;