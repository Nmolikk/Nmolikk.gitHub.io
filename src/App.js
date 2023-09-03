import React, { useState } from "react";
import "./App.css";

function App() {
  const [timer, setTimer] = useState({ h: 0, m: 0, s: 0 });
  const [status, setStatus] = useState(0);
  const [interval, setInterv] = useState();

  let updateS = timer.s,
    updateM = timer.m,
    updateH = timer.h;

  const start = () => {
    runTimer();
    setInterv(setInterval(runTimer, 1000));
    setStatus(status + 1);
  };

  const stop = () => {
    clearInterval(interval);
    setStatus(2);
  };

  const resume = () => {
    runTimer();
    setInterv(setInterval(runTimer, 1000));
    setStatus(status - 1);
  };

  const reset = () => {
    clearInterval(interval);
    setTimer({ h: 0, m: 0, s: 0 });
    setStatus(0);
  };

  const runTimer = () => {
    if (updateS === 59) {
      updateM++;
      updateS = -1;
    }
    if (updateM === 59) {
      updateH++;
      updateM = 0;
    }

    updateS++;
    return setTimer({ h: updateH, m: updateM, s: updateS });
  };
  return (
    <div className="App">
      <h1>stopwatch</h1>
      <div className="Timer">
        <p> {timer.h >= 10 ? timer.h : "0" + timer.h}</p> :{" "}
        <p> {timer.m >= 10 ? timer.m : "0" + timer.m}</p> :{" "}
        <p> {timer.s >= 10 ? timer.s : "0" + timer.s}</p>
      </div>
      <div className="btns">
        {status === 0 ? (
          <button className="start" onClick={start}>
            START
          </button>
        ) : (
          ""
        )}
        {status === 1 ? (
          <div className="btns1">
            <button className="stop" onClick={stop}>
              STOP
            </button>
            <button className="reset" onClick={reset}>
              RESET
            </button>
          </div>
        ) : (
          ""
        )}

        {status === 2 ? (
          <div className="btns1">
            <button className="resume" onClick={resume}>
              RESUME
            </button>
            <button className="reset" onClick={reset}>
              RESET
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
