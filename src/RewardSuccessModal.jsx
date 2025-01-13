import React from "react";

function RewardSuccessModal({ reward, onClose }) {
  // Generate a voucher code
  const voucherCode = React.useMemo(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 12; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
      if (i % 4 === 3 && i !== 11) code += '-';
    }
    return code;
  }, []);

  // Handle missing reward or icon gracefully
  if (!reward) {
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2 className="modal-title">No reward data available</h2>
          <div className="modal-actions" style={{ justifyContent: 'center' }}>
            <button onClick={onClose} className="btn">Close</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <span className="modal-icon">{reward.icon || '🎁'}</span>
          <h2 className="modal-title">Redemption Successful!</h2>
        </div>

        <div className="modal-details">
          <div className="modal-detail-item">
            <span>Reward</span>
            <span>{reward.title}</span>
          </div>
          <div className="modal-detail-item">
            <span>Points Spent</span>
            <span>{reward.points} points</span>
          </div>
          <div
            className="modal-detail-item"
            style={{
              background: 'var(--light)',
              padding: '1rem',
              marginTop: '1rem',
            }}
          >
            <span>Your Voucher Code:</span>
            <span
              style={{
                fontWeight: 'bold',
                letterSpacing: '1px',
              }}
            >
              {voucherCode}
            </span>
          </div>
          <p
            style={{
              marginTop: '1rem',
              color: '#666',
              textAlign: 'center',
            }}
          >
            Please save this code. You will need it to claim your reward.
          </p>
        </div>

        <div className="modal-actions" style={{ justifyContent: 'center' }}>
          <button onClick={onClose} className="btn">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default RewardSuccessModal;
