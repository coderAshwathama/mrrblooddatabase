import React from "react";
import DonorCard from "./DonorCard";

function DonorList({ donors }) {
  return (
    <div className="results-container">
      <div className="results-header">
        <h2 className="results-title">Donors Found</h2>
        <span className="results-count">
          {donors.length} donor{donors.length !== 1 ? "s" : ""}
        </span>
      </div>

      {donors.length > 0 ? (
        <div className="donors-grid">
          {donors.map((donor) => (
            <DonorCard key={donor.id} donor={donor} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-state-icon">🔍</div>
          <h3>No Donors Found</h3>
          <p>
            Try adjusting your search filters to find available donors in your
            area.
          </p>
        </div>
      )}
    </div>
  );
}

export default DonorList;
