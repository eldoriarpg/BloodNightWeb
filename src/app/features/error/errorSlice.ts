import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  value: string
}

const initialState: CounterState = {
  value: ''
}

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<string>) => {
      state.value = 'An unexpected error occured in ' + action.payload
    },
    reset: (state) => {
      state.value = ''
    }
  }
})

export const { set, reset } = errorSlice.actions

export default errorSlice.reducer
