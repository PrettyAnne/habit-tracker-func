import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: [{ id: 1 , name: 'Reading', count: 0 }],
  reducers: {
    add: (state, action) => state.concat(action.payload),
    remove: (state, action) => state.filter(state => state.id != action.payload),
  },
})

export const { add, remove } = counterSlice.actions

export default counterSlice.reducer