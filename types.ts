
import { ReactNode } from 'react';

export interface ColorSwatchInfo {
  name: string;
  hex: string;
  textClass?: string;
}

export interface PaletteVariables {
  p: string; // primary
  s: string; // secondary
  a: string; // accent
  l: string; // light
  c: string; // contrast or card
  tp: string; // text on primary
  ts: string; // text on secondary
  ta: string; // text on accent
  tl: string; // text on light
  tc: string; // text on contrast/card
  'header-gradient': string;
}

export interface PaletteDescription {
  title: string;
  pros: string[];
  cons: string[];
}

export interface Palette {
  nameKey: string;
  colors: ColorSwatchInfo[];
  vars: PaletteVariables;
  description: {
    en: PaletteDescription;
    ar: PaletteDescription;
  };
}

export interface PalettesData {
  [key: string]: Palette;
}

export type Language = 'en' | 'ar';
export type Theme = 'light' | 'dark';

export interface UIStrings {
  [key: string]: {
    [lang in Language]: string;
  };
}

export interface AppContextType {
  theme: Theme;
  toggleTheme: () => void;
  language: Language;
  toggleLanguage: () => void;
  currentStrings: (key: string) => string;
  activePaletteKey: string;
  setActivePaletteKey: (key: string) => void;
  currentPaletteData: Palette;
  palettesData: PalettesData;
  cmykMode: boolean;
  toggleCmykMode: () => void;
  isControlsContentVisible: boolean;
  toggleControlsContentVisibility: () => void;

  // Spotlight Modal
  isSpotlightModalOpen: boolean;
  spotlightedContent: ReactNode | null;
  spotlightedTitleKey: string | null;
  openSpotlightModal: (content: ReactNode, titleKey: string) => void;
  closeSpotlightModal: () => void;
}