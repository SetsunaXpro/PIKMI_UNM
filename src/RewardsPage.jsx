import React, { useState } from 'react';
import RewardSuccessModal from './RewardSuccessModal';
import RedemptionModal from './RedemptionModal';
import Profile from './Profile';

function RewardsPage() {
  const [totalPoints] = React.useState(1850);
  const [selectedReward, setSelectedReward] = React.useState(null);
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);
  const handleRedeem = reward => {
    setSelectedReward(reward);
  };
  const handleConfirmRedeem = () => {
    setShowSuccessModal(true);
  };
  const categories = {
    subscriptions: {
      title: "Digital Subscriptions",
      rewards: [{
        title: "Netflix Premium Subscription",
        points: 2500,
        description: "1 month of Netflix Premium subscription with 4K streaming and 4 screens",
        icon: "🎬",
        features: ["4K Ultra HD", "4 screens at once", "Downloads available", "No ads"]
      }, {
        title: "Spotify Premium",
        points: 2000,
        description: "3 months of ad-free music streaming",
        icon: "🎵",
        features: ["Ad-free", "Offline mode", "High quality audio", "Unlimited skips"]
      }, {
        title: "LinkedIn Premium Career",
        points: 3000,
        description: "3 months of LinkedIn Premium Career subscription",
        icon: "💼",
        features: ["InMail credits", "See who viewed profile", "Applicant insights", "Interview prep"]
      }]
    },
    campus: {
      title: "Campus Benefits",
      rewards: [{
        title: "Premium Study Room Access",
        points: 1500,
        description: "24/7 access to premium study rooms for 1 month",
        icon: "📖",
        features: ["24/7 access", "Private space", "Whiteboard", "Dual monitors"]
      }, {
        title: "Campus Cafe Voucher",
        points: 500,
        description: "$20 voucher for campus cafe",
        icon: "☕",
        features: ["Valid for 3 months", "Any menu item", "Multiple visits", "No minimum purchase"]
      }, {
        title: "Bookstore Discount",
        points: 1000,
        description: "25% off on your next purchase at campus bookstore",
        icon: "📚",
        features: ["Textbooks included", "Valid for 6 months", "One-time use", "Max discount $100"]
      }]
    }
  };
  return <div>
      <div className="points-remaining">
        <div className="points-value">{totalPoints}</div>
        <div className="points-label">Points Available</div>
      </div>
      
      {Object.entries(categories).map(([key, category]) => <div key={key} className="rewards-category">
          <h2 className="category-title">{category.title}</h2>
          <div className="reward-grid">
            {category.rewards.map((reward, index) => <div key={index} className="reward-card-large">
                <div>
                  <div className="reward-icon">{reward.icon}</div>
                  <h3 className="reward-title">{reward.title}</h3>
                  <p className="reward-description">{reward.description}</p>
                  <div style={{
              margin: "1rem 0"
            }}>
                    {reward.features.map((feature, i) => <div key={i} style={{
                padding: "0.5rem",
                background: "var(--light)",
                margin: "0.5rem 0",
                borderRadius: "5px",
                fontSize: "0.9rem"
              }}>
                        {feature}
                      </div>)}
                  </div>
                </div>
                <div>
                  <p className="reward-points">{reward.points} points</p>
                  <button className="btn" disabled={totalPoints < reward.points} onClick={() => totalPoints >= reward.points && handleRedeem(reward)} style={{
              opacity: totalPoints < reward.points ? 0.5 : 1
            }}>
                    {totalPoints < reward.points ? 'Not Enough Points' : 'Redeem'}
                  </button>
                </div>
              </div>)}
          </div>
        </div>)}

      {selectedReward && <RedemptionModal reward={selectedReward} onConfirm={handleConfirmRedeem} onCancel={() => setSelectedReward(null)} />}
      {showSuccessModal && selectedReward && <RewardSuccessModal reward={selectedReward} onClose={() => {
      setShowSuccessModal(false);
      setSelectedReward(null);
    }} />}
    </div>;
}

export default RewardsPage;
