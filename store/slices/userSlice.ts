import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInfo } from '../../types/store';
import { RootState } from '..';

const initialState: UserInfo = {
  id: '',
  name: '',
  email: '',
  phone: '',
  avatarId: 1,
  alias: 'Coffee Enthusiast',
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action: PayloadAction<Partial<UserInfo>>) {
      Object.assign(state, action.payload, { isLoggedIn: true });
    },
    logout(state) {
      Object.assign(state, initialState);
    },
    updateUserInfo(state, action: PayloadAction<Partial<UserInfo>>) {
      Object.assign(state, action.payload);
    },
  },
});

export const { login, logout, updateUserInfo } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;

// Add this at the bottom
