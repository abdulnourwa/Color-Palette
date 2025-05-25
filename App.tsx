
import React, { useState, useEffect, useCallback, createContext, useContext, ReactNode, useRef } from 'react';
import { Theme, Language, AppContextType }  from './types';
import { PALETTES_DATA, UI_STRINGS } from './constants';
import Header from './components/Header';
import Controls from './components/Controls';
import UseCaseCard from './components/UseCaseCard';
import PaletteDisplay from './components/PaletteDisplay';
import WebsiteDemo from './components/WebsiteDemo';
import WebAppDemo from './components/WebAppDemo';
import MobileAppDemo from './components/MobileAppDemo';
import BusinessCardDemo from './components/BusinessCardDemo';
import SocialAdDemo from './components/SocialAdDemo';
import PackageDemo from './components/PackageDemo';
import ShippingBoxDemo from './components/ShippingBoxDemo';
import EmailNewsletterDemo from './components/EmailNewsletterDemo';
import PresentationSlideDemo from './components/PresentationSlideDemo';
import DataVisualizationDemo from './components/DataVisualizationDemo';
import LoginScreenDemo from './components/LoginScreenDemo';
import InvoiceDemo from './components/InvoiceDemo';
import BackToTopButton from './components/BackToTopButton';
import LogoDemo from './components/LogoDemo';
import SpotlightModal from './components/SpotlightModal';


const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('light');
  const [language, setLanguage] = useState<Language>('en');
  const [activePaletteKey, setActivePaletteKey] = useState<string>('deep-blue');
  const [cmykMode, setCmykMode] = useState<boolean>(false);
  const [isControlsContentVisible, setIsControlsContentVisible] = useState<boolean>(true);

  // Spotlight Modal State
  const [isSpotlightModalOpen, setIsSpotlightModalOpen] = useState<boolean>(false);
  const [spotlightedContent, setSpotlightedContent] = useState<ReactNode | null>(null);
  const [spotlightedTitleKey, setSpotlightedTitleKey] = useState<string | null>(null);
  const spotlightTriggerRef = useRef<HTMLButtonElement | null>(null);


  const currentPaletteData = PALETTES_DATA[activePaletteKey];

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    document.body.dataset.lang = language;
    document.body.classList.toggle('lang-ar', language === 'ar');
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);
  
  useEffect(() => {
    document.body.classList.toggle('cmyk-simulate', cmykMode);
  }, [cmykMode]);

  useEffect(() => {
    const paletteVars = currentPaletteData.vars;
    const rootStyle = document.documentElement.style;
    Object.entries(paletteVars).forEach(([key, value]) => {
        const cssVarName = key.length === 1 || (key.length === 2 && key.startsWith('t')) 
            ? `--palette-${key.toLowerCase()}`
            : `--${key}`; // for header-gradient
      rootStyle.setProperty(cssVarName, value);
    });
  }, [activePaletteKey, currentPaletteData]);


  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(prevLang => (prevLang === 'en' ? 'ar' : 'en'));
  }, []);

  const toggleCmykMode = useCallback(() => {
    setCmykMode(prevMode => !prevMode);
  }, []);

  const toggleControlsContentVisibility = useCallback(() => {
    setIsControlsContentVisible(prev => !prev);
  }, []);

  const currentStrings = useCallback((key: string): string => {
    return UI_STRINGS[key]?.[language] || key;
  }, [language]);

  const openSpotlightModal = useCallback((content: ReactNode, titleKey: string) => {
    // Save the currently focused element that triggered the modal
    if (document.activeElement instanceof HTMLButtonElement) {
        spotlightTriggerRef.current = document.activeElement;
    }
    setSpotlightedContent(content);
    setSpotlightedTitleKey(titleKey);
    setIsSpotlightModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  }, []);

  const closeSpotlightModal = useCallback(() => {
    setIsSpotlightModalOpen(false);
    setSpotlightedContent(null);
    setSpotlightedTitleKey(null);
    document.body.style.overflow = ''; // Restore background scroll
    // Return focus to the element that opened the modal
    spotlightTriggerRef.current?.focus();
  }, []);


  const contextValue: AppContextType = {
    theme,
    toggleTheme,
    language,
    toggleLanguage,
    currentStrings,
    activePaletteKey,
    setActivePaletteKey,
    currentPaletteData,
    palettesData: PALETTES_DATA,
    cmykMode,
    toggleCmykMode,
    isControlsContentVisible,
    toggleControlsContentVisibility,
    isSpotlightModalOpen,
    spotlightedContent,
    spotlightedTitleKey,
    openSpotlightModal,
    closeSpotlightModal,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className={`container max-w-7xl mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20`}>
        {isControlsContentVisible && <Header />} 
        <Controls />
        <div className="comparison-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 mb-16">
          <UseCaseCard iconClass="fa-palette" titleKey="useCasePaletteTitle">
            <PaletteDisplay />
          </UseCaseCard>
           <UseCaseCard iconClass="fa-tooth" titleKey="useCaseLogoTitle">
            <LogoDemo />
          </UseCaseCard>
          <UseCaseCard iconClass="fa-display" titleKey="useCaseWebsiteTitle">
            <WebsiteDemo />
          </UseCaseCard>
          <UseCaseCard iconClass="fa-gears" titleKey="useCaseWebAppTitle">
            <WebAppDemo />
          </UseCaseCard>
          <UseCaseCard iconClass="fa-mobile-screen-button" titleKey="useCaseMobileTitle">
            <MobileAppDemo />
          </UseCaseCard>
           <UseCaseCard iconClass="fa-file-invoice-dollar" titleKey="useCaseInvoiceTitle">
            <InvoiceDemo />
          </UseCaseCard>
          <UseCaseCard iconClass="fa-id-card-clip" titleKey="useCaseBizCardTitle">
            <BusinessCardDemo />
          </UseCaseCard>
          <UseCaseCard iconClass="fa-brands fa-instagram" titleKey="useCaseSocialAdTitle">
            <SocialAdDemo />
          </UseCaseCard>
          <UseCaseCard iconClass="fa-box-open" titleKey="useCasePackageTitle">
            <PackageDemo />
          </UseCaseCard>
          <UseCaseCard iconClass="fa-truck-ramp-box" titleKey="useCaseShippingBoxTitle">
            <ShippingBoxDemo />
          </UseCaseCard>
          <UseCaseCard iconClass="fa-envelope-open-text" titleKey="useCaseEmailTitle">
            <EmailNewsletterDemo />
          </UseCaseCard>
          <UseCaseCard iconClass="fa-file-powerpoint" titleKey="useCasePresentationTitle">
            <PresentationSlideDemo />
          </UseCaseCard>
          <UseCaseCard iconClass="fa-chart-bar" titleKey="useCaseDataVizTitle">
            <DataVisualizationDemo />
          </UseCaseCard>
          <UseCaseCard iconClass="fa-right-to-bracket" titleKey="useCaseLoginTitle">
            <LoginScreenDemo />
          </UseCaseCard>
        </div>
      </div>
      <footer className="text-center py-8 mt-16 border-t border-[var(--border)] text-[var(--text-secondary)] text-xs">
        <p>
          Crafted by{' '}
          <a
            href="https://www.instagram.com/abdulnour.wa"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:underline"
            style={{ color: 'var(--palette-a)' }} 
          >
            Abdulnour
          </a>
          .
        </p>
      </footer>
      <BackToTopButton />
      {cmykMode && (
        <div className="cmyk-indicator-badge" aria-hidden="true">
          CMYK
        </div>
      )}
      {isSpotlightModalOpen && spotlightedContent && spotlightedTitleKey && (
        <SpotlightModal
          isOpen={isSpotlightModalOpen}
          onClose={closeSpotlightModal}
          titleKey={spotlightedTitleKey}
        >
          {spotlightedContent}
        </SpotlightModal>
      )}
    </AppContext.Provider>
  );
};

export default App;