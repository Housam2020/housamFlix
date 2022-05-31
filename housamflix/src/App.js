import "./App.css";
import Row from "./Row";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(() => {
    return 4;
  });

  const [theme, setTheme] = useState(() => {
    return 4;
  });

  Math.random;

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div className="App">
      <hi1>my project!!</hi1>
      <Row title="NETFLIX ORIGINALS"></Row>
      <Row title="Trending Now"></Row>

      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;
