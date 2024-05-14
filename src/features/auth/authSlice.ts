import { RootState } from '@/app/store';
import { createSlice } from '@reduxjs/toolkit'
type AuthType = {
  userInfo: {
    id: number,
    email: string,
    firstName: string,
    lastName: string,
    role?: 'ADMIN' | 'STAFF' | 'STUDENT',
    status?: 'ACTIVE' | 'INACTIVE' | 'UNVALIDATED',
    avatarLink: null | string
  } | null,
  userToken: string | null,
}

const userInfoString = localStorage.getItem('userInfo');
const userToken = localStorage.getItem('userToken');

const initialState: AuthType = {
  userInfo: userInfoString ? JSON.parse(userInfoString) : null,
  userToken: userToken || null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      state.userToken = action.payload?.userToken
      localStorage.setItem('userInfo', JSON.stringify(action.payload))
      localStorage.setItem('userToken', action.payload?.userToken)
    },
    logout: (state) => {
      localStorage.removeItem('userInfo')
      localStorage.removeItem('userToken') // deletes token from storage
      state.userInfo = null
      state.userToken = null
    },
  },
})



export const { logout, setCredentials } = authSlice.actions
export const selectUserInfo = (state: RootState) => state.auth.userInfo
export const selectUserToken = (state: RootState) => state.auth.userToken

export default authSlice.reducer