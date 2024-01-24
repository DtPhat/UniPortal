import { configureStore } from '@reduxjs/toolkit'
// import rootReducer from './rootReducer'
import authReducer from '@/features/auth/authSlice'
import { authApi } from '../services/authService'
export const store = configureStore({
  reducer : {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(authApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
