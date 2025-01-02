import React from 'react';

function AchievementForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Achievement submitted for verification! You will receive points once approved.');
    e.target.reset();
  };

  const validateGoogleDriveLink = (value) => {
    const drivePatterns = [/^https:\/\/drive\.google\.com\/file\/d\/.+\/view/, /^https:\/\/drive\.google\.com\/drive\/folders\/.+/, /^https:\/\/docs\.google\.com\/document\/d\/.+/];
    return drivePatterns.some((pattern) => pattern.test(value));
  };

  const handleLinkValidation = (e) => {
    const input = e.target;
    const isValid = validateGoogleDriveLink(input.value);
    if (input.value && !isValid) {
      input.setCustomValidity('Please enter a valid Google Drive link');
    } else {
      input.setCustomValidity('');
    }
  };

  return (
    <div className="achievement-form">
      <h2 className="form-title">Submit Achievement</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Achievement Title</label>
          <input type="text" id="title" required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" rows="4" required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="proof">Proof (Google Drive Link)</label>
          <input
            type="url"
            id="proof"
            placeholder="https://drive.google.com/file/d/..."
            required
            onChange={handleLinkValidation}
            pattern="https://.*"
          />
          <small>Please provide a Google Drive link to your achievement proof</small>
        </div>
        <button type="submit" className="btn">
          Submit for Verification
        </button>
      </form>
    </div>
  );
}

export default AchievementForm;
