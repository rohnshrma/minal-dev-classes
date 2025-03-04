import React, { useState } from "react";

const Counter = () => {
  console.log("Counter running");
  var [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount(count + 1);
    console.log(count);
  };
  const decrementHandler = () => {
    setCount(count - 1);

    console.log(count);
  };
  return (
    <div className="counter">
      <h2>Counter : {count}</h2>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
  );
};

export default Counter;
