// Parent.js
import React, { useState, useMemo } from 'react';
import MemoChild from './MemoChild';

function expensiveCalculation(input) {
  console.log(`[expensiveCalculation] Dijalankan untuk value=${input}`);
  let result = 0;
  for (let i = 0; i < 5_000_000; i++) {
    result += Math.sin(input + i % 360) * Math.cos(input + (i % 180));
  }
  return result.toFixed(2);
}

function Calculation() {
  const [count, setCount] = useState(1);
  const [other, setOther] = useState(0);

  // pakai useMemo untuk cache hasil hitungan mahal
  const memoizedResult = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  return (
    <div>
      <h2>Parent dengan hitungan mahal</h2>
      <p>Count: {count}</p>
      <p>Other: {other}</p>

      <button onClick={() => setCount(count + 1)}>Tambah Count</button>
      <button onClick={() => setOther(other + 1)}>Tambah Other</button>

      <MemoChild result={memoizedResult} />
    </div>
  );
}

export default Calculation;
