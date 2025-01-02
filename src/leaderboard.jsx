import React from 'react';

function Leaderboard() {
  const leaders = [
    { name: 'Sarah Johnson', points: 2500 },
    { name: 'Michael Chen', points: 2100 },
    { name: 'Emma Williams', points: 1950 },
  ];

  return (
    <div className="leaderboard">
      <h2 className="leaderboard-title">Top Achievers</h2>
      <ul className="leaderboard-list">
        {leaders.map((leader, index) => (
          <li key={index} className="leaderboard-item">
            <div className="leader-info">
              <span>{index + 1}. {leader.name}</span>
              <small className="level-tag">Level {Math.floor(leader.points / 500) + 1}</small>
            </div>
            <span className="points-badge">{leader.points} pts</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
