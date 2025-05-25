
import React from 'react';
import { useAppContext } from '../App';

const LoginScreenDemo: React.FC = () => {
  const { currentStrings, theme } = useAppContext();

  const containerBg = theme === 'dark' ? 'bg-[var(--bg-primary-dark)]' : 'bg-[var(--palette-l)]';
  const cardBg = theme === 'dark' ? 'bg-[var(--bg-secondary-dark)]' : 'bg-[var(--bg-primary)]';
  const cardBorder = 'var(--border)';
  
  const titleColor = theme === 'dark' ? 'text-[var(--text-primary-dark)]' : 'text-[var(--text-primary)]';
  const labelColor = theme === 'dark' ? 'text-[var(--text-secondary-dark)]' : 'text-[var(--text-secondary)]';
  
  const inputBg = theme === 'dark' ? 'bg-[var(--bg-accent-dark)]' : 'bg-[var(--bg-accent)]';
  const inputBorder = 'var(--border)';
  const inputText = theme === 'dark' ? 'text-[var(--text-primary-dark)]' : 'text-[var(--text-primary)]';
  const inputFocusRing = theme === 'dark' ? 'var(--palette-a)' : 'var(--palette-p)';
  const inputFocusBorder = theme === 'dark' ? 'var(--palette-a)' : 'var(--palette-p)';

  const buttonBg = theme === 'dark' ? 'var(--palette-a)' : 'var(--palette-p)';
  const buttonText = theme === 'dark' ? 'var(--palette-ta)' : 'var(--palette-tp)';
  const buttonHoverOpacity = 'hover:opacity-90';
  
  const linkColor = theme === 'dark' ? 'var(--palette-a)' : 'var(--palette-p)';
  const linkHoverUnderline = 'hover:underline';
  
  const logoIconColor = 'var(--palette-p)'; 

  return (
    <div 
      className={`login-screen-wrapper w-full max-w-sm mx-auto p-4 rounded-[var(--border-radius-lg)] flex items-center justify-center min-h-[400px]`}
      style={{backgroundColor: containerBg}}
    >
      <div 
        className={`p-8 rounded-[var(--border-radius-md)] shadow-2xl w-full border`}
        style={{backgroundColor: cardBg, borderColor: cardBorder}}
      >
        <div className="text-center mb-8">
          <i className={`fa-solid fa-tooth text-4xl mb-3`} style={{color: logoIconColor}}></i>
          <h2 className={`text-2xl font-bold ${titleColor}`}>{currentStrings('loginWelcome')}</h2>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label htmlFor="email" className={`block text-sm font-medium mb-1 ${labelColor}`}>
              {currentStrings('loginEmailLabel')}
            </label>
            <input
              type="email"
              id="email"
              className={`w-full px-3 py-2 rounded-[var(--border-radius-sm)] border text-sm transition-colors focus:ring-2`}
              style={{
                backgroundColor: inputBg, 
                borderColor: inputBorder, 
                color: inputText,
                '--tw-ring-color': inputFocusRing, 
              } as React.CSSProperties}
              placeholder="you@example.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className={`block text-sm font-medium mb-1 ${labelColor}`}>
              {currentStrings('loginPasswordLabel')}
            </label>
            <input
              type="password"
              id="password"
              className={`w-full px-3 py-2 rounded-[var(--border-radius-sm)] border text-sm transition-colors focus:ring-2`}
               style={{
                backgroundColor: inputBg, 
                borderColor: inputBorder, 
                color: inputText,
                '--tw-ring-color': inputFocusRing
              } as React.CSSProperties}
              placeholder="••••••••"
            />
            <div className="text-right mt-1">
                 <a href="#" className={`text-xs ${linkHoverUnderline} clickable-feedback`} style={{color: linkColor}}>{currentStrings('loginForgotPassword')}</a>
            </div>
          </div>
          <button
            type="submit"
            className={`w-full py-2.5 px-4 rounded-[var(--border-radius-sm)] font-semibold text-sm transition-opacity ${buttonHoverOpacity} clickable-feedback`}
            style={{backgroundColor: buttonBg, color: buttonText}}
          >
            {currentStrings('loginButton')}
          </button>
        </form>
        <p className={`mt-8 text-center text-xs ${labelColor}`}>
          {currentStrings('loginSignupPrompt')}{' '}
          <a href="#" className={`${linkHoverUnderline} font-semibold clickable-feedback`} style={{color: linkColor}}>
            {currentStrings('loginSignupLink')}
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginScreenDemo;