import { useState, useRef } from "react";
import reset from "./assets/reset.svg";
import "./App.scss";

function App() {
  const [number, setNumber] = useState(0);
  const interval = useRef(null);

  function timer() {
    interval.current = setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 100);
      setNumber(randomNumber);
    }, 75);
  }

  function handleStart() {
    timer();
  }

  function handleStop() {
    clearInterval(interval.current);
  }

  function handleReset() {
    setNumber(0);
  }

  return (
    <div className="container">
      <div className="container-up">
        <div className="container-up-range">
          <p className="container-up-range-title">{number}</p>
          <div className="container-up-range-buttons">
            <button
              className="container-up-range-stop button"
              onClick={handleStop}
            >
              Stop
            </button>
            <button
              className="container-up-range-start button"
              onClick={handleStart}
            >
              Start
            </button>
          </div>
          <button className="container-up-range-reset" onClick={handleReset}>
            <img
              className="container-up-range-reset-image"
              src={reset}
              alt="reset"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
