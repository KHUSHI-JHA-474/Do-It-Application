import React from 'react';
import { useNavigate } from 'react-router-dom'; // Use navigate to redirect to login page
import './IntroductionPage.css';  // Import the CSS for the Introduction Page

const IntroductionPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');  // Redirect to the login page when 'Get Started' is clicked
  };

  const handleLogin = () => {
    navigate('/login');  // Redirect to the login page when 'Login' is clicked
  };

  
  return (
    <div className="intro-page">
      <header className="header">
        <div className="logo">DoIt</div>
        <button className="login-btn" onClick={() => navigate('/login')}>Login</button>
      </header>
      <main className="content">
        <h1 className="Quote">Plan your Work and Work your Plan with DoIt</h1>
	<blockquote className="quote">
          "The journey of a thousand tasks begins with a single click."
        </blockquote>
        <p className="description">
          Welcome to DoIt! Manage all your tasks efficiently and stay on top of things.
        </p>
        <button className="get-started-btn" onClick={handleGetStarted}>
          Get Started
        </button>
      </main>
    </div>
  );
};

export default IntroductionPage;
