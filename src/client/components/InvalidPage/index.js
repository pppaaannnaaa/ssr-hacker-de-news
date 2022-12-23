import React from 'react';
import Head from '../Head';

const InvalidPage = () => {
  return (
    <div role="main" aria-label="Invalid Page">
      <Head />
      <div className="row">
        <div className="section">
          <h4>Invalid Page Number</h4>
        </div>
      </div>
    </div>
  );
};

export default InvalidPage;
