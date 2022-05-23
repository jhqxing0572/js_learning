import './style.css';
import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import NavBar from './components/NavBar';

export default function App() {
  const [isShowLogin, setIsShowLogin] = useState(false);

  const handleLoginClick = () => {
    setIsShowLogin(isShowLogin => !isShowLogin);
  };

  return (
    <div className="App">
      <NavBar handleLoginClick={handleLoginClick} />
      <LoginForm isShowLogin={isShowLogin} />
    </div>
  );
}
