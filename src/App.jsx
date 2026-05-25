import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import ConverterCard from './components/ConverterCard'
import AnalyticsTable from './components/AnalyticsTable'
import HistoryLog from './components/HistoryLog'

export default function App() {
  const [activeTab, setActiveTab] = useState('converter')
  const [exchangeRates, setExchangeRates] = useState({})

  const [history, setHistory] = useState(() => {
    const savedHistory = localStorage.getItem("transfer_history")
    return savedHistory ? JSON.parse(savedHistory) : []
  })

  useEffect(() => {
    let fetchApi = async () => {
      try {
        let res = await fetch(`https://v6.exchangerate-api.com/v6/${import.meta.env.VITE_EXCHANGE_RATE_KEY}/latest/USD`)
        let data = await res.json()
        if (data.result === "success") {
          setExchangeRates(data.conversion_rates)
        }
      } catch (error) {
        console.error("Error in fetching rates", error)
      }
    };
    fetchApi()
  }, [])
  const clearHistory = () => {
    setHistory([])
    localStorage.removeItem("transfer_history")
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="max-w-4xl mx-auto px-4 py-12">
        {activeTab === 'converter' && (<ConverterCard exchangeRates={exchangeRates} history={history} setHistory={setHistory}/>)}
        {activeTab === 'analytics' && (<AnalyticsTable exchangeRates={exchangeRates} />)}
        {activeTab === 'history' && (<HistoryLog history={history} clearHistory={clearHistory} />)}
      </main>

    </div>
  );
}