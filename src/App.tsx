import "./styles/App.css";
import React from "react";
import Header from "./components/Header";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Films from "./pages/Films";
import Contact from "./pages/Contact";
import About from "./pages/About";
import FilmPage from "./pages/FilmPage";
import { manosVersion } from "./manosVersion";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/films" element={<Films />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/films/:filmSection/:filmName" element={<FilmPage />} />
        </Routes>
        <Header />
      </Router>
      <div className="app-version">V {manosVersion}</div>
    </div>
  );
}

export default App;
