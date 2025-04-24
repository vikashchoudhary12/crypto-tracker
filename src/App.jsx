import React from 'react'
import AssetsTable from './components/AssetsTable'
import PriceUpdater from './components/PriceUpdater'

export default function App() {
  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Real‑Time Crypto Price Tracker</h1>
      <AssetsTable />
      <PriceUpdater />
    </div>
  )
}