import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import AchievementForm from './AchievementForm';
import Leaderboard from './leaderboard.jsx';
import RewardsSection from './RewardsSection';
import Profile from './Profile';
import AchievementHistory from './AchievementHistory';
import RewardsPage from './RewardsPage';
import Login from './Login';
import './styles.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('isLoggedIn') === 'true');
  const [currentPage, setCurrentPage] = useState(
    window.location.pathname === '/profile'
      ? 'profile'
      : window.location.pathname === '/rewards'
      ? 'rewards'
      : window.location.pathname === '/achievements'
      ? 'achievements'
      : 'dashboard'
  );
  const [totalPoints, settotalPoints] = useState(1850); // Initialize user points

  // Update points
  const addPoints = (points) => {
    settotalPoints((prev) => prev + points);
  };

  const deductPoints = (points) => {
    settotalPoints((prev) => Math.max(0, prev - points)); // Ensure no negative points
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(
        window.location.pathname === '/profile'
          ? 'profile'
          : window.location.pathname === '/rewards'
          ? 'rewards'
          : window.location.pathname === '/achievements'
          ? 'achievements'
          : 'dashboard'
      );
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
        return <Profile totalPoints={totalPoints} addPoints={addPoints} />;
      case 'rewards':
        return <RewardsPage totalPoints={totalPoints} deductPoints={deductPoints} />;
      case 'achievements':
        return <AchievementHistory totalPoints={totalPoints} />;
      default:
        return (
          <div>
            <div className="dashboard">
              <AchievementForm addPoints={addPoints} />
              <Leaderboard />
            </div>
            <RewardsSection totalPoints={totalPoints} deductPoints={deductPoints} />
          </div>
        );
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <Navbar setCurrentPage={setCurrentPage} />
          <div className="main-content">{renderPage()}</div>
        </>
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
