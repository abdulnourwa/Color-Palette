
import React, { ReactNode, useEffect, useRef } from 'react';
import { useAppContext } from '../App';

interface SpotlightModalProps {
  isOpen: boolean;
  onClose: () => void;
  titleKey: string;
  children: ReactNode;
}

const SpotlightModal: React.FC<SpotlightModalProps> = ({ isOpen, onClose, titleKey, children }) => {
  const { currentStrings } = useAppContext();
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Handle Tab key press for focus trapping
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) { // Shift + Tab
          if (document.activeElement === firstElement) {
            lastElement.focus();
            event.preventDefault();
          }
        } else { // Tab
          if (document.activeElement === lastElement) {
            firstElement.focus();
            event.preventDefault();
          }
        }
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Focus the close button when modal opens
      closeButtonRef.current?.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const titleId = `spotlight-modal-title-${titleKey.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div
      className="spotlight-modal-overlay"
      onClick={onClose} // Close on overlay click
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby="spotlight-modal-description" // Generic description, actual content is visual
    >
      <div
        ref={modalRef}
        className="spotlight-modal-content"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside content
      >
        <div className="spotlight-modal-header">
          <h2 id={titleId} className="spotlight-modal-title">
            {currentStrings(titleKey)}
          </h2>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="spotlight-modal-close-btn clickable-feedback"
            aria-label={currentStrings('spotlightClose') || 'Close'}
          >
            <i className="fa-solid fa-times"></i>
          </button>
        </div>
        <div className="spotlight-modal-body" id="spotlight-modal-description">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SpotlightModal;
