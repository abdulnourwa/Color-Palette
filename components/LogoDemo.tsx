
import React from 'react';
import { useAppContext } from '../App';

interface LogoDisplayProps {
  bgColorStyle: string;
  logoColorStyle: string;
  textColorStyle?: string;
  tagline?: string;
  taglineKey?: string;
  titleKey: string; // Still used for context, but not rendered
}

const LogoDisplay: React.FC<LogoDisplayProps> = ({ bgColorStyle, logoColorStyle, textColorStyle, tagline, taglineKey, titleKey }) => {
  const { currentStrings } = useAppContext();
  // const actualTagline = taglineKey ? currentStrings(taglineKey) : tagline; // Tagline rendering removed
  // const displayTitle = currentStrings(titleKey); // Title rendering removed
  
  return (
    <div className={`p-4 md:p-6 rounded-[var(--border-radius-md)] shadow-md border border-[var(--border)] flex flex-col items-center justify-center text-center transition-all duration-300 ${bgColorStyle}`} style={{ minHeight: '150px' }}>
      <div className="flex items-center text-3xl md:text-4xl font-bold" style={{ color: logoColorStyle }}>
        <i className="fa-solid fa-tooth mr-2"></i>
        <span>DişYol</span>
      </div>
      {/* Tagline rendering removed
      {actualTagline && (
        <p className="text-xs md:text-sm mt-2" style={{ color: textColorStyle || logoColorStyle, opacity: textColorStyle ? 1 : 0.8 }}>
          {actualTagline}
        </p>
      )}
      */}
      {/* Title key rendering removed 
      <p className="text-[10px] mt-3 font-medium absolute bottom-2" style={{color: textColorStyle || logoColorStyle, opacity: 0.7}}>{displayTitle}</p>
      */}
    </div>
  );
};

const LogoDemo: React.FC = () => {
  const { theme, currentStrings } = useAppContext();

  // Define styles based on theme and palette
  const lightBg = theme === 'dark' ? 'bg-[var(--bg-accent-dark)]' : 'bg-[var(--palette-l)]';
  const darkBg = theme === 'dark' ? 'bg-[var(--palette-p)]' : 'bg-[var(--palette-s)]'; // Using P or S for dark background

  const primaryLogoColor = 'var(--palette-p)';
  const accentLogoColor = 'var(--palette-a)';
  const lightTextOnDarkBg = 'var(--palette-tp)'; // Text on Primary (assuming P is darkish) or TS for S
  const darkTextOnLightBg = theme === 'dark' ? 'var(--palette-tl)' : 'var(--palette-tl)'; // Text on Light (palette's L)

  return (
    <div className="logo-demo-wrapper w-full space-y-4">
      <LogoDisplay
        bgColorStyle={lightBg}
        logoColorStyle={primaryLogoColor}
        textColorStyle={darkTextOnLightBg}
        titleKey="logoVariation1"
      />
      <LogoDisplay
        bgColorStyle={darkBg} // Use palette.p or palette.s for dark bg
        logoColorStyle={lightTextOnDarkBg} // Use palette.tp or palette.ts
        textColorStyle={lightTextOnDarkBg}
        titleKey="logoVariation2"
      />
      <LogoDisplay
        bgColorStyle={theme === 'dark' ? 'bg-[var(--bg-secondary-dark)]' : 'bg-[var(--bg-accent)]'}
        logoColorStyle={accentLogoColor} // Monochromatic with accent
        textColorStyle={accentLogoColor}
        titleKey="logoVariation3"
      />
      <LogoDisplay
        bgColorStyle={lightBg}
        logoColorStyle={primaryLogoColor}
        textColorStyle={darkTextOnLightBg}
        taglineKey="logoTagline"
        titleKey="logoVariation4"
      />
    </div>
  );
};

export default LogoDemo;