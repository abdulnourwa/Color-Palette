
import React from 'react';
import { useAppContext } from '../App';

const EmailNewsletterDemo: React.FC = () => {
  const { currentStrings, theme } = useAppContext();

  const wrapperBg = theme === 'dark' ? 'bg-[var(--bg-secondary-dark)]' : 'bg-[var(--palette-l)]';
  const contentBg = theme === 'dark' ? 'bg-[var(--bg-primary-dark)]' : 'bg-[var(--bg-primary)]';
  
  const headerBg = theme === 'dark' ? 'var(--palette-s)' : 'var(--palette-p)';
  const headerText = theme === 'dark' ? 'var(--palette-ts)' : 'var(--palette-tp)';
  
  const titleColor = theme === 'dark' ? 'var(--palette-a)' : 'var(--palette-p)';
  const bodyTextColor = theme === 'dark' ? 'text-[var(--text-secondary-dark)]' : 'text-[var(--text-secondary)]';
  
  const ctaBg = theme === 'dark' ? 'var(--palette-a)' : 'var(--palette-s)';
  const ctaText = theme === 'dark' ? 'var(--palette-ta)' : 'var(--palette-ts)';
  const ctaHoverOpacity = 'hover:opacity-90';
  
  const footerBg = theme === 'dark' ? 'bg-[var(--bg-accent-dark)]' : 'bg-[var(--bg-accent)]';
  const footerText = theme === 'dark' ? 'text-[var(--text-secondary-dark)]' : 'text-[var(--text-secondary)]';
  const borderColor = 'var(--border)';


  return (
    <div className={`email-demo-wrapper w-full max-w-md mx-auto p-4 rounded-[var(--border-radius-md)] shadow-lg`} style={{backgroundColor: wrapperBg}}>
      <div className={`rounded-[var(--border-radius-sm)] overflow-hidden border`} style={{backgroundColor: contentBg, borderColor: borderColor}}>
        <div className={`email-header p-5 text-center`} style={{backgroundColor: headerBg, color: headerText}}>
          <h2 className="text-xl font-bold"><i className="fa-solid fa-tooth mr-2"></i> DişYol Updates</h2>
        </div>
        <div className="email-body p-6">
          <h3 className={`text-lg font-semibold mb-2`} style={{color: titleColor}}>{currentStrings('emailSubject')}</h3>
          <p className={`text-sm mb-3 ${bodyTextColor}`}>{currentStrings('emailGreeting')}</p>
          <p className={`text-sm mb-4 ${bodyTextColor}`}>
            {currentStrings('emailBody')}
          </p>
          <div className="text-center">
            <a
              href="#"
              role="button"
              className={`inline-block py-2 px-5 rounded-[var(--border-radius-sm)] text-sm font-semibold no-underline transition-opacity ${ctaHoverOpacity} clickable-feedback`}
              style={{backgroundColor: ctaBg, color: ctaText}}
            >
              {currentStrings('emailCta')}
            </a>
          </div>
        </div>
        <div className={`email-footer p-4 text-center text-xs border-t`} style={{backgroundColor: footerBg, color: footerText, borderColor: borderColor}}>
          <p>{currentStrings('emailFooter')}</p>
        </div>
      </div>
    </div>
  );
};

export default EmailNewsletterDemo;