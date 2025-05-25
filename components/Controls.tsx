
import React, { useState, useEffect } from 'react';
import { useAppContext } from '../App';

const Controls: React.FC = () => {
  const {
    theme,
    toggleTheme,
    language,
    toggleLanguage,
    currentStrings,
    activePaletteKey,
    setActivePaletteKey,
    palettesData,
    cmykMode,
    toggleCmykMode,
    isControlsContentVisible,
    toggleControlsContentVisibility,
  } = useAppContext();

  const [palettesExpanded, setPalettesExpanded] = useState(false);

  useEffect(() => {
    if (!isControlsContentVisible) {
      setPalettesExpanded(false);
    }
  }, [isControlsContentVisible]);

  const baseButtonClasses = "py-[10px] px-3 sm:px-4 md:px-[18px] rounded-[var(--border-radius-md)] cursor-pointer font-semibold text-xs transition-all duration-[var(--transition-speed)] ease-in-out shadow-[0_3px_10px_var(--shadow)] flex items-center gap-2 justify-center flex-grow md:flex-grow-0 clickable-feedback";

  const paletteIcons: { [key: string]: string } = {
    'deep-blue': 'fa-briefcase',
    'teal': 'fa-spa',
    'sky-blue': 'fa-cloud'
  };

  const controlsBaseClasses = "controls sticky top-5 z-[1000] w-full transition-all duration-300 ease-in-out mb-[70px]";
  const controlsVisibleClasses = "p-3 md:p-4 bg-[var(--bg-primary)] rounded-[var(--border-radius-lg)] shadow-[0_6px_25px_var(--shadow)] border border-[var(--border)] flex flex-col items-center";
  const controlsHiddenClasses = "p-2 bg-transparent shadow-none border-transparent flex flex-row justify-end items-center";

  return (
    <div 
      className={`${controlsBaseClasses} ${isControlsContentVisible ? controlsVisibleClasses : controlsHiddenClasses}`}
    >
      <div 
        className={`w-full flex flex-col items-center gap-3 transition-all duration-500 ease-in-out overflow-hidden
                    ${isControlsContentVisible 
                        ? 'max-h-[1000px] opacity-100 transform translate-y-0' 
                        : 'max-h-0 opacity-0 transform -translate-y-5 pointer-events-none'
                    }`}
      >
        <button
          className="md:hidden toggle-btn py-2 px-4 border border-[var(--border)] bg-[var(--bg-accent)] text-[var(--text-secondary)] rounded-[var(--border-radius-sm)] font-semibold text-xs w-full flex justify-between items-center clickable-feedback"
          onClick={() => setPalettesExpanded(!palettesExpanded)}
          aria-expanded={palettesExpanded}
          aria-controls="palette-selection-group"
          title={currentStrings('controlsToggleButton')}
        >
          <span>{palettesExpanded ? currentStrings('controlsToggleButtonHide') : currentStrings('controlsToggleButtonShow')}</span>
          <i className={`fa-solid ${palettesExpanded ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
        </button>

        <div 
          id="palette-selection-group"
          className={`control-group md:flex bg-[var(--bg-accent)] rounded-[var(--border-radius-md)] p-[6px] justify-center w-full md:w-auto
                      ${palettesExpanded ? 'flex palette-selection-scrollable' : 'hidden md:flex flex-wrap'}`}
        >
          {Object.keys(palettesData).map((paletteKey) => (
            <button
              key={paletteKey}
              className={`toggle-btn py-2 px-4 border-none bg-transparent cursor-pointer rounded-[var(--border-radius-sm)] font-semibold text-xs transition-all duration-[var(--transition-speed)] cubic-bezier(0.65,0,0.35,1) text-[var(--text-secondary)] relative flex items-center gap-2 clickable-feedback 
                          ${activePaletteKey === paletteKey 
                              ? 'active text-[var(--palette-tp)] bg-[var(--palette-p)] shadow-[0_5px_15px_var(--shadow-lg)] transform scale-[1.05] translate-y-[-2px] border-2 border-[var(--palette-a)] outline-none ring-2 ring-[var(--palette-a)] ring-offset-2 ring-offset-[var(--bg-accent)]' 
                              : 'hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                          }`}
              onClick={() => setActivePaletteKey(paletteKey)}
              aria-pressed={activePaletteKey === paletteKey}
              title={`${currentStrings('paletteBtnSelectPrefix') || 'Select Palette:'} ${currentStrings(palettesData[paletteKey].nameKey)}`}
            >
              <i className={`fa-solid ${paletteIcons[paletteKey] || 'fa-swatchbook'}`}></i>
              <span>{currentStrings(palettesData[paletteKey].nameKey)}</span>
            </button>
          ))}
        </div>
        
        <div className="flex flex-wrap justify-center items-stretch gap-2 md:gap-3 w-full"> {/* items-stretch for equal height buttons if they wrap */}
          <button
              className={`${baseButtonClasses} theme-toggle bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--bg-accent)] hover:border-[var(--palette-a)] hover:text-[var(--palette-a)]`}
              onClick={toggleTheme}
              aria-pressed={theme === 'dark'}
              title={theme === 'dark' ? currentStrings('themeBtnLight') : currentStrings('themeBtnDark')}
          >
              <span id="themeIcon"><i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i></span>
              <span className="hidden sm:inline" id="themeText">{theme === 'dark' ? currentStrings('themeBtnLight') : currentStrings('themeBtnDark')}</span>
          </button>
          <button
              className={`${baseButtonClasses} cmyk-toggle bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--bg-accent)] hover:border-[var(--palette-a)] hover:text-[var(--palette-a)] ${cmykMode ? 'active bg-[var(--palette-a)] text-[var(--palette-ta)] border-[var(--palette-a)]' : ''}`}
              onClick={toggleCmykMode}
              aria-pressed={cmykMode}
              title={cmykMode ? currentStrings('cmykBtnRgb') : currentStrings('cmykBtnSimulate')}
          >
              <i className="fa-solid fa-print"></i>
              <span className="hidden sm:inline" id="cmykText">{cmykMode ? currentStrings('cmykBtnRgb') : currentStrings('cmykBtnSimulate')}</span>
          </button>
          <button
              className={`${baseButtonClasses} lang-toggle bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--bg-accent)] hover:border-[var(--palette-a)] hover:text-[var(--palette-a)]`}
              onClick={toggleLanguage}
              aria-pressed={language === 'ar'}
              title={language === 'en' ? currentStrings('langBtnArabic') : currentStrings('langBtnEnglish')}
          >
              <i className="fa-solid fa-language"></i>
              <span className="hidden sm:inline" id="langText">{language === 'en' ? currentStrings('langBtnArabic').split(' ')[2] : currentStrings('langBtnEnglish').split(' ')[2]}</span>
          </button>
            <button
              className={`${baseButtonClasses} bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--bg-accent)] hover:border-[var(--palette-a)] hover:text-[var(--palette-a)]`}
              onClick={toggleControlsContentVisibility}
              aria-pressed={!isControlsContentVisible} 
              title={currentStrings('controlsBarToggleHide')}
            >
              <i className="fa-solid fa-eye-slash"></i>
              <span className="hidden sm:inline">{currentStrings('controlsBarToggleHide')}</span>
            </button>
        </div>
      </div>

      {!isControlsContentVisible && (
        <button
            className={`${baseButtonClasses} bg-[var(--palette-a)] text-[var(--palette-ta)] border-transparent hover:opacity-90 opacity-100 transform scale-100`}
            onClick={toggleControlsContentVisibility}
            aria-pressed={!isControlsContentVisible} 
            title={currentStrings('controlsBarToggleShow')}
        >
            <i className="fa-solid fa-eye"></i>
            <span className="hidden sm:inline">{currentStrings('controlsBarToggleShow')}</span>
        </button>
      )}
    </div>
  );
};

export default Controls;