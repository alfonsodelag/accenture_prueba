import React, { useState } from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  }

  return (
    <>
      {!isLoggedIn && <Login onLogin={loginHandler} />}
      {isLoggedIn && <Home onLogout={logoutHandler} />}
    </>
  );
}

export default App;
