import React from 'react';
import PropTypes from 'prop-types';
import { AREAS, CATEGORIES } from '../constants';
/* eslint-disable arrow-parens */
function MealsFilter(props) {
  const { filter } = props;
  const handleCatFilterChange = (target) => {
    const filter = target.options[target.selectedIndex].text;
    props.handleCatFilterChange(filter);
  };

  const handleAreaFilterChange = (target) => {
    const filter = target.options[target.selectedIndex].text;
    props.handleAreaFilterChange(filter);
  };
  return (
    <div className="mb-4 text-center">
      <span className="ml-4 text-white">FILTER MEALS :</span>
      <select
        defaultValue={filter.category}
        onChange={(e) => handleCatFilterChange(e.target)}
        className="ml-2"
        style={{
          height: '45px',
          color: 'var(--gray)',
          border: '1px solid #e8e8e8',
        }}
      >
        <option key="DEFAULT_CATEGORY" value="DEFAULT_CATEGORY" disabled>
          Filter by category
        </option>
        {CATEGORIES.map((category) => (
          <option key={`${category}`} value={`${category}`}>
            {category}
          </option>
        ))}
      </select>
      <select
        defaultValue={filter.area}
        onChange={(e) => handleAreaFilterChange(e.target)}
        className="ml-2"
        style={{
          height: '45px',
          color: 'var(--gray)',
          border: '1px solid #e8e8e8',
        }}
      >
        <option key="DEFAULT_AREA" value="DEFAULT_AREA" disabled>
          Filter by area
        </option>
        {AREAS.map((area) => (
          <option key={`${area}`}>{area}</option>
        ))}
      </select>
    </div>
  );
}

MealsFilter.propTypes = {
  filter: PropTypes.shape({
    category: PropTypes.string,
    area: PropTypes.string,
  }),
  handleCatFilterChange: PropTypes.func,
  handleAreaFilterChange: PropTypes.func,
};

MealsFilter.defaultProps = {
  filter: {
    category: 'All categories',
    area: 'All areas',
  },
  handleCatFilterChange: (target) => target,
  handleAreaFilterChange: (target) => target,
};

export default MealsFilter;
