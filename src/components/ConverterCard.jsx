import React from 'react';
import { ArrowRightLeft } from 'lucide-react';

export default function ConverterCard() {
  return (
    <div className="bg-slate-900/40 border border-slate-900 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-2xl shadow-slate-950/50 relative overflow-hidden">
      <div className="mb-6">
        <h2 className="text-xl font-extrabold text-slate-100 tracking-tight">Cross-Chain Currency Bridge</h2>
        <p className="text-xs text-slate-400 mt-1">Convert instantly between global fiat layers and digital crypto assets.</p>
      </div>
      
      <form className="space-y-6">
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Transaction Value</label>
          <input 
            type="text"
            defaultValue="100"
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 font-mono text-lg text-slate-100 placeholder-slate-700 focus:outline-none focus:border-slate-700 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-150"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Source Asset</label>
            <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-300 focus:outline-none focus:border-slate-700 cursor-pointer">
              <option value="USD">USD - US Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="PKR">PKR - Pakistani Rupee</option>
              <option value="BTC">BTC - Bitcoin</option>
              <option value="ETH">ETH - Ethereum</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Target Asset</label>
            <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-300 focus:outline-none focus:border-slate-700 cursor-pointer">
            <option value="USD">USD - US Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="PKR">PKR - Pakistani Rupee</option>
              <option value="BTC">BTC - Bitcoin</option>
              <option value="ETH">ETH - Ethereum</option>
            </select>
          </div>
        </div>

        <button 
          type="button"
          className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold text-sm uppercase tracking-wider py-4 px-6 rounded-xl shadow-xl shadow-indigo-600/10 transition-all flex items-center justify-center gap-2 mt-2"
        >
          <ArrowRightLeft className="w-4 h-4" />
          <span>Execute Hybrid Swap</span>
        </button>
      </form>

      <div className="mt-8 pt-6 border-t border-slate-900 text-center bg-slate-950/30 rounded-2xl p-4 border border-slate-900/60">
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Calculated Yield Output</p>
        <div className="text-2xl sm:text-3xl font-mono font-black text-cyan-400 mt-2 tracking-tight">
          0.001450 <span className="text-sm font-sans font-extrabold text-slate-400">BTC</span>
        </div>
      </div>
    </div>
  );
}