import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Bike from '../Bike/Bike';

const Bikes = () => {

    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBikes(data))

    }, [])

    return (
        <div>
            <h1>---------Welcome To My Bike Store-------</h1>
            {
                bikes.map(bike => <Bike
                    key={bike.id}
                    data={bike}
                ></Bike>)
            }
        </div>
    );
};

export default Bikes;