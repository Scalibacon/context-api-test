import React, { useContext } from 'react';
import './style.css';
import Father from '../Father';
import { CountContext } from '../../contexts/CountContext';

function Grandpa(){
    const { count } = useContext(CountContext);
    return (
        <div className='grandpa'>
            <h3>Contador: {count} </h3>
            <Father/>
        </div>       
    )
}

export default Grandpa;