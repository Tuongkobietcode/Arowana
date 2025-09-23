import React from 'react';
import AnnouncementBar from './AnnouncementBar';
import NavBar from './NavBar';
import './Header.css'; 
import { useState, useEffect } from 'react';

const Header = () => {
    const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={isSticky ? 'sticky' : ''}>
        <AnnouncementBar />
        <NavBar />
    </header>
    
  );
};

export default Header;