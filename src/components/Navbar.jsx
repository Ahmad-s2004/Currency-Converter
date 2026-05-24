import React from 'react';
import { CircleDollarSign, RefreshCw, BarChart3, History } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {

  return (
    <header className="border-b border-slate-900 bg-slate-950/70 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-tr from-indigo-600 to-violet-500 p-2.5 rounded-xl text-white shadow-lg shadow-indigo-500/20">
            <CircleDollarSign className="w-5 h-5" />
          </div>
          <div>
            <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              ApexChange
            </span>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Multi-Chain Engine</p>
          </div>
        </div>
        
        <nav className="flex bg-slate-900/90 p-1 rounded-xl border border-slate-800">
          <button onClick={() => setActiveTab('converter')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
              activeTab === 'converter' 
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/10' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <RefreshCw className="w-3.5 h-3.5" /> Converter
          </button>
          
          <button onClick={() => setActiveTab('analytics')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
              activeTab === 'analytics' 
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/10' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" /> Analytics
          </button>
          
          <button onClick={() => setActiveTab('history')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
              activeTab === 'history' 
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/10' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <History className="w-3.5 h-3.5" /> Log
          </button>
        </nav>

      </div>
    </header>
  );
}