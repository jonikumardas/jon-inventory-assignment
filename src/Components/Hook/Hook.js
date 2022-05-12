import React, { useEffect, useState } from 'react';

const Hook = () => {
    const [products, setProsuct] = useState([ ]);
        useEffect(() => {
            fetch('https://afternoon-bayou-59654.herokuapp.com/upload')
                .then(res => res.json())
                .then(data => setProsuct(data))
        }, []);
        return [products, setProsuct]
  
};

export default Hook;