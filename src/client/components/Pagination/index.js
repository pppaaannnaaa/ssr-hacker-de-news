/* eslint-disable jsx-a11y/no-interactive-element-to-noninteractive-role */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { constant } from '../../constant';

const Pagination = (props) => {
  const { pageNumber, isLoading } = props;
  return (
    <div className="carousel-container" style={{ paddingTop: '20px', textAlign: 'right' }}>
      <Link
        to={`/page/${pageNumber - 1}`}
        role="navigation"
        aria-label="Previous Button"
        disabled={pageNumber === 0 || isLoading}
        name={constant.PREV}
        style={{ marginRight: '10px' }}
        type="button"
        className="btn blue darken-4"
      >
        Previous
      </Link>
      <Link
        to={`/page/${pageNumber + 1}`}
        role="navigation"
        aria-label="Next Button"
        disabled={isLoading}
        name={constant.NEXT}
        type="button"
        className="btn blue darken-4"
      >
        Next
      </Link>
    </div>
  );
};

Pagination.propTypes = {
  pageNumber: PropTypes.number,
  isLoading: PropTypes.bool,
};

Pagination.defaultProps = {
  pageNumber: 0,
  isLoading: false,
};

export default Pagination;
