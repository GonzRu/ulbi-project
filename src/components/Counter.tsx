import React, {useState} from 'react';
import cl from './Counter.module.scss';

export const Counter = () => {

    const [count, setCount] = useState(0);

    const increment = () => setCount(count => count + 1);
    const decrement = () => setCount(count => count - 1);

    return (
        <div>
            <span>{count}</span>
            <button className={cl.button} onClick={increment}>increment</button>
            <button className={cl.button} onClick={decrement}>decrement</button>
        </div>
    );
};
