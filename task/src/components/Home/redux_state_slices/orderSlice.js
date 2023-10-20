import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  order: {}
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    storeOrderDetails: (state, {payload}) => {
      state.order = payload 
    },
    updateProductDetails: (state, {payload}) => {
      state.order.products.forEach((ele) => {
        if(ele.id === payload.id){
         ele[payload.key] = payload.value;
        }
      })
    },
    approveOrder: (state, {payload}) => {
      state.order.status = payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { storeOrderDetails, updateProductDetails, approveOrder } = orderSlice.actions

export default orderSlice.reducer