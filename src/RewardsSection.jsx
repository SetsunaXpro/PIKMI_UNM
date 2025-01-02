import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function RewardsSection() {
  const rewards = [
    {
      title: 'Netflix Premium Subscription',
      points: 2500,
      description: '1 month of Netflix Premium subscription with 4K streaming',
      icon: '🎬',
    },
    {
      title: 'Spotify Premium',
      points: 2000,
      description: '3 months of ad-free music streaming',
      icon: '🎵',
    },
    {
      title: 'Campus Cafe Voucher',
      points: 500,
      description: '$20 voucher for campus cafe',
      icon: '☕',
    },
    {
      title: 'Bookstore Discount',
      points: 1000,
      description: '25% off on your next purchase',
      icon: '📚',
    },
    {
      title: 'Premium Study Room',
      points: 1500,
      description: '24/7 access to premium study rooms for 1 month',
      icon: '📖',
    },
    {
      title: 'LinkedIn Premium',
      points: 3000,
      description: '3 months of LinkedIn Premium Career subscription',
      icon: '💼',
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
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="rewards-section">
      <h2 className="form-title">Available Rewards</h2>
      <Slider {...settings} className="rewards-carousel">
        {rewards.map((reward, index) => (
          <div key={index} className="reward-card">
            <div>
              <div className="reward-icon">{reward.icon}</div>
              <h3 className="reward-title">{reward.title}</h3>
              <p className="reward-description">{reward.description}</p>
            </div>
            <div>
              <p className="reward-points">{reward.points} points</p>
              <button className="btn">Redeem</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default RewardsSection;
