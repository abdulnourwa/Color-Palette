
import React, { ReactNode } from 'react';
import { useAppContext } from '../App';

interface UseCaseCardProps {
  iconClass: string;
  titleKey: string;
  children: ReactNode;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ iconClass, titleKey, children }) => {
  const { currentStrings, openSpotlightModal } = useAppContext();

  const handleSpotlight = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation(); // Prevent card hover effects from interfering if any
    openSpotlightModal(children, titleKey);
  };

  return (
    <div className="use-case bg-[var(--bg-primary)] rounded-[var(--border-radius-lg)] overflow-hidden shadow-[0_10px_35px_var(--shadow)] border border-[var(--border)] transition-transform duration-[var(--transition-speed)] ease-in-out hover:translate-y-[-8px] hover:scale-[1.01] hover:shadow-[0_15px_45px_var(--shadow-lg)] flex flex-col">
      <div className="use-case-header p-[22px_28px] font-bold text-xl border-b border-[var(--border)] bg-[var(--bg-accent)] text-[var(--text-primary)]">
        <div className="title-group">
          <i className={`${iconClass} fa-solid`}></i> 
          <span>{currentStrings(titleKey)}</span>
        </div>
        <button
          onClick={handleSpotlight}
          className="spotlight-btn clickable-feedback"
          aria-label={`${currentStrings('spotlightView') || 'View in Spotlight'}: ${currentStrings(titleKey)}`}
          title={`${currentStrings('spotlightView') || 'View in Spotlight'}: ${currentStrings(titleKey)}`}
        >
          <i className="fa-solid fa-maximize"></i>
        </button>
      </div>
      <div className="demo-area p-6 flex-grow flex flex-col justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default UseCaseCard;