import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IntroductionPage from './Components/IntroductionPage';
import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
      <Routes>
        <Route path="/" element={<IntroductionPage />} />
        <Route
          path="/login"
          element={<LoginPage setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/home"
          element={isLoggedIn ? <HomePage /> : <IntroductionPage />}
        />
      </Routes>
  );
};

export default App;
