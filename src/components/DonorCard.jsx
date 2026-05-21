import React from "react";

function DonorCard({ donor }) {
  return (
    <div className="donor-card">
      <div className="donor-header">
        <div>
          <h3 className="donor-name">{donor.fullName}</h3>
        </div>
        <div className="blood-group-badge">{donor.bloodGroup}</div>
      </div>

      <div className="donor-info">
        <div className="info-row">
          <span className="info-label">📍 Location:</span>
          <span className="info-value">
            {donor.district}, {donor.province}
          </span>
        </div>

        <div className="info-row">
          <span className="info-label">🏠 Address:</span>
          <span className="info-value">{donor.address}</span>
        </div>

        <div className="divider"></div>

        <div className="info-row">
          <span className="info-label">📞 Phone:</span>
          <span className="info-value">
            <a
              href={`tel:${donor.phone}`}
              style={{
                color: "#DC143C",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              {donor.phone}
            </a>
          </span>
        </div>

        <div className="info-row">
          <span className="info-label">🎂 Born:</span>
          <span className="info-value">{donor.birthYear}</span>
        </div>
      </div>
    </div>
  );
}

export default DonorCard;
