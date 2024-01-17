import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
// import rootReducer from './rootReducer'

export const store = configureStore({
  // reducer: rootReducer,
  reducer : {

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([]),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
