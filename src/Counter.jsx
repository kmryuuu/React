import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const handlePlusNum = () => {
    setCount(count + 1);
  };

  const handleMinusNum = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div>{count}</div>
      <button onClick={handlePlusNum}>+ 1</button>
      <button onClick={handleMinusNum}>- 1</button>
    </>
  );
}
