import React, { useState } from 'react';
import styles from './Num.module.css';
export default function Num() {
    const [count, setCount] = useState(0);
    return (
        <div className={styles.counterContainer}>
            <h1>Counter</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}