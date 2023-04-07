import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState([]);

  const getAdvice = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
      },
    };
    const res = await fetch(
      "https://fortune-cookie2.p.rapidapi.com/fortune",
      options
    );
    const data = await res.json();

    setText(data.answer);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="App">
      <div className="background-card">
        <div className="main-card-content-container">
          <p>Fortune # {Math.floor(Math.random() * 100)}</p>
          <h2>{text}</h2>
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
