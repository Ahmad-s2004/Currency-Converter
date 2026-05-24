import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ConverterCard from './components/ConverterCard';
import AnalyticsTable from './components/AnalyticsTable';
import HistoryLog from './components/HistoryLog';

export default function App() {
  const [activeTab, setActiveTab] = useState('converter');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="max-w-4xl mx-auto px-4 py-12">
        {activeTab === 'converter' && <ConverterCard />}
        {activeTab === 'analytics' && <AnalyticsTable />}
        {activeTab === 'history' && <HistoryLog />}
      </main>

    </div>
  );
}