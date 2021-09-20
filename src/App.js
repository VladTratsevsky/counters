import React from "react";
import { Counter } from "./components/Counter/Counter";
import { Watch } from "./components/ Watch/Watch";
import { Timer } from "./components/Timer/Timer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>task 1</h1>
      <Counter />
      <h1>task 2</h1>
      <Watch />
      <h1>task 3</h1>
      <Timer />
    </div>
  );
}

export default App;
