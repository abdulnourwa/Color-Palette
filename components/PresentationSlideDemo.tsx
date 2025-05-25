
import React from 'react';
import { useAppContext } from '../App';

const PresentationSlideDemo: React.FC = () => {
  const { currentStrings, theme } = useAppContext();

  // Base slide styles
  const slideBase = "aspect-[16/9] w-full rounded-[var(--border-radius-sm)] p-6 flex flex-col justify-center items-center text-center shadow-lg border";
  const slideBorderColor = 'var(--border)';

  // Title Slide Styles
  const titleSlideBg = theme === 'dark' ? 'var(--palette-s)' : 'var(--palette-p)';
  const titleSlideTitleText = theme === 'dark' ? 'var(--palette-ts)' : 'var(--palette-tp)';
  const titleSlideSubtitleText = theme === 'dark' ? 'var(--palette-l)' : 'var(--palette-l)'; // Palette L for subtitle on dark P/S
  const titleSlideSubtitleOpacity = 'opacity-80';

  // Content Slide Styles
  const contentSlideBg = theme === 'dark' ? 'bg-[var(--bg-secondary-dark)]' : 'var(--palette-l)';
  const contentSlideTitleText = theme === 'dark' ? 'var(--palette-a)' : 'var(--palette-p)';
  const contentSlideBodyText = theme === 'dark' ? 'var(--text-primary-dark)' : 'var(--palette-tl)'; // Palette TL for text on Palette L
  const contentSlideAccentShape = theme === 'dark' ? 'var(--palette-a)' : 'var(--palette-s)';
  const contentSlideCheckIconColor = 'var(--palette-a)'; // Use Accent for check icons consistently

  return (
    <div className="presentation-demo-wrapper w-full max-w-lg mx-auto space-y-6">
      {/* Title Slide */}
      <div 
        className={`${slideBase} items-center`} // Ensure items-center for vertical centering
        style={{backgroundColor: titleSlideBg, borderColor: slideBorderColor}}
      >
        <h2 className={`text-3xl md:text-4xl font-bold mb-2`} style={{color: titleSlideTitleText}}>{currentStrings('slideTitle')}</h2>
        <p className={`text-lg md:text-xl ${titleSlideSubtitleOpacity}`} style={{color: titleSlideSubtitleText}}>{currentStrings('slideSubtitle')}</p>
        {/* DişYol branding removed from here
        <div className={`absolute bottom-4 right-4 text-xs ${titleSlideSubtitleOpacity}`} style={{color: titleSlideSubtitleText}}>
            <i className="fa-solid fa-tooth mr-1"></i> DişYol
        </div>
        */}
      </div>

      {/* Content Slide */}
      <div 
        className={`${slideBase} items-start text-left relative`} 
        style={{backgroundColor: contentSlideBg, borderColor: slideBorderColor}}
      >
        <h3 className={`text-2xl md:text-3xl font-semibold mb-4`} style={{color: contentSlideTitleText}}>{currentStrings('slidePoint1')}</h3>
        <ul className={`list-none p-0 space-y-2 text-sm md:text-base`} style={{color: contentSlideBodyText}}>
          <li className="flex items-center">
            <i className={`fa-solid fa-check-circle mr-2`} style={{color: contentSlideCheckIconColor}}></i> {currentStrings('slidePoint2')}
          </li>
          <li className="flex items-center">
            <i className={`fa-solid fa-check-circle mr-2`} style={{color: contentSlideCheckIconColor}}></i> {currentStrings('slidePoint3')}
          </li>
          <li className="flex items-center">
            <i className={`fa-solid fa-check-circle mr-2`} style={{color: contentSlideCheckIconColor}}></i> Additional point about innovation.
          </li>
        </ul>
        <div className={`absolute -bottom-2 -left-2 w-1/3 h-2 rounded-full opacity-70`} style={{backgroundColor: contentSlideAccentShape}}></div>
         <div className={`absolute top-4 right-4 text-xs opacity-60`} style={{color: contentSlideBodyText}}>
            Slide 2
        </div>
      </div>
    </div>
  );
};

export default PresentationSlideDemo;