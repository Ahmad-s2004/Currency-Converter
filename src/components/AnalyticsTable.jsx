import React from 'react';

export default function AnalyticsTable({ exchangeRates }) {
  
  const matrixCurrencies = [
    { code: "USD", name: "US Dollar Anchor", class: "BASE ANCHOR" },
    { code: "EUR", name: "Euro Zone Standard", class: "FIAT LAYER" },
    { code: "PKR", name: "Pakistani Rupee", class: "FIAT LAYER" },
    { code: "GBP", name: "British Pound Sterling", class: "FIAT LAYER" },
    { code: "AED", name: "UAE Dirham", class: "FIAT LAYER" },
    { code: "SAR", name: "Saudi Riyal", class: "FIAT LAYER" },
  ]

  return (
    <div className="bg-slate-900/40 border border-slate-900 rounded-3xl overflow-hidden backdrop-blur-md shadow-2xl shadow-slate-950/50">
      <div className="p-6 border-b border-slate-900 flex justify-between items-center bg-slate-950/20">
        <div>
          <h3 className="font-extrabold text-lg text-slate-100 tracking-tight">Global Forex Parity Matrix</h3>
          <p className="text-xs text-slate-400 mt-0.5">Live aggregated tracking metrics mapped against USD.</p>
        </div>
        <span className="text-[10px] bg-emerald-950/40 text-emerald-400 px-3 py-1 rounded-full font-bold uppercase tracking-wider border border-emerald-900/30 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" /> Forex-Feed Active
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-900 bg-slate-950/60 text-[10px] font-bold uppercase tracking-widest text-slate-400">
              <th className="py-4 px-6">Asset Token</th>
              <th className="py-4 px-6">Classification</th>
              <th className="py-4 px-6 text-right">Value (vs 1.00 USD)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-900 text-sm font-medium">
            {matrixCurrencies.map((currency) => {
              const liveRate = exchangeRates[currency.code] 
                ? exchangeRates[currency.code].toFixed(2) 
                : "Loading..."
              return (
                <tr key={currency.code} className="hover:bg-slate-900/30 transition-colors group">
                  <td className="py-4 px-6 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-slate-950 flex items-center justify-center text-xs font-mono font-black text-slate-300 border border-slate-800">
                      {currency.code}
                    </div>
                    <span className="text-slate-200 font-bold text-sm">{currency.name}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`text-[9px] px-2 py-1 rounded-md font-extrabold uppercase tracking-widest border ${
                      currency.code === "USD" 
                        ? "bg-amber-950/40 text-amber-400 border-amber-900/30" 
                        : "bg-blue-950/40 text-blue-400 border-blue-900/30"
                    }`}>
                      {currency.class}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right font-mono font-bold text-cyan-400">
                    {currency.code === "USD" ? "$1.00" : liveRate}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}