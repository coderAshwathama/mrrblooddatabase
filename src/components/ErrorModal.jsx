import React from "react";

function ErrorModal({ isOpen, onClose, error }) {
  if (!isOpen || !error) return null;

  const getErrorIcon = () => {
    switch (error.type) {
      case "duplicate-exact":
        return "⚠️";
      case "duplicate-phone":
        return "🔔";
      case "duplicate-name":
        return "📋";
      default:
        return "❌";
    }
  };

  const getErrorTitle = () => {
    switch (error.type) {
      case "duplicate-exact":
        return "Entry Already Exists";
      case "duplicate-phone":
        return "Phone Number Already Registered";
      case "duplicate-name":
        return "Name Already in Database";
      default:
        return "Error";
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content error-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close error modal"
        >
          ✕
        </button>

        <div className="error-modal-header">
          <div className="error-icon">{getErrorIcon()}</div>
          <h2>{getErrorTitle()}</h2>
        </div>

        <div className="error-modal-body">
          <p className="error-message-main">{error.message}</p>

          {error.details && (
            <div className="error-details">
              {error.details.matchedDonor && (
                <div className="matched-donor-info">
                  <p>
                    <strong>Found in database:</strong>
                  </p>
                  <ul>
                    <li>
                      <strong>Name:</strong>{" "}
                      {error.details.matchedDonor.fullName}
                    </li>
                    <li>
                      <strong>Phone:</strong> {error.details.matchedDonor.phone}
                    </li>
                    {error.details.matchedDonor.phoneSecondary && (
                      <li>
                        <strong>Secondary:</strong>{" "}
                        {error.details.matchedDonor.phoneSecondary}
                      </li>
                    )}
                    <li>
                      <strong>Blood Group:</strong>{" "}
                      {error.details.matchedDonor.bloodGroup}
                    </li>
                    <li>
                      <strong>Location:</strong>{" "}
                      {error.details.matchedDonor.district},{" "}
                      {error.details.matchedDonor.province}
                    </li>
                  </ul>
                </div>
              )}

              {error.details.suggestion && (
                <div className="error-suggestion">
                  <strong>💡 Suggestion:</strong> {error.details.suggestion}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="error-modal-footer">
          <button className="btn-error-close" onClick={onClose}>
            Okay, I Understand
          </button>
        </div>
      </div>
    </div>
  );
}

export default ErrorModal;
