import { createAsyncThunk, createAction, createSlice } from '@reduxjs/toolkit';

// ACTION TYPES
export const FETCH_LOGIN = 'auth/FETCH_LOGIN';
export const LOGOUT = 'auth/LOGOUT';

// Auth Store initial state
const defaultAuth = JSON.parse(localStorage.getItem('auth'));
const initialState = defaultAuth
  ? { isLoggedIn: true, ...defaultAuth }
  : {
      isLoggedIn: false,
      userId: null,
      profile: {
        name: null,
      },
      token: null,
    };

// ACTION CREATORS for FETCH_LOGIN
// thunk action creator will pass to createSlice's extraReducers
export const fetchLogin = createAsyncThunk(FETCH_LOGIN, async ({ email, password }, { extra }) => {
  const { service } = extra;
  // const { data } = await service.authService.login({ email, password });
  // 임시로 fulfilled 상태로 만듬
  const { data } = await Promise.resolve({
    data: { userId: 234234, profile: { name: 'chanii' }, token: 'jsonWebToken' },
  });
  data && service.apis.setAccessToken(data.token); 
  console.log(service);
  return data;
});

export const logout = createAsyncThunk(LOGOUT, async (args, { extra }) => {
  const { service } = extra;
  service.apis.setAccessToken(null);
  localStorage.removeItem('auth');
  return true;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      window.localStorage.setItem('auth', JSON.stringify(action.payload));
      state.isLoggedIn = true;
      state.userId = action.payload.userId;
      state.profile = action.payload.profile;
      state.token = action.payload.token;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.isLoggedIn = false;
      state.userId = null;
      state.profile = {};
      state.token = null;
    });
  },
});

const { actions, reducer } = authSlice;

export default reducer;
