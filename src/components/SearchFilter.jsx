import React from "react";

function SearchFilter({
  filters,
  provinces,
  districts,
  bloodGroups,
  onFilterChange,
  onReset,
}) {
  return (
    <div className="search-container">
      <h2 className="search-title">Search for Blood Donors</h2>

      <div className="search-filters">
        <div className="filter-group">
          <label htmlFor="province">Province</label>
          <select
            id="province"
            name="province"
            value={filters.province}
            onChange={onFilterChange}
          >
            <option value="">All Provinces</option>
            {provinces.map((province) => (
              <option key={province} value={province}>
                {province}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="district">District</label>
          <select
            id="district"
            name="district"
            value={filters.district}
            onChange={onFilterChange}
          >
            <option value="">All Districts</option>
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="bloodGroup">Blood Group</label>
          <select
            id="bloodGroup"
            name="bloodGroup"
            value={filters.bloodGroup}
            onChange={onFilterChange}
          >
            <option value="">All Blood Groups</option>
            {bloodGroups.map((group) => (
              <option key={group} value={group}>
                {group}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="searchName">Donor Name</label>
          <input
            id="searchName"
            type="text"
            name="searchName"
            placeholder="Search by name..."
            value={filters.searchName}
            onChange={onFilterChange}
          />
        </div>
      </div>

      <div className="button-group">
        <button
          className="btn btn-search"
          onClick={() => {}}
          title="Search results update automatically"
        >
          Search
        </button>
        <button className="btn btn-reset" onClick={onReset}>
          Reset Filters
        </button>
      </div>
    </div>
  );
}

export default SearchFilter;
