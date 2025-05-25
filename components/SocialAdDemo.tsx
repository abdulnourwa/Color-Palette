
import React, { useState } from 'react';
import { useAppContext } from '../App';

const SocialAdDemo: React.FC = () => {
  const { currentStrings, theme } = useAppContext();
  const [focusMode, setFocusMode] = useState<'post' | 'story'>('post');
  
  const containerBgClass = theme === 'dark' ? "bg-[var(--bg-secondary-dark)] shadow-[0_2px_10px_var(--shadow-dark)]" : "bg-[var(--bg-primary)] shadow-[0_2px_10px_var(--shadow-light)]";
  const iconPlaceholderClass = theme === 'dark' ? "text-[var(--palette-a)]" : "text-[var(--palette-p)]";
  const linkClass = theme === 'dark' ? "text-[var(--palette-a)]" : "text-[var(--palette-p)]";
  
  const storyGradient = `linear-gradient(160deg, var(--palette-p), var(--palette-s))`
  const storyUserAvatarBg = theme === 'dark' ? 'var(--palette-l)' : 'var(--palette-c)';
  const storyUserAvatarIconColor = theme === 'dark' ? 'var(--palette-p)' : 'var(--palette-p)'; 

  const toggleButtonBg = theme === 'dark' ? 'bg-[var(--bg-accent-dark)] hover:bg-[var(--border-dark)]' : 'bg-[var(--bg-accent)] hover:bg-[var(--border)]';
  const toggleButtonText = theme === 'dark' ? 'text-[var(--text-primary-dark)]' : 'text-[var(--text-primary)]';

  const socialAdWrapperBase = "transition-all duration-500 ease-in-out w-full";
  const storyWrapperBase = "transition-all duration-500 ease-in-out w-full flex flex-col items-center sm:items-start";
  
  const socialAdInnerBase = "transition-all duration-300 ease-in-out";
  const storyInnerBase = "transition-all duration-300 ease-in-out";

  const focusButtonTitleText = `Switch focus to ${focusMode === 'post' ? currentStrings('socialAdStoryPreview') : currentStrings('socialAdCaption') }`;
  const focusButtonIconClass = `fa-solid ${focusMode === 'post' ? 'fa-maximize' : 'fa-minimize'}`;
  const focusButtonText = focusMode === 'post' ? currentStrings('socialAdFocusBtnStory') : currentStrings('socialAdFocusBtnPost');

  const socialAdCaptionText = currentStrings('socialAdCaption');
  const storyCaptionCharLimit = focusMode === 'story' ? 70 : 30;
  const displayStoryCaption = socialAdCaptionText.length > storyCaptionCharLimit
    ? socialAdCaptionText.substring(0, storyCaptionCharLimit) + '...'
    : socialAdCaptionText;

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col sm:flex-row gap-4 items-stretch justify-center w-full mb-6">
        <div className={`
          ${socialAdWrapperBase}
          ${focusMode === 'post' ? 'sm:flex-grow-[1.5]' : 'sm:flex-grow-[1]'} 
        `}>
          <div className={`
            ${socialAdInnerBase}
            ${focusMode === 'story' ? 'sm:scale-90 sm:opacity-60' : 'sm:scale-100 sm:opacity-100'}
            w-full max-w-[320px] sm:max-w-full mx-auto rounded-[var(--border-radius-sm)] ${containerBgClass} overflow-hidden h-full flex flex-col
          `}>
            <div className="social-post-mockup flex flex-col h-full">
              <div className="social-header flex items-center p-[10px_12px] gap-[8px] border-b border-[var(--border)]">
                <i className={`fa-solid fa-tooth social-icon-placeholder text-lg ${iconPlaceholderClass}`}></i>
                <span className="social-username font-semibold text-[13px] text-[var(--text-primary)]">DişYol Türkiye</span>
              </div>
              <div className="social-image-area w-full aspect-square flex items-center justify-center bg-[var(--palette-a)]">
                <i className="fa-solid fa-graduation-cap text-5xl text-[var(--palette-tp)] [text-shadow:0_2px_4px_rgba(0,0,0,0.3)]"></i>
              </div>
              <div className="social-caption-area p-[10px_12px] text-[13px] leading-normal text-[var(--text-primary)] flex-grow">
                <p className="social-caption mb-2">
                  {currentStrings('socialAdCaption')}
                </p>
                <a href="#" tabIndex={focusMode === 'story' ? -1 : 0} className={`social-link font-semibold no-underline inline-block ${linkClass} hover:underline text-xs clickable-feedback`}>
                  <span>{currentStrings('socialAdLink')}</span> <i className="fa-solid fa-arrow-right fa-xs"></i>
                </a>
              </div>
              <div className="social-actions flex gap-[12px] p-[8px_12px] text-lg text-[var(--text-secondary)] border-t border-[var(--border)] mt-auto">
                <i className="fa-regular fa-heart cursor-pointer hover:text-[var(--text-primary)] clickable-feedback"></i>
                <i className="fa-regular fa-comment cursor-pointer hover:text-[var(--text-primary)] clickable-feedback"></i>
                <i className="fa-regular fa-paper-plane cursor-pointer hover:text-[var(--text-primary)] clickable-feedback"></i>
              </div>
            </div>
          </div>
        </div>

        <div className={`
          ${storyWrapperBase}
          ${focusMode === 'story' ? 'sm:flex-grow-[1.5]' : 'sm:flex-grow-[0.8]'}
        `}>
           <p className="text-xs text-[var(--text-secondary)] mb-2 font-medium text-center sm:text-left w-full px-1">
             {currentStrings('socialAdStoryPreview')}
           </p>
          <div className={`
            ${storyInnerBase} 
            flex justify-center sm:justify-start w-full h-full 
            sm:scale-100 sm:opacity-100
          `}>
            <div 
              className={`story-inner relative overflow-hidden rounded-xl border border-[var(--border)] shadow-lg 
                          ${focusMode === 'story' ? 'w-full max-w-[280px] min-w-[240px] aspect-[9/16]' : 'w-[100px] h-[170px] sm:w-[120px] sm:h-[204px]'} 
                          transition-all duration-500 ease-in-out group cursor-pointer clickable-feedback`}
              style={{ background: storyGradient }}
              onClick={() => focusMode === 'post' && setFocusMode('story')}
              onKeyDown={(e) => focusMode === 'post' && (e.key === 'Enter' || e.key === ' ') && setFocusMode('story')}
              role="button"
              tabIndex={focusMode === 'post' ? 0 : -1} 
              aria-label={focusMode === 'post' ? `Focus on story` : 'Story preview'}
            >
              <div className="absolute top-2 left-2 right-2 h-[3px] flex space-x-1 z-10">
                  <div className="h-full flex-1 bg-[rgba(255,255,255,0.3)] rounded-full overflow-hidden"><div className="h-full w-3/4 bg-white"></div></div>
                  <div className="h-full flex-1 bg-[rgba(255,255,255,0.3)] rounded-full"></div>
                  <div className="h-full flex-1 bg-[rgba(255,255,255,0.3)] rounded-full"></div>
              </div>
              <div className="absolute top-5 left-3 flex items-center gap-2 z-10">
                  <div className={`rounded-full flex items-center justify-center shadow transition-all duration-300`}
                       style={{
                        width: focusMode === 'story' ? '32px' : '28px',
                        height: focusMode === 'story' ? '32px' : '28px',
                        backgroundColor: storyUserAvatarBg
                       }}
                  >
                      <i 
                        className={`fa-solid fa-tooth transition-all duration-300`}
                        style={{
                            color: storyUserAvatarIconColor,
                            fontSize: focusMode === 'story' ? '14px' : '12px'
                        }}
                      ></i>
                  </div>
                  <span className={`font-semibold text-[var(--palette-tp)] transition-all duration-300`}
                        style={{ fontSize: focusMode === 'story' ? '12px' : '10px'}}
                  >DişYol</span>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-3 pt-12 text-center">
                  <i className={`fa-solid fa-graduation-cap text-[var(--palette-tp)] opacity-90 mb-2
                                ${focusMode === 'story' ? 'text-5xl' : 'text-3xl'} transition-all duration-300`}></i>
                  <p className={`font-semibold text-[var(--palette-tp)] leading-tight px-1
                                ${focusMode === 'story' ? 'text-base' : 'text-[10px]'} transition-all duration-300`}>
                      {displayStoryCaption}
                  </p>
                  {focusMode === 'story' && (
                      <a href="#" tabIndex={0} className="mt-4 py-2 px-5 bg-[rgba(255,255,255,0.95)] text-[var(--palette-p)] rounded-full text-xs font-bold shadow-md hover:bg-white transition-colors clickable-feedback">
                          {currentStrings('socialAdLink')}
                      </a>
                  )}
              </div>
               <div className={`absolute top-5 right-3 text-[var(--palette-tp)] z-10 ${focusMode === 'story' ? 'text-base' : 'text-xs'}`}>
                  <i className="fa-solid fa-ellipsis-vertical clickable-feedback"></i>
              </div>
              {focusMode === 'post' && (
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                   <span className="text-white text-xs font-semibold backdrop-blur-sm bg-black/20 px-2 py-1 rounded">View</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={() => setFocusMode(prev => prev === 'post' ? 'story' : 'post')}
        className={`focus-toggle-btn py-2 px-5 rounded-[var(--border-radius-sm)] font-semibold text-sm flex items-center gap-2 shadow-md hover:shadow-lg transition-all ${toggleButtonBg} ${toggleButtonText} clickable-feedback`}
        title={focusButtonTitleText}
      >
        <i className={focusButtonIconClass}></i>
        <span>{focusButtonText}</span>
      </button>
    </div>
  );
};

export default SocialAdDemo;