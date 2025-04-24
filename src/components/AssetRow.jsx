import React from 'react'

export default function AssetRow({ asset, index }) {
  const formatPercentage = (value) => {
    const isPositive = value >= 0
    return (
      <td className={`${isPositive ? 'text-green-500' : 'text-red-500'} text-right px-4 py-4`}>
        {isPositive ? '↑' : '↓'}{Math.abs(value).toFixed(2)}%
      </td>
    )
  }

  const getCryptoLogo = (symbol) => {
    const logos = {
      BTC: <svg viewBox="0 0 32 32" className="w-8 h-8"><circle cx="16" cy="16" r="16" fill="#F7931A"/><path d="M23 14.5c.3-2-1.2-3-3.2-3.7l.6-2.6-1.6-.4-.6 2.5c-.4-.1-.8-.2-1.3-.3l.7-2.5-1.6-.4-.7 2.6c-.3-.1-.7-.2-1-.2v-.1l-2.2-.5-.4 1.7s1.2.3 1.2.3c.7.2.8.6.8 1l-.8 3.2c0 .1.1.2.2.3-.1 0-.2-.1-.3-.1l-1.2-.3-.8 1.8 2 .5c.4.1.8.2 1.1.3l-.7 2.6 1.6.4.7-2.6c.4.1.9.2 1.3.3l-.6 2.6 1.6.4.7-2.6c2.6.5 4.5 0 5.3-2 .7-1.6 0-2.5-1.4-3.1.9-.3 1.6-.9 1.8-2.2z" fill="white"/></svg>,
      ETH: <svg viewBox="0 0 32 32" className="w-8 h-8"><circle cx="16" cy="16" r="16" fill="#627EEA"/><path d="M16 4v8.9l7.5 3.3L16 4zm0 0v8.9l-7.5 3.3L16 4zm0 24v-7.2l7.5-4.4L16 28zm0 0v-7.2l-7.5-4.4L16 28zm0-15l7.5 3.4-7.5 4.4V13zm0 0L8.5 16.4l7.5 4.4V13z" fill="white" fillOpacity=".6"/></svg>,
      USDT: <svg viewBox="0 0 32 32" className="w-8 h-8"><circle cx="16" cy="16" r="16" fill="#26A17B"/><path d="M17.922 17.383v-.002c-.11.008-.677.042-1.942.042-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658 0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061 1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658 0 .81-2.895 1.485-6.775 1.657m0-3.59v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118 0 1.044 3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116 0-1.043-3.301-1.914-7.694-2.117" fill="white"/></svg>,
      XRP: <svg viewBox="0 0 32 32" className="w-8 h-8"><circle cx="16" cy="16" r="16" fill="#23292F"/><path d="M23.07 8h-2.52l-2.67 4.13L15.16 8h-2.53l4.24 6.55L12.18 21h2.52l3.15-4.87 3.15 4.87h2.52l-4.69-7.25L23.07 8zm-6.83 11.17L15.02 18l-1.23 1.17-1.23-1.17 1.23-1.17 1.23 1.17z" fill="white"/></svg>,
      BNB: <svg viewBox="0 0 32 32" className="w-8 h-8"><circle cx="16" cy="16" r="16" fill="#F3BA2F"/><path d="M12.116 14.404L16 10.52l3.886 3.886 2.26-2.26L16 6l-6.144 6.144 2.26 2.26zM6 16l2.26-2.26L10.52 16l-2.26 2.26L6 16zm6.116 1.596L16 21.48l3.886-3.886 2.26 2.259L16 26l-6.144-6.144-.003-.003 2.263-2.257zM21.48 16l2.26-2.26L26 16l-2.26 2.26L21.48 16zm-3.188-.002h.002V16L16 18.294l-2.291-2.29-.004-.004.004-.003.401-.402.195-.195L16 13.706l2.293 2.293z" fill="white"/></svg>,
      SOL: <svg viewBox="0 0 32 32" className="w-8 h-8"><circle cx="16" cy="16" r="16" fill="#DC1FFF"/><path d="M20.2 10.6l1.6-1.6H11.5l-1.6 1.6h10.3zm1.6 3.2l-1.6-1.6H9.9l1.6 1.6h10.3zm0 4.8H11.5l-1.6 1.6h10.3l1.6-1.6z" fill="white"/></svg>
    }
    return logos[symbol] || null
  }

  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-4">{index + 1}</td>
      <td className="px-4 py-4">
        <div className="flex items-center gap-2">
          {getCryptoLogo(asset.symbol)}
          <span className="font-medium">{asset.name}</span>
          <span className="text-gray-500">{asset.symbol}</span>
        </div>
      </td>
      <td className="px-4 py-4 text-right font-medium">${asset.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
      {formatPercentage(asset['1h'])}
      {formatPercentage(asset['24h'])}
      {formatPercentage(asset['7d'])}
      <td className="px-4 py-4 text-right">{asset.marketCap}</td>
      <td className="px-4 py-4 text-right">{asset.volume24h}</td>
      <td className="px-4 py-4 text-right">{asset.circulating}</td>
      <td className="px-4 py-4 text-right">{asset.maxSupply}</td>
      <td className="px-4 py-4">
        <svg viewBox="0 0 100 25" className={`h-8 w-28 ${asset['7d'] >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          <path 
            d="M0 15 Q25 5, 50 20 T100 10" 
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </td>
    </tr>
  )
}