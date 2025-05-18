// src/components/BackgroundVideoWrapper.js
import React from 'react';
import './BackgroundVideoWrapper.css';

const BackgroundVideoWrapper = ({ children }) => {
  return (
    <div className="video-container">
      <video autoPlay muted loop className="video-bg">
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay-content">
        {children}
      </div>
    </div>
  );
};

export default BackgroundVideoWrapper;
