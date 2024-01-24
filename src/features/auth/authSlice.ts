// features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit'

const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null

type AuthType = {
  loading: boolean,
  userInfo: null | {
    name?: string,
    email?: string,
  },
  userToken: null | string,
  error: any,
  success: boolean
}
const initialState: AuthType = {
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.userInfo = payload
    },
    logout: (state) => {
      localStorage.removeItem('userToken') // deletes token from storage
      state.loading = false
      state.userInfo = null
      state.userToken = null
      state.error = null
    },
  },
})
export const { logout, setCredentials } = authSlice.actions

export default authSlice.reducer