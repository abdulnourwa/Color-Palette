
import React, { useState } from 'react';
import { useAppContext } from '../App';
import { ColorSwatchInfo } from '../types';

const hexToRgb = (hex: string): string => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `RGB(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : "Invalid HEX";
};

const PaletteDisplay: React.FC = () => {
  const { currentPaletteData, currentStrings, language } = useAppContext();
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [feedbackMessage, setFeedbackMessage] = useState<string>('');


  const handleCopy = (text: string, type: 'hex' | 'rgb', colorHex: string) => {
    navigator.clipboard.writeText(text).then(() => {
      const message = currentStrings('copiedFeedback');
      setFeedbackMessage(message); // Set message for ARIA live region
      setCopiedColor(`${type}-${colorHex}`);
      setTimeout(() => {
        setCopiedColor(null);
        setFeedbackMessage(''); // Clear message for ARIA live region
      }, 1500);
    }).catch(err => console.error('Failed to copy: ', err));
  };

  return (
    <div className="palette-display-wrapper p-0">
      <div className="palette-display p-5">
        <div 
            className="sr-only" // Visually hidden, but available to screen readers
            aria-live="polite" 
            aria-atomic="true"
        >
            {feedbackMessage}
        </div>
        <div className="color-grid grid grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-[18px]">
          {currentPaletteData.colors.map((color: ColorSwatchInfo) => (
            <div
              key={color.hex}
              className={`color-swatch aspect-[1/1.3] min-h-[130px] rounded-[var(--border-radius-md)] flex flex-col justify-between p-3 font-semibold transition-transform duration-200 ease-in-out shadow-[0_5px_15px_var(--shadow)] text-white overflow-hidden relative border border-[rgba(0,0,0,0.05)] hover:translate-y-[-4px] hover:scale-103 ${color.textClass || ''}`}
              style={{ background: color.hex }}
            >
              <div className={`color-name text-xs self-start p-[3px_6px] rounded-sm mb-auto ${color.textClass ? 'light-text' : ''}`}>{color.name}</div>
              <div className="flex flex-col gap-1 items-start">
                <div 
                  className={`color-code text-[10px] font-mono p-[3px_6px] rounded-sm cursor-pointer flex items-center gap-1 clickable-feedback ${color.textClass ? 'light-text' : ''}`}
                  onClick={() => handleCopy(color.hex.toUpperCase(), 'hex', color.hex)}
                  title={`Copy HEX: ${color.hex.toUpperCase()}`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleCopy(color.hex.toUpperCase(), 'hex', color.hex)}
                >
                  <i className="fa-solid fa-hashtag fa-xs"></i> {color.hex.toUpperCase()}
                  {copiedColor === `hex-${color.hex}` && <span className="text-[9px] opacity-80 ml-1">{currentStrings('copiedFeedback')}</span>}
                </div>
                <div 
                  className={`color-code text-[10px] font-mono p-[3px_6px] rounded-sm cursor-pointer flex items-center gap-1 clickable-feedback ${color.textClass ? 'light-text' : ''}`}
                  onClick={() => handleCopy(hexToRgb(color.hex), 'rgb', color.hex)}
                  title={`Copy RGB: ${hexToRgb(color.hex)}`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleCopy(hexToRgb(color.hex), 'rgb', color.hex)}
                >
                   <i className="fa-solid fa-palette fa-xs"></i> {hexToRgb(color.hex)}
                   {copiedColor === `rgb-${color.hex}` && <span className="text-[9px] opacity-80 ml-1">{currentStrings('copiedFeedback')}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="palette-description-area p-5 border-t border-[var(--border)] mt-5">
        <h4 className="text-base font-semibold mb-[10px] text-[var(--text-primary)]">{currentStrings('paletteDescTitle')}: {currentPaletteData.description[language].title}</h4>
        <p className="text-sm mb-2 text-[var(--text-secondary)]">
          <strong className="text-[var(--text-primary)]">{currentStrings('paletteDescPros')}</strong>
        </p>
        <ul className="list-inside list-disc pl-4 p-0 mb-[10px]">
          {currentPaletteData.description[language].pros.map((pro: string, index: number) => (
            <li key={`pro-${index}`} className="text-xs text-[var(--text-secondary)] mb-1">{pro}</li>
          ))}
        </ul>
        <p className="text-sm mb-2 text-[var(--text-secondary)]">
          <strong className="text-[var(--text-primary)]">{currentStrings('paletteDescCons')}</strong>
        </p>
        <ul className="list-inside list-disc pl-4 p-0 mb-[10px]">
          {currentPaletteData.description[language].cons.map((con: string, index: number) => (
            <li key={`con-${index}`} className="text-xs text-[var(--text-secondary)] mb-1">{con}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PaletteDisplay;