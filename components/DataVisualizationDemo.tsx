import React from 'react';
import { useAppContext } from '../App';

const DataVisualizationDemo: React.FC = () => {
  const { currentStrings, theme, currentPaletteData } = useAppContext();

  const chartContainerBg = theme === 'dark' ? 'bg-[var(--bg-secondary-dark)]' : 'bg-[var(--bg-primary)]';
  const axisColor = theme === 'dark' ? 'text-[var(--text-secondary-dark)]' : 'text-[var(--text-secondary)]';
  const titleColor = theme === 'dark' ? 'text-[var(--text-primary-dark)]' : 'text-[var(--text-primary)]';
  const chartBorderColor = 'var(--border)';

  const barColors = [
    currentPaletteData.vars.p, // Primary
    currentPaletteData.vars.s, // Secondary
    currentPaletteData.vars.a, // Accent
  ];

  const data = [
    { labelKey: 'chartLabel1', value: 65 },
    { labelKey: 'chartLabel2', value: 80 },
    { labelKey: 'chartLabel3', value: 72 },
  ];
  const maxValue = 100;


  return (
    <div 
      className={`data-viz-wrapper w-full max-w-md mx-auto p-6 rounded-[var(--border-radius-lg)] shadow-lg border`}
      style={{backgroundColor: chartContainerBg, borderColor: chartBorderColor}}
    >
      <h3 className={`text-lg font-semibold mb-6 text-center ${titleColor}`}>{currentStrings('chartTitle')}</h3>
      <div className="chart-container flex justify-around items-end h-48 space-x-2 relative">
        {/* Y-Axis lines and labels */}
        {[0, 25, 50, 75, 100].map(val => (
           <div key={val} className="absolute w-full lang-en:left-0 lang-ar:right-0 flex items-center" style={{ bottom: `${(val/maxValue)*100}%`}}>
             <span className={`text-[10px] ${axisColor} lang-en:-ml-5 lang-ar:-mr-5`}>{val}</span>
             <div className="flex-grow border-t border-dashed opacity-50" style={{borderColor: chartBorderColor}}></div>
           </div>
        ))}

        {data.map((item, index) => (
          <div key={item.labelKey} className="bar-wrapper flex flex-col items-center h-full justify-end relative z-10 flex-1 max-w-[60px]">
            <div
              className="bar w-full rounded-t-[var(--border-radius-sm)] transition-all duration-500 ease-out"
              style={{ 
                height: `${(item.value / maxValue) * 100}%`, 
                backgroundColor: barColors[index % barColors.length],
                boxShadow: `0 2px 8px -2px ${barColors[index % barColors.length]}80`, // Add some transparency to shadow
              }}
              title={`${currentStrings(item.labelKey)}: ${item.value}`}
            ></div>
            <span className={`text-xs mt-2 ${axisColor}`}>{currentStrings(item.labelKey)}</span>
          </div>
        ))}
      </div>
       {/* X-Axis Line */}
      <div className={`mt-1 border-t ${axisColor}`} style={{borderColor: chartBorderColor}}></div>
    </div>
  );
};

export default DataVisualizationDemo;