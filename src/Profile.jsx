import React from 'react';
import LevelIndicator from './levelIndicator.jsx';

function Profile() {
  const [userData] = React.useState({
    name: 'John Doe',
    studentId: '2023001',
    major: 'Computer Science',
    totalPoints: 1850,
    completedAchievements: 12,
    pendingVerification: 2,
    rewardsRedeemed: 5,
    achievements: [
      {
        title: 'Research Paper Publication',
        description: 'Published research paper in IEEE conference',
        points: 500,
        date: '2023-09-15',
        status: 'Verified',
      },
      {
        title: 'Hackathon Winner',
        description: 'First place in University Hackathon',
        points: 300,
        date: '2023-08-30',
        status: 'Verified',
      },
      {
        title: 'Workshop Completion',
        description: 'Completed AI/ML Workshop',
        points: 150,
        date: '2023-08-20',
        status: 'Verified',
      },
    ],
  });

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      window.dispatchEvent(new Event('logout'));
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">👤</div>
        <div className="profile-info">
          <h1 className="profile-name">{userData.name}</h1>
          <p>Student ID: {userData.studentId}</p>
          <p>Major: {userData.major}</p>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </div>

      <LevelIndicator points={userData.totalPoints} />

      <div className="profile-stats">
        <div className="stat-card">
          <div className="stat-value">{userData.totalPoints}</div>
          <div className="stat-label">Total Points</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{userData.completedAchievements}</div>
          <div className="stat-label">Achievements</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{userData.pendingVerification}</div>
          <div className="stat-label">Pending</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{userData.rewardsRedeemed}</div>
          <div className="stat-label">Rewards Redeemed</div>
        </div>
      </div>

      <h2 className="form-title">Recent Achievements</h2>
      <ul className="achievements-list">
        {userData.achievements.map((achievement, index) => (
          <li key={index} className="achievement-item">
            <div className="achievement-info">
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
            <div className="achievement-meta">
              <div className="points-badge">{achievement.points} pts</div>
              <div className="achievement-date">{achievement.date}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
