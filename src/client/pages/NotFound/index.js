import React from 'react';
// import PropTypes from 'prop-types';

const NotFound = () => {
  return (
    <div className="ui container" role="banner" aria-label="Error Page">
      <h1>Page Not Found!!!</h1>
      <p>Please try again!</p>
    </div>
  );
};

NotFound.propTypes = {};

NotFound.defaultProps = {};

export default {
  component: NotFound,
};
