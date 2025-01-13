import React, { useState } from 'react';

function Register({ setIsLoggedIn, setShowLogin }) {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    userType: 'student',
    password: '',
    confirmPassword: '',
    major: '',
    university: '',
    studentId: '',
    occupation: '',
    education: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // In a real-world application, you would send `formData` to a server here.
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    window.history.pushState({}, '', '/');
  };

  return (
    <div className="register-container">
      <h1 className="login-title">Create Account</h1>
      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <select name="userType" value={formData.userType} onChange={handleChange}>
          <option value="student">Student</option>
          <option value="moderator">Moderator</option>
        </select>

        {formData.userType === 'student' && (
          <div className="section">
            <div className="section-title">Student Information</div>
            <input
              type="text"
              name="major"
              placeholder="Major"
              value={formData.major}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="university"
              placeholder="University"
              value={formData.university}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="studentId"
              placeholder="Student ID"
              value={formData.studentId}
              onChange={handleChange}
              required
            />
          </div>
        )}

        {formData.userType === 'moderator' && (
          <div className="section">
            <div className="section-title">Moderator Information</div>
            <input
              type="text"
              name="occupation"
              placeholder="Occupation"
              value={formData.occupation}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="education"
              placeholder="Education"
              value={formData.education}
              onChange={handleChange}
              required
            />
          </div>
        )}

        <button type="submit" className="btn">Create Account</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      <p className="register-link" onClick={() => setShowLogin(true)}>
        Already have an account? Login here
      </p>
    </div>
  );
}

export default Register;
