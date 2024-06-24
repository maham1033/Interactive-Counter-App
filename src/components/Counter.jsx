import React, { useContext } from 'react';
import { counterContext } from '../context/Counter';

const Counter = () => {
  const { count, setCount } = useContext(counterContext);
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
