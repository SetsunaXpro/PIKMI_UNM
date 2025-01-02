import React from 'react';

function LevelIndicator({ points }) {
  const level = Math.floor(points / 500) + 1;
  const currentLevelPoints = points % 500;
  const progressPercent = (currentLevelPoints / 500) * 100;

  const levelTitles = {
    1: 'Novice Explorer',
    2: 'Rising Star',
    3: 'Achievement Hunter',
    4: 'Quest Master',
    5: 'Elite Achiever',
    6: 'Legend',
    7: 'Grand Master',
    8: 'Achievement Sage',
    9: 'Pinnacle Seeker',
    10: 'Ultimate Achiever',
  };

  const currentTitle = levelTitles[level] || `Level ${level} Master`;

  return (
    <div className="level-indicator">
      <div className="level-header">
        <div className="level-number">Level {level}</div>
        <div className="level-title">{currentTitle}</div>
      </div>
      <div className="level-progress-container">
        <div className="level-progress-bar" style={{ width: `${progressPercent}%` }}></div>
        <div className="level-progress-text">
          {currentLevelPoints} / 500 points to Level {level + 1}
        </div>
      </div>
    </div>
  );
}

export default LevelIndicator;
