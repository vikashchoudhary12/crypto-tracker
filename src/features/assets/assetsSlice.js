import { createSlice } from '@reduxjs/toolkit'
import sampleAssets from '../../data/sampleAssets'

const assetsSlice = createSlice({
  name: 'assets',
  initialState: sampleAssets,  // Array of 5 objects
  reducers: {
    updateAsset(state, action) {
      const { symbol, changes } = action.payload
      const asset = state.find(a => a.symbol === symbol)
      if (asset) Object.assign(asset, changes)
    }
  }
})

export const { updateAsset } = assetsSlice.actions
export default assetsSlice.reducer