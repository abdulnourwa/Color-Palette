
import React, { useState } from 'react';
import { useAppContext } from '../App';

const MobileAppDemo: React.FC = () => {
  const { currentStrings, theme, language } = useAppContext();
  const [showModal, setShowModal] = useState(false);

  const statusBarBg = theme === 'dark' ? 'var(--bg-accent-dark)' : 'var(--bg-accent)';
  const statusBarText = theme === 'dark' ? 'var(--text-secondary-dark)' : 'var(--text-secondary)';
  
  const appHeaderBg = theme === 'dark' ? 'var(--palette-s)' : 'var(--palette-p)';
  const appHeaderText = theme === 'dark' ? 'var(--palette-ts)' : 'var(--palette-tp)';
  
  const appContentBg = theme === 'dark' ? 'var(--bg-primary-dark)' : 'var(--palette-l)';
  
  const cardBg = theme === 'dark' ? 'var(--bg-accent-dark)' : 'var(--palette-c)';
  const cardText = theme === 'dark' ? 'var(--text-primary-dark)' : 'var(--palette-tc)';
  const cardBorderColor = theme === 'dark' ? 'var(--palette-a)' : 'var(--palette-s)';
  const cardIconColor = theme === 'dark' ? 'var(--palette-l)' : 'var(--palette-a)';


  const bottomNavBg = theme === 'dark' ? 'var(--palette-s)' : 'var(--palette-p)';
  const bottomNavIconText = theme === 'dark' ? 'var(--palette-ts)' : 'var(--palette-tp)';
  const bottomNavBorder = theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
  
  const modalOverlayBg = 'bg-[rgba(0,0,0,0.5)]';
  const modalContentBg = theme === 'dark' ? 'bg-[var(--bg-secondary-dark)]' : 'bg-[var(--bg-primary)]';
  const modalButtonPrimaryBg = theme === 'dark' ? 'var(--palette-a)' : 'var(--palette-p)';
  const modalButtonPrimaryText = theme === 'dark' ? 'var(--palette-ta)' : 'var(--palette-tp)';
  const modalButtonSecondaryBg = theme === 'dark' ? 'var(--bg-accent-dark)' : 'var(--bg-accent)';
  const modalButtonSecondaryText = theme === 'dark' ? 'var(--text-primary-dark)' : 'var(--text-primary)';


  return (
    <div className="app-demo flex justify-center items-center py-5 px-0 w-full">
      <div className="phone-mockup w-[280px] h-[560px] bg-[#1e1e1e] rounded-[30px] p-[15px] shadow-[0_10px_30px_rgba(0,0,0,0.3)] relative">
        <div className="phone-mockup-inner bg-[var(--bg-primary)] w-full h-full rounded-[20px] overflow-hidden flex flex-col">
          <div className={`phone-status-bar py-2 px-3 text-xs flex justify-between`} style={{backgroundColor: statusBarBg, color: statusBarText}}>
            <span>9:41</span>
            <span><i className="fa-solid fa-signal"></i> <i className="fa-solid fa-wifi"></i> <i className="fa-solid fa-battery-three-quarters"></i></span>
          </div>
          <div className={`app-header p-[12px_15px] flex justify-between items-center text-base font-semibold`} style={{backgroundColor: appHeaderBg, color: appHeaderText}}>
            <span>{currentStrings('mobileAppName')}</span>
            <i className="fa-solid fa-magnifying-glass cursor-pointer clickable-feedback" role="button" aria-label="Search"></i>
          </div>
          <div className={`app-content flex-grow p-[15px] overflow-y-auto`} style={{backgroundColor: appContentBg}}>
            {[
              { icon: 'fa-bolt', titleKey: 'mobileCard1Title', textKey: 'mobileCard1Text' },
              { icon: 'fa-bell', titleKey: 'mobileCard2Title', textKey: 'mobileCard2Text' },
              { icon: 'fa-truck-fast', titleKey: 'mobileCard3Title', textKey: 'mobileCard3Text' },
            ].map(card => (
              <div 
                key={card.titleKey}
                className={`app-card mb-3 p-3 rounded-[var(--border-radius-sm)] flex items-center gap-3 shadow-[0_2px_4px_var(--shadow)]`}
                style={{
                  backgroundColor: cardBg, 
                  color: cardText,
                  borderLeft: language === 'en' ? `4px solid ${cardBorderColor}` : 'none',
                  borderRight: language === 'ar' ? `4px solid ${cardBorderColor}` : 'none',
                }}
                role="article"
              >
                <i className={`fa-solid ${card.icon} text-lg flex-shrink-0`} style={{color: cardIconColor}}></i>
                <div className="card-content-wrapper flex-grow">
                  <div className="card-title font-semibold text-sm mb-[3px]">{currentStrings(card.titleKey)}</div>
                  <div className="card-text text-xs opacity-90">{currentStrings(card.textKey)}</div>
                </div>
              </div>
            ))}
            <button 
              type="button"
              onClick={() => setShowModal(true)}
              className={`w-full mt-4 py-2 px-3 rounded-[var(--border-radius-sm)] text-sm font-medium transition-opacity hover:opacity-90 clickable-feedback`}
              style={{backgroundColor: modalButtonPrimaryBg, color: modalButtonPrimaryText}}
            >
              {currentStrings('mobileShowModalBtn')}
            </button>
          </div>
          <div className={`app-bottom-nav p-[10px] flex justify-around items-center border-t`} style={{backgroundColor: bottomNavBg, borderColor: bottomNavBorder}}>
            {[
              { icon: 'fa-house', labelKey: 'mobileNavHome'},
              { icon: 'fa-boxes-stacked', labelKey: 'mobileNavProducts'},
              { icon: 'fa-qrcode', labelKey: 'mobileNavScan'},
              { icon: 'fa-circle-user', labelKey: 'mobileNavProfile'},
            ].map(navItem => (
               <i 
                key={navItem.labelKey}
                className={`fa-solid ${navItem.icon} text-xl opacity-70 cursor-pointer active:opacity-100 hover:opacity-90 clickable-feedback`} 
                style={{color: bottomNavIconText}}
                aria-label={currentStrings(navItem.labelKey)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && e.currentTarget.click()}
              ></i>
            ))}
          </div>
        </div>
        {showModal && (
          <div className={`absolute inset-0 ${modalOverlayBg} flex items-center justify-center p-4 z-50 rounded-[20px]`} role="dialog" aria-modal="true" aria-labelledby="mobile-modal-title">
            <div className={`rounded-[var(--border-radius-md)] p-5 shadow-xl w-full max-w-[240px] text-[var(--text-primary)]`} style={{backgroundColor: modalContentBg}}>
              <h3 id="mobile-modal-title" className="text-md font-semibold mb-3">{currentStrings('mobileModalTitle')}</h3>
              <p className="text-xs text-[var(--text-secondary)] mb-4">{currentStrings('mobileModalText')}</p>
              <div className="flex justify-end gap-2">
                <button 
                  type="button"
                  onClick={() => setShowModal(false)}
                  className={`py-1 px-3 rounded-[var(--border-radius-sm)] text-xs font-medium transition-opacity hover:opacity-90 clickable-feedback`}
                  style={{backgroundColor: modalButtonSecondaryBg, color: modalButtonSecondaryText}}
                >
                  {currentStrings('mobileModalCancel')}
                </button>
                <button 
                  type="button"
                  onClick={() => setShowModal(false)} 
                  className={`py-1 px-3 rounded-[var(--border-radius-sm)] text-xs font-medium transition-opacity hover:opacity-90 clickable-feedback`}
                  style={{backgroundColor: modalButtonPrimaryBg, color: modalButtonPrimaryText}}
                >
                  {currentStrings('mobileModalConfirm')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileAppDemo;