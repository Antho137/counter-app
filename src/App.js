import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const increment =  () => {
    setCount(count + 1);
  };

  const decrement =  () => {
    setCount(count - 1);
  };

  const reset =  () => {
    setCount(0);
  };

  return (
    <div className="App">
      <div className="app-header">
        <h1>Counter App</h1>
      </div>
      <div className="counter">
        <div className="count">
          <p>{count}</p>
        </div>
        <div className="counter-btn">
          <button className="btn" onClick={increment}>+</button>
          <button className="btn" onClick={decrement}>-</button>
        </div>
        <div className="counter-reset">
          <button className="btn" onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default App;