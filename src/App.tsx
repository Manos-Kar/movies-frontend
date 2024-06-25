import "./App.css";
import React from "react";
import underConstruction from "./resources/images/under-construction-gif-11.gif";
import { manosVersion } from "./manosVersion";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <div className="App-logo-div">
          <img src={underConstruction} className="App-logo" alt="logo" />
        </div>
        <p className="title">Manos Karystinos V {manosVersion}</p>
        <p className="subtitle">FILMS</p>
      </header>
    </div>
  );
}

export default App;
