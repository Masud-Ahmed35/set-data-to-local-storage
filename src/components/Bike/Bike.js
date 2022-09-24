import React from 'react';
import { addToDb, removeFromDb } from '../../Utilities/FakeDb';
import './Bike.css'

const Bike = (props) => {
    const { name, Price, id } = props.data;

    const addToCart = (id) => {
        addToDb(id);
    }

    const removeFromCart = id => {
        removeFromDb(id);
    }

    return (
        <div className='bike'>
            <h3>Bike Name: {name}</h3>
            <small>Bike ID: {id}</small>
            <h3>Price: ${Price}</h3>
            <button onClick={() => addToCart(id)} className='button'>Add To Cart</button>
            <button onClick={() => removeFromCart(id)} className='button'>Remove</button>
        </div>
    );
};

export default Bike;