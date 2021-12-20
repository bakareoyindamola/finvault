import React from 'react';
import PropTypes from 'prop-types';

function ArrowSVG({ fill }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.5 11.25L9 6.75L4.5 11.25"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ArrowSVG;

ArrowSVG.propTypes = {
  fill: PropTypes.string.isRequired
}
