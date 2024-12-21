import React from "react";

const Header = ({ setIsLoggedIn }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
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
    </header>
  );
};

export default Header;