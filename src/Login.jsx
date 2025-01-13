import React, { useState } from 'react';
import Register from './Register';


function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showLogin, setShowLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      (username === 'demo' && password === 'password') ||
      (username === 'admin' && password === 'admin')
    ) {
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
      window.history.pushState({}, '', '/');
    } else {
      setError('Invalid username or password');
    }
  };

  if (!showLogin) {
    return <Register setIsLoggedIn={setIsLoggedIn} setShowLogin={setShowLogin} />;
  }

  return (
    <div className="login-container">
      <h1 className="login-title">UniQuest</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          placeholder="Username"
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
      <p className="register-link" onClick={() => setShowLogin(false)}>
        Don't have an account? Register here
      </p>
    </div>
  );
}

export default Login;
