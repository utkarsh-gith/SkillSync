import React, { useEffect, useState } from "react";

const Header = ({ setIsLoggedIn }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check localStorage to see if darkMode was previously set
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    if (savedMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
    if (!darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>SkillSync</h1>
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Dashboard</li>
          <li>Buddy Finder</li>
          <li>Settings</li>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      </nav>
      <div className="theme-toggle">
        <button onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
};

export default Header;