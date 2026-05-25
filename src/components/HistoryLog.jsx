import React, { useState, useEffect } from 'react'
export default function HistoryLog({ clearHistory }) {
  const [localHistory, setLocalHistory] = useState([])

  useEffect(() => {
    const loadStorageData = () => {
      const savedHistory = localStorage.getItem("transfer_history")
      if (savedHistory) {
        setLocalHistory(JSON.parse(savedHistory))
      } else {
        setLocalHistory([])
      }
    }
    loadStorageData()
    const intervalId = setInterval(() => {
      loadStorageData()
      console.log("Local Storage logs reloaded background mein!")
    }, 2000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="bg-slate-900/40 border border-slate-900 rounded-3xl p-6 backdrop-blur-md shadow-2xl shadow-slate-950/50">
      
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-extrabold text-lg text-slate-100 tracking-tight">Conversion Memory Buffer</h3>
        {localHistory.length > 0 && (
          <button 
            onClick={() => {
              clearHistory()
              setLocalHistory([])
            }}
            type="button"
            className="text-[10px] uppercase tracking-wider font-extrabold text-rose-400 hover:text-rose-300 transition-colors"
          >
            Clear Logs
          </button>
        )}
      </div>
      
      <div className="space-y-3">
        {localHistory.length === 0 ? (
          <p className="text-xs text-slate-500 font-medium text-center py-4">No recent ledger data available.</p>
        ) : (
          localHistory.map((log) => (
            <div 
              key={log.id} 
              className="flex justify-between items-center p-4 bg-slate-950/50 border border-slate-900 rounded-xl hover:border-slate-800 transition"
            >
              <div>
                <p className="font-bold text-sm text-slate-300">
                  {log.amount} {log.from} to {log.to}
                </p>
                <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase mt-1 block">
                  {log.timestamp}
                </span>
              </div>
              <span className="font-mono text-xs font-bold text-indigo-400 bg-indigo-950/30 px-3 py-2 rounded-xl border border-indigo-900/20">
                {log.result} {log.to}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  )
}