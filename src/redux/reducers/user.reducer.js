import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import MESSAGE from '../../config/message';

// ACTION TYPES
// export const FETCH_LOGIN = 'auth/FETCH_LOGIN';
// export const LOGOUT = 'auth/LOGOUT';
const ACTION = {
  FETCH_SOME_DATA: 'users/FETCH_SOME_DATA',
  REGISTER: 'users/REGISTER',
  DUPLICATE_EMAIL_CHECK: 'users/DUPLICATE_EMAIL_CHECK',
  DUPLICATE_USERNAME_CHECK: 'users/DUPLICATE_USERNAME_CHECK',
  RANK: 'users/RANK',
  REMOVE_USER: 'users/REMOVE_USER',
  GET_USER: 'users/GET_USER',


}
// user store init state
const initialState = {
  isduplicateEmail: null,
  userRanks: [],
  user: {
    username: '',
    email: '',
  }
}

// ACTION CREATORS for FETCH_LOGIN
// thunk action creator will pass to createSlice's extraReducers
// export const fetchSomething = createAsyncThunk(ACTION.FETCH_SOME_DATA, async (arg, { extra }) => {
//   const { service } = extra;
//   console.log('fetchsomething', service);
//   return data;
// });

export const getUser = createAsyncThunk(ACTION.FETCH_SOME_DATA, async ({ id }, { extra }) => {
  const { service } = extra;
  console.log('getUser', service);
  const { data } = await service.userService.getUser(id);
  return data.result;
});

export const getRanks = createAsyncThunk(ACTION.RANK, async (args, { extra }) => {
  console.log(args);
  const { service } = extra;
  console.log('getRanks', service);
  const { data } = await service.userService.ranks();
  return data.result;
})

export const removeUser = createAsyncThunk(ACTION.REMOVE_USER, async ({ userId }, { extra }) => {
  const { service } = extra;
  console.log('removeUser', service);
  const { data } = await service.userService.removeUser({ userId });
  return data.result;
});

export const register = createAsyncThunk(ACTION.REGISTER, async ({ username, email, password }, { extra }) => {
  const { service } = extra;
  console.log('register', service);
  const { data } = await service.userService.register({ username, email, password });
  return data.result;
});

export const duplicateEmailCheck = createAsyncThunk(ACTION.DUPLICATE_EMAIL_CHECK, async ({ email }, { extra }) => {
  const { service } = extra;
  console.log('duplicateEmailCheck', service);
  const { data } = await service.userService.duplicateEmailCheck({ email });
  return data.result;
});


const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
    }),
      builder.addCase(getRanks.fulfilled, (state, action) => {
        console.log(action.payload);
        state.userRanks = action.payload.users;
      }),
      builder.addCase(register.fulfilled, (state, action) => {
        alert(MESSAGE.SIGN_UP_SUCCESS);
      })
    builder.addCase(duplicateEmailCheck.fulfilled, (state, action) => {
      state.isduplicateEmail = action.payload;

    })
  }
});

const { actions, reducer } = userSlice;
export default reducer;
