import { RootState } from '@/app/store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
type WishListType = {
  wishlist: number[]
}

//Get the user infomation
const userInfoString = localStorage.getItem('userInfo');
const userInfo = userInfoString ? JSON.parse(userInfoString) : null

//Get the user wishlist
const userWishListKey = 'wishlist_' + userInfo?.id
const wishListString = localStorage.getItem(userWishListKey)

const initialState: WishListType = {
  wishlist: wishListString ? JSON.parse(wishListString) : []
}

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishList: (state, action: PayloadAction<number>) => {
      if (!userInfo) return;
      state.wishlist = state.wishlist.includes(action.payload)
        ? state.wishlist.filter(id => id !== action.payload)
        : [...state.wishlist, action.payload]
      localStorage.setItem(userWishListKey, JSON.stringify(state.wishlist))
    },
  },
})



export const { addToWishList } = wishlistSlice.actions
export const selectWishlist = (state: RootState) => state.wishlist.wishlist
export const selectWishlistItem = (state: RootState, id: number) => state.wishlist.wishlist.find(item => item === id)

export default wishlistSlice.reducer