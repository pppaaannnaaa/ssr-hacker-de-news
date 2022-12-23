import React from 'react';
import { tableLoader, loaderOverlay } from '../../utils/style';

const LoaderOverlay = () => {
  return (
    <div style={loaderOverlay} role="main" aria-label="Loader Overlay Page">
      <div style={tableLoader}>
        <div className="preloader-wrapper active">
          <div className="spinner-layer spinner-red-only">
            <div className="circle-clipper left">
              <div className="circle" />
            </div>
            <div className="gap-patch">
              <div className="circle" />
            </div>
            <div className="circle-clipper right">
              <div className="circle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoaderOverlay;
