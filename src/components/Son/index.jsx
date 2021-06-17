import React, { useContext } from 'react';
import './style.css';
import { CountContext } from '../../contexts/CountContext';

function Son(){
    const { setCount } = useContext(CountContext);
    return (
        <div className='son'>
            <button onClick={e => setCount(prev => prev + 1) }>Contador++</button>
        </div>
    )
}

export default Son;