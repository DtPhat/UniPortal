import { configureStore } from '@reduxjs/toolkit'
import authReducer from '@/features/auth/authSlice'
import wishlistReducer from '@/features/wishlist/wishlistSlice'
import { api } from './services/api'
import { rtkQueryErrorLogger } from './middlewares'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
    wishlist: wishlistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
    // .concat(rtkQueryErrorLogger),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
