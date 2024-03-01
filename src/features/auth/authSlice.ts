// features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit'
type AuthType = {
  loading: boolean,
  error: any,
  success: boolean,
  userInfo: null | {
    name?: string,
    email?: string,
  },
  userToken: null | string,
}

const initialState: AuthType = {
  loading: false,
  userInfo: JSON.parse(localStorage.getItem('userInfo') || 'null'),
  userToken: localStorage.getItem('userToken') || null,
  error: null,
  success: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload))
    },
    logout: (state) => {
      state.userInfo = null;
      localStorage.removeItem('userInfo')
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