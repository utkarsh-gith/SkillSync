import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Goals from "./components/Goals";
import Home from "./components/Home";
import "./App.css";

function App() {
  const location = useLocation();

  const showHeader = location.pathname !== "/" && location.pathname !== "/goals";

  return (
    <div className="App">
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;