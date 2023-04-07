import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [text, setText] = useState([]);

  const getAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    setText(data);
  };

  useEffect(() => {
    getAdvice();
  }, []);
  console.log(text.slip.id);
  return (
    <div className="App">
      <div className="background-card">
        <div className="main-card-content-container">
          <p>Advice # {text.slip.id}</p>
          <h2>{text.slip.advice}</h2>
          <div className="visual-design">
            <hr />
            <div className="rectangle-content-container">
              <div className="rectangle-container"></div>
              <div className="rectangle-container"></div>
            </div>
            <hr />
          </div>
          <div onClick={getAdvice} className="button-container">
            <button className="img-container">
              <img src="/icon-dice.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
