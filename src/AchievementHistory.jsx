import React from 'react';
import AchievementForm from './AchievementForm';

function AchievementHistory() {
  const achievements = [
    {
      date: '2023-10-15',
      title: 'Research Paper Publication',
      description: 'Published research paper in IEEE conference',
      points: 500,
      status: 'Verified',
    },
    {
      date: '2023-10-01',
      title: 'Coding Competition',
      description: 'Finalist in University Coding Competition',
      points: 300,
      status: 'Verified',
    },
    {
      date: '2023-09-28',
      title: 'Community Service',
      description: 'Volunteer work at local shelter',
      points: 200,
      status: 'Pending',
    },
    {
      date: '2023-09-15',
      title: 'Workshop Presentation',
      description: 'Conducted ML Workshop for juniors',
      points: 400,
      status: 'Verified',
    },
  ];

  return (
    <div className="achievement-container">
      <div className="dashboard">
        <AchievementForm />
      </div>
      <div>
        <h2 className="form-title">Achievement History</h2>
        <table className="achievement-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Achievement</th>
              <th>Description</th>
              <th>Points</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {achievements.map((achievement, index) => (
              <tr key={index}>
                <td>{achievement.date}</td>
                <td>{achievement.title}</td>
                <td>{achievement.description}</td>
                <td>{achievement.points}</td>
                <td>
                  <span className={`status-badge status-${achievement.status.toLowerCase()}`}>
                    {achievement.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AchievementHistory;
