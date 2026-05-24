import React from 'react';

export default function HistoryLog() {
  return (
    <div className="bg-slate-900/40 border border-slate-900 rounded-3xl p-6 backdrop-blur-md shadow-2xl shadow-slate-950/50">
      <h3 className="font-extrabold text-lg text-slate-100 tracking-tight mb-4">Conversion Memory Buffer</h3>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center p-4 bg-slate-950/50 border border-slate-900 rounded-xl hover:border-slate-800 transition">
          <div>
            <p className="font-bold text-sm text-slate-300">100 USD to BTC</p>
            <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase mt-1 block">12:30 PM</span>
          </div>
          <span className="font-mono text-xs font-bold text-indigo-400 bg-indigo-950/30 px-3 py-2 rounded-xl border border-indigo-900/20">
            0.001450 BTC
          </span>
        </div>

        <div className="flex justify-between items-center p-4 bg-slate-950/50 border border-slate-900 rounded-xl hover:border-slate-800 transition">
          <div>
            <p className="font-bold text-sm text-slate-300">500 EUR to PKR</p>
            <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase mt-1 block">11:15 AM</span>
          </div>
          <span className="font-mono text-xs font-bold text-indigo-400 bg-indigo-950/30 px-3 py-2 rounded-xl border border-indigo-900/20">
            151,304.35 PKR
          </span>
        </div>

        <div className="flex justify-between items-center p-4 bg-slate-950/50 border border-slate-900 rounded-xl hover:border-slate-800 transition">
          <div>
            <p className="font-bold text-sm text-slate-300">0.5 ETH to USD</p>
            <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase mt-1 block">10:02 AM</span>
          </div>
          <span className="font-mono text-xs font-bold text-indigo-400 bg-indigo-950/30 px-3 py-2 rounded-xl border border-indigo-900/20">
            1,725.00 USD
          </span>
        </div>
      </div>
    </div>
  );
}