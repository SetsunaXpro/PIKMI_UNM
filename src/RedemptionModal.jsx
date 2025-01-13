import React from 'react';

function RedemptionModal({
    reward,
    onConfirm,
    onCancel
  }) {
    return <div className="modal-overlay">
        <div className="modal-content">
          <div className="modal-header">
            <span className="modal-icon">{reward.icon}</span>
            <h2 className="modal-title">Confirm Redemption</h2>
          </div>
          
          <div className="modal-details">
            <div className="modal-detail-item">
              <span>Reward</span>
              <span>{reward.title}</span>
            </div>
            <div className="modal-detail-item">
              <span>Points Cost</span>
              <span>{reward.points} points</span>
            </div>
            <p style={{
            marginTop: '1rem',
            color: '#666'
          }}>
              Are you sure you want to redeem this reward? This action cannot be undone.
            </p>
          </div>
  
          <div className="modal-actions">
            <button onClick={onCancel} className="btn modal-cancel">Cancel</button>
            <button onClick={onConfirm} className="btn">Confirm Redemption</button>
          </div>
        </div>
      </div>;
  }

  export default RedemptionModal;