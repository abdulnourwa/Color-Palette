
import React from 'react';
import { useAppContext } from '../App';

const WebAppDemo: React.FC = () => {
  const { currentStrings, theme } = useAppContext();

  const actionBtnBg = theme === 'dark' ? 'var(--palette-a)' : 'var(--palette-p)';
  const actionBtnText = theme === 'dark' ? 'var(--palette-ta)' : 'var(--palette-tp)';
  
  const infoCardBg = theme === 'dark' ? 'var(--bg-secondary-dark)' : 'var(--bg-primary)';
  const infoCardBorderColor = theme === 'dark' ? 'var(--palette-a)' : 'var(--palette-s)';
  const infoCardValueColor = 'var(--palette-p)'; 

  const settingsItemBg = theme === 'dark' ? 'var(--bg-secondary-dark)' : 'var(--bg-primary)';
  const settingsItemHoverBg = theme === 'dark' ? 'var(--bg-accent-dark)' : 'var(--bg-accent)';
  const settingsItemBorder = 'var(--border)'; 
  const settingsIconColor = theme === 'dark' ? 'var(--palette-a)' : 'var(--palette-s)';

  const tableHeaderBg = theme === 'dark' ? 'bg-[var(--bg-accent-dark)]' : 'bg-[var(--bg-accent)]';
  const tableCellBorder = 'var(--border)';
  const tableRowBg = theme === 'dark' ? 'bg-[var(--bg-primary-dark)]' : 'bg-[var(--bg-primary)]';
  const tableRowHoverBg = theme === 'dark' ? 'hover:bg-[var(--bg-secondary-dark)]' : 'hover:bg-[var(--bg-accent-light)]';


  return (
    <div className="webapp-snippet-container w-full bg-[var(--bg-accent)] rounded-[var(--border-radius-md)] p-5">
      <div className="webapp-header flex justify-between items-center mb-5">
        <h2 className="text-lg text-[var(--text-primary)] font-semibold">{currentStrings('webAppHeader')}</h2>
        <button 
          type="button"
          className={`webapp-action-btn py-2 px-[15px] border-none rounded-[var(--border-radius-sm)] font-medium cursor-pointer flex items-center gap-[6px] text-sm clickable-feedback`} 
          style={{backgroundColor: actionBtnBg, color: actionBtnText}}
          role="button"
        >
          <i className="fa-solid fa-plus"></i> <span>{currentStrings('webAppBtnAdd')}</span>
        </button>
      </div>
      <div className="webapp-card-grid grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-[15px]">
        {/* Card 1 */}
        <div 
          className={`webapp-info-card border-l-4 p-[15px] rounded-[var(--border-radius-sm)] shadow-[0_2px_5px_var(--shadow)]`}
          style={{backgroundColor: infoCardBg, borderLeftColor: infoCardBorderColor}}
        >
          <div className="label text-xs text-[var(--text-secondary)] mb-[5px]">{currentStrings('webAppCard1Label')}</div>
          <div className="value text-xl font-semibold flex items-center gap-2" style={{color: infoCardValueColor}}>
            <i className="fa-solid fa-school-flag text-[0.9em]"></i> 27
          </div>
        </div>
        {/* Card 2 */}
         <div 
          className={`webapp-info-card border-l-4 p-[15px] rounded-[var(--border-radius-sm)] shadow-[0_2px_5px_var(--shadow)]`}
          style={{backgroundColor: infoCardBg, borderLeftColor: infoCardBorderColor}}
        >
          <div className="label text-xs text-[var(--text-secondary)] mb-[5px]">{currentStrings('webAppCard2Label')}</div>
          <div className="value text-xl font-semibold flex items-center gap-2" style={{color: infoCardValueColor}}>
            <i className="fa-solid fa-clipboard-list text-[0.9em]"></i> 15
          </div>
        </div>
        {/* Card 3 */}
        <div 
          className={`webapp-info-card border-l-4 p-[15px] rounded-[var(--border-radius-sm)] shadow-[0_2px_5px_var(--shadow)]`}
          style={{backgroundColor: infoCardBg, borderLeftColor: infoCardBorderColor}}
        >
          <div className="label text-xs text-[var(--text-secondary)] mb-[5px]">{currentStrings('webAppCard3Label')}</div>
          <div className="value text-xl font-semibold flex items-center gap-2" style={{color: infoCardValueColor}}>
            <i className="fa-solid fa-triangle-exclamation text-[0.9em]"></i> 6
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-md font-semibold text-[var(--text-primary)] mb-3">{currentStrings('webAppTableTitle')}</h3>
        <div className={`w-full overflow-x-auto rounded-[var(--border-radius-sm)] border shadow-[0_2px_5px_var(--shadow)]`} style={{borderColor: tableCellBorder}}>
          <table className="w-full text-sm text-left text-[var(--text-secondary)]">
            <thead className={`text-xs text-[var(--text-primary)] uppercase ${tableHeaderBg}`}>
              <tr>
                <th scope="col" className="py-2 px-3">{currentStrings('webAppTableHeader1')}</th>
                <th scope="col" className="py-2 px-3">{currentStrings('webAppTableHeader2')}</th>
                <th scope="col" className="py-2 px-3">{currentStrings('webAppTableHeader3')}</th>
              </tr>
            </thead>
            <tbody>
              <tr className={`border-b ${tableRowHoverBg}`} style={{backgroundColor: tableRowBg, borderBottomColor: tableCellBorder}}>
                <td className="py-2 px-3 font-medium text-[var(--text-primary)] whitespace-nowrap">{currentStrings('webAppTableData1')}</td>
                <td className="py-2 px-3">{currentStrings('webAppTableData1Action')}</td>
                <td className="py-2 px-3">2024-07-28</td>
              </tr>
              <tr className={`border-b ${tableRowHoverBg}`} style={{backgroundColor: tableRowBg, borderBottomColor: tableCellBorder}}>
                <td className="py-2 px-3 font-medium text-[var(--text-primary)] whitespace-nowrap">{currentStrings('webAppTableData2')}</td>
                <td className="py-2 px-3">{currentStrings('webAppTableData2Action')}</td>
                <td className="py-2 px-3">2024-07-27</td>
              </tr>
              <tr className={`${tableRowHoverBg}`} style={{backgroundColor: tableRowBg}}>
                <td className="py-2 px-3 font-medium text-[var(--text-primary)] whitespace-nowrap">{currentStrings('webAppTableData3')}</td>
                <td className="py-2 px-3">{currentStrings('webAppTableData3Action')}</td>
                <td className="py-2 px-3">2024-07-26</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div 
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && e.currentTarget.click()}
        className={`settings-item-mock mt-6 p-[12px_15px] rounded-[var(--border-radius-sm)] flex justify-between items-center text-sm text-[var(--text-primary)] cursor-pointer border hover:bg-[var(--settings-hover-bg)] clickable-feedback`}
        style={{backgroundColor: settingsItemBg, borderColor: settingsItemBorder, '--settings-hover-bg': settingsItemHoverBg} as React.CSSProperties}
      >
        <div className="label flex items-center gap-[10px]">
          <i className={`fa-solid fa-sliders text-[1.1em]`} style={{color: settingsIconColor}}></i> <span>{currentStrings('webAppSetting1')}</span>
        </div>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
      <div 
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && e.currentTarget.click()}
        className={`settings-item-mock mt-[10px] p-[12px_15px] rounded-[var(--border-radius-sm)] flex justify-between items-center text-sm text-[var(--text-primary)] cursor-pointer border hover:bg-[var(--settings-hover-bg)] clickable-feedback`}
        style={{backgroundColor: settingsItemBg, borderColor: settingsItemBorder, '--settings-hover-bg': settingsItemHoverBg} as React.CSSProperties}
      >
        <div className="label flex items-center gap-[10px]">
          <i className={`fa-solid fa-users-gear text-[1.1em]`} style={{color: settingsIconColor}}></i> <span>{currentStrings('webAppSetting2')}</span>
        </div>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  );
};

export default WebAppDemo;