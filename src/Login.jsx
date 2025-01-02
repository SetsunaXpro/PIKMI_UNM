import React, { useState } from 'react';

function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      (username === 'demo' && password === 'password') ||
      (username === 'demo@uniquest.edu' && password === 'password') ||
      (username === 'admin' && password === 'admin') ||
      (username === 'admin@uniquest.edu' && password === 'admin')
    ) {
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
      window.history.pushState({}, '', '/');
    } else {
      setError('Invalid username/email or password');
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">UniQuest</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          placeholder="Username or Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn">
          Login
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default Login;
