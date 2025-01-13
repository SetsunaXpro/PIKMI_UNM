import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RedemptionModal from "./RedemptionModal.jsx";
import RewardSuccessModal from "./RewardSuccessModal.jsx";

function RewardsSection({ totalPoints, deductPoints }) {
  const [selectedReward, setSelectedReward] = React.useState(null);
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleRedeem = (reward) => {
    if (totalPoints >= reward.points) {
      setSelectedReward(reward);
      setErrorMessage(""); // Clear error message on successful selection
    } else {
      setErrorMessage("Insufficient points to redeem this reward.");
    }
  };

  const handleConfirmRedeem = () => {
    if (selectedReward && totalPoints >= selectedReward.points) {
      deductPoints(selectedReward.points);
      setShowSuccessModal(true); // Show success modal first
      // Do not clear selectedReward here
    }
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    setSelectedReward(null); // Clear reward only after closing the modal
  };

  const rewards = [
    {
      id: 1,
      title: "Netflix Premium",
      points: 2500,
      description: "1 month of Netflix Premium subscription with 4K streaming",
      icon: "🎬",
    },
    {
      id: 2,
      title: "Spotify Premium",
      points: 2000,
      description: "3 months of ad-free music streaming",
      icon: "🎵",
    },
    {
      id: 3,
      title: "Campus Cafe Voucher",
      points: 500,
      description: "$20 voucher for campus cafe",
      icon: "☕",
    },
    {
      id: 4,
      title: "Bookstore Discount",
      points: 1000,
      description: "25% off on your next purchase",
      icon: "📚",
    },
    {
      id: 5,
      title: "Premium Study Room",
      points: 1500,
      description: "24/7 access to premium study rooms for 1 month",
      icon: "📖",
    },
    {
      id: 6,
      title: "LinkedIn Premium",
      points: 3000,
      description: "3 months of LinkedIn Premium Career subscription",
      icon: "💼",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="rewards-section">
      <h2 className="form-title">Available Rewards</h2>
      <p>Available Points: {totalPoints}</p>{" "}
      {/* Dynamically display userPoints */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <Slider {...settings} className="rewards-carousel">
        {rewards.map((reward) => (
          <div key={reward.id} className="reward-card">
            <div>
              <div className="reward-icon">{reward.icon}</div>
              <h3 className="reward-title">{reward.title}</h3>
              <p className="reward-description">{reward.description}</p>
            </div>
            <div>
              <p className="reward-points">{reward.points} points</p>
              <button
                className="btn"
                onClick={() => handleRedeem(reward)}
                aria-label={`Redeem ${reward.title}`}
              >
                Redeem
              </button>
            </div>
          </div>
        ))}
      </Slider>
      {selectedReward && (
        <RedemptionModal
          reward={selectedReward}
          onConfirm={handleConfirmRedeem}
          onCancel={() => setSelectedReward(null)}
        />
      )}
      {showSuccessModal && selectedReward && (
        <RewardSuccessModal
          reward={selectedReward}
          onClose={handleCloseSuccessModal}
        />
      )}
    </div>
  );
}

export default RewardsSection;
