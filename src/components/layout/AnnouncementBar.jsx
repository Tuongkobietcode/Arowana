// File: src/components/layout/AnnouncementBar.jsx

import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="announcement-bar">
      <div className="announcement-bar-content">
        <p>
          <span className='font-semibold'>ABG LG991</span> Trimmer 50% off
        </p>
        <a href="#" className="shop-now-btn">
          Shop Now
        </a>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="close-btn"
        aria-label="Close announcement bar"
      >
        <FiX size={20} />
      </button>
    </div>
  );
};

export default AnnouncementBar;