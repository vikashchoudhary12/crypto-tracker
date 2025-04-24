import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllAssets } from '../features/assets/assetsSelectors'
import AssetRow from './AssetRow'

export default function AssetsTable() {
  const assets = useSelector(selectAllAssets)

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead className="border-b">
          <tr className="text-gray-600">
            <th className="py-3 px-4 text-left">#</th>
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-right">Price</th>
            <th className="py-3 px-4 text-right">1h %</th>
            <th className="py-3 px-4 text-right">24h %</th>
            <th className="py-3 px-4 text-right">7d %</th>
            <th className="py-3 px-4 text-right">Market Cap</th>
            <th className="py-3 px-4 text-right">Volume(24h)</th>
            <th className="py-3 px-4 text-right">Circulating</th>
            <th className="py-3 px-4 text-right">Max Supply</th>
            <th className="py-3 px-4 text-left">7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => (
            <AssetRow key={asset.symbol} asset={asset} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  )
}