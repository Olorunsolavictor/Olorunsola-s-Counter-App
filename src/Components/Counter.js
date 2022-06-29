import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Olorunsola's Counter App</h1>
      <button
        className="add"
        id="increase-button"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
      <button
        className="reset"
        id="reset-button"
        onClick={() => setCount(count * 0)}
      >
        Reset
      </button>
      <button
        className="subtract"
        id="decrease-button"
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      <p id="counter-value">{count}</p>
    </div>
  );
}

export default Counter;
