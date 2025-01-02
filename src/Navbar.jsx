import React from 'react';

function Navbar({ setCurrentPage }) {
  return (
    <nav className="navbar">
      <div className="logo">UniQuest</div>
      <div className="nav-links">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage('dashboard');
            window.history.pushState({}, '', '/');
          }}
        >
          Dashboard
        </a>
        <a
          href="/achievements"
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage('achievements');
            window.history.pushState({}, '', '/achievements');
          }}
        >
          Achievements
        </a>
        <a
          href="/rewards"
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage('rewards');
            window.history.pushState({}, '', '/rewards');
          }}
        >
          Rewards
        </a>
        <a
          href="/profile"
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage('profile');
            window.history.pushState({}, '', '/profile');
          }}
        >
          Profile
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
