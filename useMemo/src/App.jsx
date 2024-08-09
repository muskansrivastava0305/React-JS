import React, { useMemo } from 'react';

function computeExpensiveValue(a, b) {
  // Simulate an expensive computation
  console.log('Computing expensive value...');
  return a * b;
}

function MyComponent() {
  const [a, setA] = React.useState(2);
  const [b, setB] = React.useState(3);

  const expensiveValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

  return (
    <div>
      <p>Expensive value: {expensiveValue}</p>
      <button onClick={() => setA(a + 1)}>Increment A</button>
      <button onClick={() => setB(b + 1)}>Increment B</button>
    </div>
  );
}

export default computeExpensiveValue