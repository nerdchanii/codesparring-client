import { createAsyncThunk, createAction, createSlice } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

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

export const login = createAsyncThunk(FETCH_LOGIN, async ({ email, password }, { extra }) => {
  const { service } = extra;
  const { data } = await service.authService.login({ email, password });

  const { auth } = data.result;
  console.log(auth);
  auth && service.apis.setAccessToken(auth?.token);
  auth && service.socketService.setAuth({ auth });
  console.log(service);
  return auth;
});


// It is not Async Thunk but 
export const logout = createAsyncThunk(LOGOUT, (args, { extra }) => {
  const { service } = extra;
  console.log('logout, result',);
  const result = service.authService.logout();
  return result;
});


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    'initAuth': (state, action) => {
      localStorage.removeItem('auth');
      state.isLoggedIn = false;
      state.userId = null;
      state.profile = {};
      state.token = null;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      window.localStorage.setItem('auth', JSON.stringify(action.payload));
      state.isLoggedIn = true;
      state.userId = action.payload.userId;
      state.profile = action.payload.profile;
      state.token = action.payload.token;
      return state;
    })
    builder.addCase(logout.fulfilled, (state) => {
      state.isLoggedIn = false;
      state.userId = null;
      state.profile = {};
      state.token = null;
      return state;
    })
  },

});

export const { actions } = authSlice;
const { reducer } = authSlice;
export default reducer;
