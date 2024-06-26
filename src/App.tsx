import "./styles/App.css";
import React from "react";
import Header from "./components/Header";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>

      <Header />
    </div>
  );
}

export default App;
