import React from 'react';
import { AREAS, CATEGORIES } from '../constants';
/* eslint-disable react/prop-types */

function MealsFilter(props) {
  const handleCatFilterChange = (target) => {
    const filter = target.options[target.selectedIndex].text;
    props.handleCatFilterChange(filter);
  };

  const handleAreaFilterChange = (target) => {
    const filter = target.options[target.selectedIndex].text;
    props.handleAreaFilterChange(filter);
  };
  return (
    <div className="mb-4">
      <span className="ml-4" style={{ color: 'var(--gray)' }}>
        FILTER MEALS :
      </span>
      <select
        onChange={(e) => handleCatFilterChange(e.target)}
        className="ml-2"
        style={{
          height: '45px',
          color: 'var(--gray)',
          border: '1px solid #e8e8e8',
        }}
      >
        <option key={`DEFAULT_CATEGORY`} value="" selected disabled>
          Filter by category
        </option>
        {CATEGORIES.map((category) => (
          <option key={`${category}`}>{category}</option>
        ))}
      </select>
      <select
        onChange={(e) => handleAreaFilterChange(e.target)}
        className="ml-2"
        style={{
          height: '45px',
          color: 'var(--gray)',
          border: '1px solid #e8e8e8',
        }}
      >
        <option key={`DEFAULT_AREA`} value="" selected disabled>
          Filter by area
        </option>
        {AREAS.map((area) => (
          <option key={`${area}`}>{area}</option>
        ))}
      </select>
    </div>
  );
}

export default MealsFilter;
