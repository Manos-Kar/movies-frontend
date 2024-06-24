import "./App.css";
import React from "react";
import underConstruction from "./resources/images/under-construction-gif-11.gif";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={underConstruction} className="App-logo" alt="logo" />
        <p className="title">Manos Karystinos</p>
        <p className="subtitle">movies</p>
      </header>
    </div>
  );
}

export default App;
