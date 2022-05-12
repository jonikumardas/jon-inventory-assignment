import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Hook from '../Hook/Hook';
const Order = () => {
    const { orderId } = useParams();
    return (
        <div>
            <h3>this is your order:{orderId}</h3>
          
        </div>
    );
};

export default Order;