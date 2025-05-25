import React from 'react';
import { useAppContext } from '../App';

const InvoiceDemo: React.FC = () => {
  const { currentStrings, theme } = useAppContext();

  const containerBg = theme === 'dark' ? 'bg-[var(--bg-primary-dark)]' : 'bg-[var(--bg-primary)]';
  const borderColor = theme === 'dark' ? 'border-[var(--border-dark)]' : 'border-[var(--border)]';

  const accentColor = 'var(--palette-p)';
  const textColor = theme === 'dark' ? 'text-[var(--text-secondary-dark)]' : 'text-[var(--text-secondary)]';
  const strongTextColor = theme === 'dark' ? 'text-[var(--text-primary-dark)]' : 'text-[var(--text-primary)]';
  
  const tableHeaderTextColor = theme === 'dark' ? 'text-[var(--text-primary-dark)]' : 'text-[var(--text-primary)]';

  const items = [
    { id: 1, descKey: 'invoiceItem1Desc', qty: 2, unitPrice: 35.50, note: "Premium Grade" },
    { id: 2, descKey: 'invoiceItem2Desc', qty: 1, unitPrice: 18.00, note: "Sterilized Pack" },
    { id: 3, descKey: 'invoiceItem3Desc', qty: 5, unitPrice: 85.00, note: "Comprehensive Set" },
  ];

  const subtotal = items.reduce((sum, item) => sum + item.qty * item.unitPrice, 0);
  const taxRate = 0.18;
  const taxAmount = subtotal * taxRate;
  const grandTotal = subtotal + taxAmount;

  return (
    <div className={`invoice-demo-wrapper w-full max-w-2xl mx-auto p-5 md:p-6 ${containerBg} rounded-[var(--border-radius-lg)] shadow-xl border ${borderColor}`}>
      {/* Invoice Header */}
      <div className={`flex flex-col sm:flex-row justify-between items-start mb-6 pb-4 border-b ${borderColor}`}>
        <div className="mb-4 sm:mb-0">
          <h1 className={`text-2xl font-bold flex items-center gap-2 ${strongTextColor}`}>
            <i className="fa-solid fa-tooth" style={{ color: accentColor }}></i> DişYol
          </h1>
          <p className={`text-xs ${textColor}`}>{currentStrings('invoiceCompanyAddress').split(',')[0]}</p>
        </div>
        <h2 className={`text-2xl font-semibold ${strongTextColor} tracking-tight sm:text-right`}>{currentStrings('invoiceTitle')}</h2>
      </div>

      {/* From/To */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 text-xs ${textColor}`}>
        <div>
          <p className={`font-semibold mb-0.5 ${strongTextColor}`}>{currentStrings('invoiceFrom')}</p>
          <p className={`${strongTextColor} font-medium`}>{currentStrings('invoiceCompanyName')}</p>
          <p>{currentStrings('invoiceCompanyAddress')}</p>
          <p>{currentStrings('invoiceCompanyContact')}</p>
        </div>
        <div className="sm:text-right">
          <p className={`font-semibold mb-0.5 ${strongTextColor}`}>{currentStrings('invoiceBillTo')}</p>
          <p className={`${strongTextColor} font-medium`}>{currentStrings('invoiceClientName')}</p>
          <p>{currentStrings('invoiceClientAddress')}</p>
        </div>
      </div>
      
      {/* Invoice Details */}
      <div className={`text-xs ${textColor} mb-6 space-y-1`}>
        <div><span className={`font-medium ${strongTextColor}`}>{currentStrings('invoiceNumberLabel')}</span> INV-2024-00123</div>
        <div><span className={`font-medium ${strongTextColor}`}>{currentStrings('invoiceDateLabel')}</span> July 29, 2024</div>
        <div><span className={`font-medium ${strongTextColor}`}>{currentStrings('invoiceDueDateLabel')}</span> August 28, 2024</div>
      </div>

      {/* Items Table */}
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr>
              <th className={`p-2 border-b-2 ${borderColor} font-semibold ${tableHeaderTextColor} text-left`}>{currentStrings('invoiceItemDesc')}</th>
              <th className={`p-2 border-b-2 ${borderColor} text-center font-semibold ${tableHeaderTextColor}`}>{currentStrings('invoiceItemQty')}</th>
              <th className={`p-2 border-b-2 ${borderColor} text-right font-semibold ${tableHeaderTextColor}`}>{currentStrings('invoiceItemUnitPrice')}</th>
              <th className={`p-2 border-b-2 ${borderColor} text-right font-semibold ${tableHeaderTextColor}`}>{currentStrings('invoiceItemTotal')}</th>
            </tr>
          </thead>
          <tbody className={`${textColor}`}>
            {items.map(item => (
              <tr key={item.id} className={`border-b ${borderColor} last:border-b-0`}>
                <td className={`p-2`}>
                  {currentStrings(item.descKey)}
                  {item.note && <span className="block text-[10px] opacity-70 mt-0.5">{item.note}</span>}
                </td>
                <td className={`p-2 text-center`}>{item.qty}</td>
                <td className={`p-2 text-right`}>${item.unitPrice.toFixed(2)}</td>
                <td className={`p-2 text-right font-medium ${strongTextColor}`}>${(item.qty * item.unitPrice).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Totals and Notes */}
      <div className={`grid grid-cols-1 md:grid-cols-5 gap-6 items-start mb-6 text-sm`}>
          <div className={`md:col-span-3 text-xs ${textColor}`}>
            <h4 className={`font-semibold mb-1 ${strongTextColor}`}>{currentStrings('invoiceNotes')}</h4>
            <p>{currentStrings('invoicePaymentTerms')}</p>
          </div>
          <div className="md:col-span-2 space-y-1 text-xs">
            <div className={`flex justify-between py-1`}>
              <span className={`${textColor}`}>{currentStrings('invoiceSubtotal')}</span>
              <span className={`${strongTextColor}`}>${subtotal.toFixed(2)}</span>
            </div>
            <div className={`flex justify-between py-1`}>
              <span className={`${textColor}`}>{currentStrings('invoiceTax')}</span>
              <span className={`${strongTextColor}`}>${taxAmount.toFixed(2)}</span>
            </div>
            <div 
              className={`flex justify-between pt-2 mt-1 text-base font-bold border-t-2`}
              style={{ borderColor: accentColor }}
            >
              <span style={{ color: accentColor }}>{currentStrings('invoiceGrandTotal')}</span>
              <span style={{ color: accentColor }}>${grandTotal.toFixed(2)}</span>
            </div>
          </div>
      </div>
      
      <div className={`text-center text-xs mt-6 pt-4 border-t ${borderColor} ${textColor}`}>
        <p>&copy; {new Date().getFullYear()} {currentStrings('invoiceCompanyName')}. All rights reserved.</p>
      </div>
    </div>
  );
};

export default InvoiceDemo;