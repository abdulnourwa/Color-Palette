import React from 'react';
import { useAppContext } from '../App';

const PackageDemo: React.FC = () => {
  const { currentStrings, theme } = useAppContext();

  const boxBg = theme === 'dark' ? 'var(--bg-secondary-dark)' : 'var(--bg-primary)';
  const boxBorder = 'var(--border)';
  const boxShadow = 'var(--shadow)';
  
  // Brand strip: P for light, S for dark (assuming S is lighter or different enough from P)
  const brandStripBg = theme === 'dark' ? 'var(--palette-s)' : 'var(--palette-p)';
  const brandStripText = theme === 'dark' ? 'var(--palette-ts)' : 'var(--palette-tp)';
  
  // Side panel: Same as brand strip for consistency or a related color
  const sideBg = theme === 'dark' ? 'var(--palette-s)' : 'var(--palette-p)';
  
  // Main face: L for light theme, C for dark theme if C is a good card bg for dark
  const faceBg = theme === 'dark' ? 'var(--palette-c)' : 'var(--palette-l)';
  const faceText = theme === 'dark' ? 'var(--palette-tc)' : 'var(--palette-tl)';
  
  const iconAreaColor = theme === 'dark' ? 'var(--palette-a)' : 'var(--palette-p)';
  const productNameColor = theme === 'dark' ? 'var(--palette-a)' : 'var(--palette-p)';
  const descColor = faceText; // Use the main face text color
  
  const listIconColor = theme === 'dark' ? 'var(--palette-a)' : 'var(--palette-p)';
  const listTextColor = faceText;
  
  const footerBg = theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)';
  const footerText = theme === 'dark' ? 'var(--text-secondary-dark)' : 'var(--text-secondary)';
  const footerBorder = 'var(--border)';


  return (
    <div className="package-demo w-full max-w-[320px] mx-auto">
      <div className="package-box-container">
        <div 
          className={`package-box border rounded-[var(--border-radius-sm)] overflow-hidden flex flex-col`}
          style={{
            backgroundColor: boxBg, 
            borderColor: boxBorder, 
            boxShadow: `0 4px 12px ${boxShadow}`
          }}
        >
          <div 
            className={`package-brand-strip p-[10px_15px] font-bold text-base text-center`}
            style={{backgroundColor: brandStripBg, color: brandStripText}}
          >
            DişYol SELECT
          </div>
          <div className="package-body flex flex-grow">
            <div 
              className={`package-box-side w-[15px]`}
              style={{backgroundColor: sideBg}}
            ></div>
            <div 
              className={`package-box-face flex-grow p-5`}
              style={{backgroundColor: faceBg, color: faceText}}
            >
              <div className={`package-icon-area text-4xl mb-3 text-center`} style={{color: iconAreaColor}}>
                <i className="fa-solid fa-sliders"></i>
              </div>
              <div className={`package-product-name text-lg font-semibold mb-1 text-center`} style={{color: productNameColor}}>
                {currentStrings('packageProductName')}
              </div>
              <div className={`package-description text-sm mb-[15px] text-center`} style={{color: descColor}}>
                {currentStrings('packageProductDesc')}
              </div>
              <ul className={`package-contents-list list-none p-0 text-xs`} style={{color: listTextColor}}>
                <li className="flex items-center gap-2 mb-[6px]">
                  <i className={`fa-solid fa-circle-check text-sm`} style={{color: listIconColor}}></i> <span>{currentStrings('packageFeature1')}</span>
                </li>
                <li className="flex items-center gap-2 mb-[6px]">
                  <i className={`fa-solid fa-circle-check text-sm`} style={{color: listIconColor}}></i> <span>{currentStrings('packageFeature2')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className={`fa-solid fa-circle-check text-sm`} style={{color: listIconColor}}></i> <span>{currentStrings('packageFeature3')}</span>
                </li>
              </ul>
            </div>
          </div>
          <div 
            className={`package-footer text-[9px] text-center p-2 opacity-90 border-t`}
            style={{backgroundColor: footerBg, color: footerText, borderColor: footerBorder}}
          >
            {currentStrings('packageFooter')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDemo;