import { createAsyncThunk, createAction, createSlice } from '@reduxjs/toolkit';

// ACTION TYPES
// export const FETCH_LOGIN = 'auth/FETCH_LOGIN';
// export const LOGOUT = 'auth/LOGOUT';
const FETCH_SOME_DATA = 'user/FETCH_SOME_DATA';
// Auth Store initial state
const initialState = 
   {
      problem: {
        id : 0,
        title : '',
        content : '',
        input: '',
        output: '',
      }
   };

// ACTION CREATORS for FETCH_LOGIN
// thunk action creator will pass to createSlice's extraReducers
export const fetchSomething = createAsyncThunk(FETCH_SOME_DATA, async (arg, { extra }) => {
  const { service } = extra;
  console.log('fetchsomething', service);
  // const { data } = await service.userService.fetch(arg);
  // 임시로 fulfilled 상태로 만듬
  // const { data } = await Promise.resolve({
  //   data: { problem :{ id: 1, title: '제목', content: '내용', input: '', output: '' } },
  // });
  
  return data;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    init(state) {
      state.problem = {
        id: null,
        title: '',
        content: '',
        input: '',
        output: '',
      }      
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSomething.fulfilled, (state, action) => {
      console.log('fetched data', action.payload);
      console.log('action.payload', action.payload);
      state.problem = action.payload.problem;
    });
  },
});

const { actions, reducer } = userSlice;
export const { init } = actions;
export default reducer;
