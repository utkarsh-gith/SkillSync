import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="SkillSync Logo" className="logo-img" />
        <h1>SkillSync</h1>
      </div>
      <nav>
        <ul className="menu">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/home">Dashboard</Link></li>
          <li><Link to="/home">Buddy Finder</Link></li>
          <li><Link to="/home">Settings</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;