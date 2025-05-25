import React from 'react';
import { useAppContext } from '../App';

const ShippingBoxDemo: React.FC = () => {
  const { currentStrings, theme } = useAppContext();
  
  const boxColor = 'var(--palette-p)'; // Primary palette color for the box itself
  const boxTextColor = 'var(--palette-tp)'; // Text color on primary
  
  const labelBg = theme === 'dark' ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.95)'; // Near white for label
  const labelText = '#333333'; // Dark text for label for readability

  // Flaps can be a slightly darker/lighter shade of P or use S
  const flapColor = 'var(--palette-s)'; 
  const tapeColor = 'var(--palette-s)'; // Tape effect can use secondary or accent


  return (
    <div className="shipping-box-demo flex justify-center items-center min-h-[300px] w-full">
      <div 
        className="shipping-box w-[240px] h-[160px] rounded-[var(--border-radius-sm)] relative flex flex-col justify-between items-center p-4 text-center"
        style={{
          backgroundColor: boxColor, 
          color: boxTextColor,
          boxShadow: `0 10px 25px var(--shadow-lg), 0 0 0 5px ${tapeColor}`
        }}
      >
        {/* Flaps illusion - styled with palette color S */}
        <div className="shipping-box-flaps">
            <div className="flap top" style={{backgroundColor: flapColor, opacity: 0.8, border: `1px solid ${theme==='dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`}}></div>
            <div className="flap side" style={{backgroundColor: flapColor, opacity: 0.8, border: `1px solid ${theme==='dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`}}></div>
        </div>

        {/* Top content */}
        <div className="w-full flex justify-between items-start z-10">
          <div className="shipping-box-logo text-3xl">
            <i className="fa-solid fa-tooth"></i>
          </div>
          {/* Small QR code like placeholder */}
          <div className="w-8 h-8 rounded-sm flex items-center justify-center" style={{backgroundColor: boxTextColor, opacity: 0.7}}>
             <i className="fa-solid fa-qrcode text-lg" style={{color: boxColor}}></i>
          </div>
        </div>
        
        {/* Middle area for label */}
        <div 
            className={`shipping-label absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[70px] rounded-sm p-2 shadow-md z-10`}
            style={{backgroundColor: labelBg, color: labelText}}
        >
          <p className="text-[7px] leading-tight whitespace-pre-line font-mono">
            {currentStrings('shippingLabelText')}
          </p>
        </div>

        {/* Bottom text */}
        <div className="shipping-box-text text-xs font-medium self-center z-10">
          {currentStrings('shippingBoxText')}
        </div>
      </div>
    </div>
  );
};

// Add basic CSS for flaps directly in a style tag or in index.html if not already there
// This is a simplified version, complex flap illusion might need ::before/::after in index.html
const flapStyles = `
  .shipping-box-flaps .flap { position: absolute; }
  .shipping-box-flaps .flap.top { width: 90%; height: 30px; top: -15px; left: 5%; border-radius: var(--border-radius-sm) var(--border-radius-sm) 0 0; transform: skewX(-5deg); }
  body.lang-ar .shipping-box-flaps .flap.top { transform: skewX(5deg); }
  .shipping-box-flaps .flap.side { width: 30px; height: 80%; top: 10%; left: -15px; border-radius: var(--border-radius-sm) 0 0 var(--border-radius-sm); transform: skewY(-5deg); }
  body.lang-ar .shipping-box-flaps .flap.side { left: auto; right: -15px; transform: skewY(5deg); border-radius: 0 var(--border-radius-sm) var(--border-radius-sm) 0; }
`;

// Inject styles (in a real app, this would be in a CSS file or styled-components)
if (typeof window !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = flapStyles;
  document.head.appendChild(styleSheet);
}


export default ShippingBoxDemo;