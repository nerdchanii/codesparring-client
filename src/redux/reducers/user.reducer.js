import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import MESSAGE from '../../config/message';
import { actions as authActions } from './auth.reducer';

// ACTION TYPES
// export const FETCH_LOGIN = 'auth/FETCH_LOGIN';
// export const LOGOUT = 'auth/LOGOUT';
export const ACTION = {
  FETCH_SOME_DATA: 'users/FETCH_SOME_DATA',
  REGISTER: 'users/REGISTER',
  DUPLICATE_EMAIL_CHECK: 'users/DUPLICATE_EMAIL_CHECK',
  DUPLICATE_USERNAME_CHECK: 'users/DUPLICATE_USERNAME_CHECK',
  RANK: 'users/RANK',
  REMOVE_USER: 'users/REMOVE_USER',
  GET_USER: 'users/GET_USER',
  initStore: 'users/initStore',


}
// user store init state
const initialState = {
  isduplicateEmail: null,
  isduplicateUsername: null,
  success: false,
  userRanks: [],
  user: {
    username: '',
    email: '',
  }
}

export const getUser = createAsyncThunk(ACTION.FETCH_SOME_DATA, async ({ id }, { extra }) => {
  const { service } = extra;

  const { data } = await service.userService.getUser(id);
  return data.result;
});

export const getRanks = createAsyncThunk(ACTION.RANK, async (args, { extra }) => {

  const { service } = extra;

  const { data } = await service.userService.ranks();
  return data.result;
})

export const removeUser = createAsyncThunk(ACTION.REMOVE_USER, async ({ userId }, { extra, dispatch }) => {
  const { service } = extra;
  const { data } = await service.userService.remove({ userId });
  if (data.result) {
    alert(MESSAGE.REMOVE_USER_SUCCESS);
    dispatch(authActions.initAuth());
  }

  return data.result;
});

export const register = createAsyncThunk(ACTION.REGISTER, async ({ username, email, password }, { extra }) => {
  const { service } = extra;

  const { data } = await service.userService.register({ username, email, password });
  return data.result;
});

export const duplicateEmailCheck = createAsyncThunk(ACTION.DUPLICATE_EMAIL_CHECK, async ({ email }, { extra }) => {
  const { service } = extra;

  const { data } = await service.userService.duplicateEmailCheck({ email });
  return data.result;
});

export const duplicateUsernameCheck = createAsyncThunk(ACTION.DUPLICATE_USERNAME_CHECK, async ({ username }, { extra }) => {
  const { service } = extra;
  const { data } = await service.userService.duplicateUsernameCheck({ username });
  return data.result;
});



const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    initStore: (state, action) => {
      return initialState;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
    }),
      builder.addCase(getRanks.fulfilled, (state, action) => {

        state.userRanks = action.payload.users;
      }),
      builder.addCase(register.fulfilled, (state, action) => {
        alert(MESSAGE.SIGN_UP_SUCCESS);
        state.success = true;
      }),
      builder.addCase(duplicateEmailCheck.fulfilled, (state, action) => {
        state.isduplicateEmail = action.payload;
      })
    builder.addCase(duplicateUsernameCheck.fulfilled, (state, action) => {
      state.isduplicateUsername = action.payload;
    })
  }
});

const { reducer } = userSlice;
export const actions = userSlice.actions;
export default reducer;
