
import React, { useState, useEffect } from 'react';
import { useAppContext } from '../App';

const BackToTopButton: React.FC = () => {
  const { currentStrings, theme, cmykMode } = useAppContext();
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const buttonBgClass = theme === 'dark' ? 'bg-[var(--palette-a)] text-[var(--palette-ta)]' : 'bg-[var(--palette-p)] text-[var(--palette-tp)]';
  const cmykActiveClass = cmykMode ? 'cmyk-active' : '';


  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`back-to-top-button fixed bottom-6 lang-en:right-6 lang-ar:left-6 z-[1001] p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--palette-a)] clickable-feedback ${buttonBgClass} ${cmykActiveClass}`}
          aria-label={currentStrings('backToTop')}
          title={currentStrings('backToTop')}
          type="button"
        >
          <i className="fa-solid fa-arrow-up text-lg"></i>
        </button>
      )}
    </>
  );
};

export default BackToTopButton;