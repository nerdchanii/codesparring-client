import { createAsyncThunk, createAction, createSlice } from '@reduxjs/toolkit';

// ACTION TYPES
export const FETCH_LOGIN = 'auth/FETCH_LOGIN';
export const LOGOUT = 'auth/LOGOUT';

// Auth Store initial state
const initialState = {
  isLoggedIn: false,
  userId: 1,
  profile: {
    name: 'kim',
  },
  token: 'jsonWebToken',
};

// ACTION CREATORS for FETCH_LOGIN
// thunk action creator will pass to createSlice's extraReducers
export const fetchLogin = createAsyncThunk(FETCH_LOGIN, async ({ email, password }, { extra }) => {
  const { service } = extra;
  // const { data } = await service.authService.login({ email, password });
  // 임시로 fulfilled 상태로 만듬
  const { data } = await Promise.resolve({
    data: { userId: 234234, profile: { name: 'chanii' }, token: 'token' },
  });
  return data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.isLoggedIn = false;
      state.userId = null;
      state.profile = {};
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.userId = action.payload.userId;
      state.profile = action.payload.profile;
      state.token = action.payload.token;
    });
  },
});

const { actions, reducer } = authSlice;
export const { logout } = actions;
export default reducer;
