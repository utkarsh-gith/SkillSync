import React, { useState } from "react";
import Auth from "./components/Auth";
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <>
          <Header setIsLoggedIn={setIsLoggedIn} />
          <Home />
        </>
      ) : (
        <Auth setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
};

export default App;