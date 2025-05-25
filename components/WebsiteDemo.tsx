
import React, { useState } from 'react';
import { useAppContext } from '../App';

const WebsiteDemo: React.FC = () => {
  const { currentStrings, theme } = useAppContext();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navBarBg = theme === 'dark' ? 'var(--palette-s)' : 'var(--palette-p)';
  const navBarText = theme === 'dark' ? 'var(--palette-ts)' : 'var(--palette-tp)';
  
  const heroBg = theme === 'dark' ? 'var(--bg-secondary-dark)' : 'var(--palette-l)';
  const heroTitleColor = theme === 'dark' ? 'var(--palette-l)' : 'var(--palette-p)'; 
  const heroSubtitleColor = theme === 'dark' ? 'var(--text-secondary-dark)' : 'var(--palette-tl)';
  
  const ctaBg = theme === 'dark' ? 'var(--palette-a)' : 'var(--palette-s)';
  const ctaText = theme === 'dark' ? 'var(--palette-ta)' : 'var(--palette-ts)';
  const ctaHoverBg = theme === 'dark' ? 'var(--palette-p)' : 'var(--palette-a)';
  const ctaHoverText = theme === 'dark' ? 'var(--palette-tp)' : 'var(--palette-ta)';


  const featureItemBg = theme === 'dark' ? 'var(--bg-secondary-dark)' : 'var(--bg-primary)';
  const featureIconWrapperBg = theme === 'dark' ? 'var(--palette-a)' : 'var(--palette-p)';
  const featureIconWrapperText = theme === 'dark' ? 'var(--palette-ta)' : 'var(--palette-tp)';
  const featureTitleColor = theme === 'dark' ? 'var(--text-primary-dark)' : 'var(--text-primary)';
  const featureDescColor = theme === 'dark' ? 'text-[var(--text-secondary-dark)]' : 'text-[var(--text-secondary)]';
  const featuresSectionDividerBg = theme === 'dark' ? 'var(--border-dark)' : 'var(--border)';
  
  const dropdownMenuBg = theme === 'dark' ? 'var(--palette-c)' : 'var(--palette-l)'; 
  const dropdownMenuItemText = theme === 'dark' ? 'var(--palette-tc)' : 'var(--palette-tl)';
  const dropdownMenuItemHoverBg = theme === 'dark' ? 'var(--bg-accent-dark)' : 'var(--bg-accent)';


  return (
    <div className="website-demo-container w-full border border-[var(--border)] rounded-[var(--border-radius-md)] overflow-hidden shadow-[0_4px_12px_var(--shadow)] max-w-xl mx-auto bg-[var(--bg-primary)]">
      <nav className={`nav-bar p-[15px_25px] flex justify-between items-center`} style={{backgroundColor: navBarBg, color: navBarText}}>
        <div className="logo"><i className="fa-solid fa-tooth"></i> DişYol</div>
        <ul className="nav-links list-none md:flex gap-5 m-0 p-0 hidden items-center">
          <li><a href="#" role="button" className="text-inherit no-underline font-medium text-sm transition-opacity duration-200 ease-in-out hover:opacity-80 clickable-feedback">{currentStrings('navSolutions')}</a></li>
          <li><a href="#" role="button" className="text-inherit no-underline font-medium text-sm transition-opacity duration-200 ease-in-out hover:opacity-80 clickable-feedback">{currentStrings('navForStudents')}</a></li>
          <li><a href="#" role="button" className="text-inherit no-underline font-medium text-sm transition-opacity duration-200 ease-in-out hover:opacity-80 clickable-feedback">{currentStrings('navProTools')}</a></li>
          <li><a href="#" role="button" className="text-inherit no-underline font-medium text-sm transition-opacity duration-200 ease-in-out hover:opacity-80 clickable-feedback">{currentStrings('navSupport')}</a></li>
          <li className="relative">
            <button 
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-inherit no-underline font-medium text-sm transition-opacity duration-200 ease-in-out hover:opacity-80 flex items-center gap-1 bg-transparent border-none clickable-feedback"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              {currentStrings('navDropdown')} <i className={`fa-solid fa-chevron-down fa-xs transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}></i>
            </button>
            {dropdownOpen && (
              <ul className={`absolute top-full lang-en:right-0 lang-ar:left-0 mt-2 w-40 rounded-md shadow-lg z-10 py-1 border border-[var(--border)]`} style={{backgroundColor: dropdownMenuBg}}>
                <li><a href="#" role="menuitem" className={`block px-4 py-2 text-sm hover:bg-[var(--bg-accent)] clickable-feedback`} style={{color: dropdownMenuItemText, '--bg-accent': dropdownMenuItemHoverBg} as React.CSSProperties}>{currentStrings('navDropdownItem1')}</a></li>
                <li><a href="#" role="menuitem" className={`block px-4 py-2 text-sm hover:bg-[var(--bg-accent)] clickable-feedback`} style={{color: dropdownMenuItemText, '--bg-accent': dropdownMenuItemHoverBg} as React.CSSProperties}>{currentStrings('navDropdownItem2')}</a></li>
              </ul>
            )}
          </li>
        </ul>
         <button type="button" className="md:hidden text-inherit text-xl bg-transparent border-none clickable-feedback" aria-label="Toggle menu">
            <i className="fa-solid fa-bars"></i>
        </button>
      </nav>
      <div className={`website-hero p-[50px_30px] text-left lang-en:text-left lang-ar:text-right`} style={{backgroundColor: heroBg}}>
        <div className="hero-content max-w-lg lang-en:mr-auto lang-ar:ml-auto">
          <h1 className={`hero-h1-styling`} style={{color: heroTitleColor}}>{currentStrings('heroTitle')}</h1>
          <p className={`text-base leading-relaxed mb-[25px]`} style={{color: heroSubtitleColor}}>{currentStrings('heroSubtitle')}</p>
          <button 
            type="button"
            className={`cta-button py-3 px-6 rounded-[var(--border-radius-sm)] no-underline font-semibold border-none cursor-pointer inline-flex items-center gap-2 transition-colors duration-[var(--transition-speed)] ease-in-out clickable-feedback`} 
            style={{backgroundColor: ctaBg, color: ctaText}}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = ctaHoverBg; e.currentTarget.style.color = ctaHoverText;}}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = ctaBg; e.currentTarget.style.color = ctaText;}}
            role="button"
          >
            <i className="fa-solid fa-cart-shopping"></i> <span>{currentStrings('heroCta')}</span>
          </button>
        </div>
      </div>
      <div className={`features-section grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-px p-0 border-t`} style={{backgroundColor: featuresSectionDividerBg, borderColor: featuresSectionDividerBg}}>
        <div className={`feature-item p-[25px_20px] text-center`} style={{backgroundColor: featureItemBg}}>
          <div className={`feature-icon-wrapper w-[50px] h-[50px] rounded-full inline-flex items-center justify-center text-xl mb-[15px]`} style={{backgroundColor: featureIconWrapperBg, color: featureIconWrapperText}}>
            <i className="fa-solid fa-award"></i>
          </div>
          <h3 className={`text-base font-semibold mb-2`} style={{color: featureTitleColor}}>{currentStrings('feature1Title')}</h3>
          <p className={`text-xs leading-snug ${featureDescColor}`}>{currentStrings('feature1Desc')}</p>
        </div>
        <div className={`feature-item p-[25px_20px] text-center`} style={{backgroundColor: featureItemBg}}>
          <div className={`feature-icon-wrapper w-[50px] h-[50px] rounded-full inline-flex items-center justify-center text-xl mb-[15px]`} style={{backgroundColor: featureIconWrapperBg, color: featureIconWrapperText}}>
            <i className="fa-solid fa-microscope"></i>
          </div>
          <h3 className={`text-base font-semibold mb-2`} style={{color: featureTitleColor}}>{currentStrings('feature2Title')}</h3>
          <p className={`text-xs leading-snug ${featureDescColor}`}>{currentStrings('feature2Desc')}</p>
        </div>
        <div className={`feature-item p-[25px_20px] text-center`} style={{backgroundColor: featureItemBg}}>
          <div className={`feature-icon-wrapper w-[50px] h-[50px] rounded-full inline-flex items-center justify-center text-xl mb-[15px]`} style={{backgroundColor: featureIconWrapperBg, color: featureIconWrapperText}}>
            <i className="fa-solid fa-user-graduate"></i>
          </div>
          <h3 className={`text-base font-semibold mb-2`} style={{color: featureTitleColor}}>{currentStrings('feature3Title')}</h3>
          <p className={`text-xs leading-snug ${featureDescColor}`}>{currentStrings('feature3Desc')}</p>
        </div>
      </div>
    </div>
  );
};

export default WebsiteDemo;