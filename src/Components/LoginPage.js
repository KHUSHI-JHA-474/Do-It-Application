import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'

const LoginPage = ({ setIsLoggedIn }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      setIsLoggedIn(true);
      navigate('/home');  // Navigate to HomePage after successful login
    } else {
      alert('Please enter valid credentials');
    }
  };

  const handleSignUp = () => {
    if (username && password && email) {
      alert('Sign Up Successful! Please Log In');
      setIsSignUp(false);
    } else {
      alert('Please enter all fields');
    }
  };

  return (
    <div>
      <h2>{isSignUp ? 'Sign Up' : 'Login'} Page</h2>

      {isSignUp && (
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      )}

      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        {isSignUp ? (
          <button onClick={handleSignUp}>Sign Up</button>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      </div>

      <div>
        <button onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? 'Already have an account? Log in' : 'Create an account'}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
