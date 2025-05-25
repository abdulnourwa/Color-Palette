
import React, { useState } from 'react';
import { useAppContext } from '../App';

const BusinessCardDemo: React.FC = () => {
  const { currentStrings, theme, currentPaletteData } = useAppContext();
  const [isFlipped, setIsFlipped] = useState(false);

  const cardBaseStyle = "absolute w-full h-full backface-hidden rounded-[var(--border-radius-md)] shadow-[0_5px_15px_var(--shadow-lg)] overflow-hidden flex flex-col transition-all duration-300 ease-in-out";
  
  const defaultPrimaryFallback = '#007bff'; 
  const defaultSecondaryFallback = '#6c757d';
  const defaultTextOnPrimaryFallback = '#ffffff';

  const frontCardP = currentPaletteData?.vars?.p || defaultPrimaryFallback;
  const frontCardS = currentPaletteData?.vars?.s || defaultSecondaryFallback;
  const frontCardTp = currentPaletteData?.vars?.tp || defaultTextOnPrimaryFallback;

  const frontCardInlineStyle = {
    background: `linear-gradient(to bottom right, ${frontCardP}, ${frontCardS})`,
    color: frontCardTp,
  };
  
  const cardFrontLayoutClasses = `p-5 justify-between`;
  
  let backBgColor, backContentColor;

  if (theme === 'dark') {
    backBgColor = currentPaletteData.vars.c; 
    backContentColor = currentPaletteData.vars.tc;

    if (backBgColor?.toUpperCase() === '#FFFFFF') {
        backBgColor = currentPaletteData.vars.s; 
        backContentColor = currentPaletteData.vars.ts;
    } else {
      if (currentPaletteData.nameKey === 'teal' && currentPaletteData.vars.c === '#2C3E50' && currentPaletteData.vars.tc === '#FFFFFF') {
          // This specific case for teal is fine
      } else if (backContentColor && backBgColor === backContentColor) { 
          backContentColor = currentPaletteData.vars.l; 
      } else if (!backContentColor) { 
          backContentColor = currentPaletteData.vars.l; 
      }
    }
  } else {
    backBgColor = currentPaletteData.vars.l;
    backContentColor = currentPaletteData.vars.tl; 
     
    if (backContentColor && backBgColor === backContentColor) { 
        backContentColor = currentPaletteData.vars.p; 
    } else if (!backContentColor) { 
        backContentColor = currentPaletteData.vars.p; 
    }
  }
  
  if (!backBgColor) backBgColor = theme === 'dark' ? defaultSecondaryFallback : defaultPrimaryFallback; 
  if (!backContentColor) backContentColor = defaultTextOnPrimaryFallback;


  const cardBackLayoutClasses = `p-5 justify-center items-center text-center`;

  return (
    <div className="business-card-demo flex flex-col justify-center items-center py-5 px-0 w-full">
      <div 
        className="business-card w-[320px] aspect-[1.75/1] perspective-[1000px] cursor-pointer group clickable-feedback"
        onClick={() => setIsFlipped(!isFlipped)}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setIsFlipped(!isFlipped)}
        role="button"
        tabIndex={0}
        aria-pressed={isFlipped}
        aria-label={currentStrings('bizCardFlipCTA')}
      >
        <div className={`relative w-full h-full preserve-3d transition-transform duration-700 ease-in-out ${isFlipped ? 'rotate-y-180' : ''}`}>
          {/* Card Front */}
          <div 
            className={`${cardBaseStyle} ${cardFrontLayoutClasses}`}
            style={frontCardInlineStyle}
          >
            <div className="card-logo text-[22px] font-bold flex items-center gap-2">
              <i className="fa-solid fa-tooth"></i> DişYol
            </div>
            <div className="card-info">
              <h3 className="text-lg mb-[2px]">{currentStrings('bizCardName')}</h3>
              <p className="text-xs opacity-90 mb-1 flex items-center gap-[6px]">{currentStrings('bizCardJobTitle')}</p>
              <p className="text-xs opacity-90 mb-1 flex items-center gap-[6px]">
                <i className="fa-solid fa-envelope"></i> z.kaya@disyol.com.tr
              </p>
              <p className="text-xs opacity-90 flex items-center gap-[6px]">
                <i className="fa-solid fa-globe"></i> www.disyol.com.tr
              </p>
            </div>
          </div>

          {/* Card Back */}
          <div 
            className={`${cardBaseStyle} ${cardBackLayoutClasses} transform rotate-y-180`}
            style={{ backgroundColor: backBgColor, color: backContentColor }}
          >
             <div className="card-logo text-3xl font-bold flex items-center gap-2 mb-3">
              <i className="fa-solid fa-tooth"></i> DişYol
            </div>
            <p className="text-sm">{currentStrings('bizCardBackMessage')}</p>
          </div>
        </div>
      </div>
      <p className="text-xs text-[var(--text-secondary)] mt-3 group-hover:text-[var(--palette-a)] transition-colors">
        {currentStrings('bizCardFlipCTA')}
      </p>
    </div>
  );
};

export default BusinessCardDemo;