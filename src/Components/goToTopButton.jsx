import React, { useState, useEffect } from 'react';
import '../Styles/GoToTopButton.scss';
import "material-icons/iconfont/filled.css";

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Set isVisible state based on scroll position
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add event listener when component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <button className="go-to-top-button" onClick={scrollToTop}>
          <span className="material-icons">arrow_upward</span>
        </button>
      )}
    </div>
  );
};

export default GoToTopButton;
