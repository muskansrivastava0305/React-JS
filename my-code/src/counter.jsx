
import React, { useState, useEffect } from 'react';

function Counter(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Mounted!');
    return () => {
      console.log('Unmounted!');
    };
  }, []);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <p>Passed prop: {props.name}</p>
    </div>
  );
}

export default Counter;