import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: []
}

export const stockSlice = createSlice({
  name:'stock',
  initialState,
  reducers:{
      addItem: (state, action) => {
        state.value = action.payload
      }, 
  }
})

export const { addItem } = stockSlice.actions;

export default stockSlice.reducer
