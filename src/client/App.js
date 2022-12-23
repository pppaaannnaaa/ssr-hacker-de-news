import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundry';

const App = ({ route }) => {
  return (
    <div>
      <Header />
      <div className="container">
        <ErrorBoundary>{renderRoutes(route.routes)}</ErrorBoundary>
      </div>
      <Footer />
    </div>
  );
};

App.propTypes = {
  route: PropTypes.objectOf(PropTypes.any),
};

App.defaultProps = {
  route: null,
};

export default {
  component: App,
};
