import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateAsset } from '../features/assets/assetsSlice'

export default function PriceUpdater() {
  const dispatch = useDispatch()
  const assets = useSelector(state => state.assets)

  const formatLargeNumber = (value) => {
    if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`
    if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`
    if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`
    return `$${value.toFixed(2)}`
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const randomChange = () => (Math.random() - 0.5) * 1.5
      const asset = assets[Math.floor(Math.random() * assets.length)]
      
      const priceChange = randomChange()/100
      const newPrice = asset.price * (1 + priceChange)
      const volumeChange = Math.abs(randomChange() * 5)
      const marketCapValue = parseFloat(asset.marketCap.replace(/[^0-9.]/g, '')) * (1e9)
      const volumeValue = parseFloat(asset.volume24h.replace(/[^0-9.]/g, '')) * (1e9)

      dispatch(updateAsset({
        symbol: asset.symbol,
        changes: {
          price: newPrice,
          '1h': asset['1h'] + randomChange()/3,
          '24h': asset['24h'] + randomChange()/2,
          '7d': asset['7d'] + randomChange()/5,
          volume24h: formatLargeNumber(volumeValue * (1 + volumeChange/100)),
          marketCap: formatLargeNumber(marketCapValue * (1 + priceChange))
        }
      }))
    }, 1000)

    return () => clearInterval(interval)
  }, [dispatch, assets])

  return null
}