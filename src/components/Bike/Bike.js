import React from 'react';
import './Bike.css'

const Bike = (props) => {
    const { name, Price, id } = props.data;
    return (
        <div className='bike'>
            <h3>Bike Name: {name}</h3>
            <small>Bike ID: {id}</small>
            <h3>Price: ${Price}</h3>
        </div>
    );
};

export default Bike;