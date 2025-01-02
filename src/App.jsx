import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import AchievementForm from './AchievementForm';
import Leaderboard from './Leaderboard';
import RewardsSection from './RewardsSection';
import Profile from './Profile';
import AchievementHistory from './AchievementHistory';
import RewardsPage from './RewardsPage';
import Login from './Login';
import LevelIndicator from './LevelIndicator';
import './styles.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('isLoggedIn') === 'true');
  const [currentPage, setCurrentPage] = useState(window.location.pathname === '/profile' ? 'profile' : window.location.pathname === '/rewards' ? 'rewards' : window.location.pathname === '/achievements' ? 'achievements' : 'dashboard');

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(window.location.pathname === '/profile' ? 'profile' : window.location.pathname === '/rewards' ? 'rewards' : window.location.pathname === '/achievements' ? 'achievements' : 'dashboard');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const handleLogout = () => {
      setIsLoggedIn(false);
      localStorage.removeItem('isLoggedIn');
    };
    window.addEventListener('logout', handleLogout);
    return () => window.removeEventListener('logout', handleLogout);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'profile':
        return <Profile />;
      case 'rewards':
        return <RewardsPage />;
      case 'achievements':
        return <AchievementHistory />;
      default:
        return (
          <div>
            <div className="dashboard">
              <AchievementForm />
              <Leaderboard />
            </div>
            <RewardsSection />
          </div>
        );
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <Navbar setCurrentPage={setCurrentPage} />
          <div className="main-content">
            {renderPage()}
          </div>
        </>
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
