import React from "react";

const Filters = ({ selectedFilter, onFilterChange }) => {
  const filters = ["ALL", "STARTER", "MAIN COURSE", "DESSERT"];

  return (
    <div className="filters">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`filter-btn ${selectedFilter === filter ? "active" : ""}`}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Filters;
