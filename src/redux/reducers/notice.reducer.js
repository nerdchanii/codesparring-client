import { createAsyncThunk, createAction, createSlice } from '@reduxjs/toolkit';

// ACTION TYPES
// export const FETCH_LOGIN = 'auth/FETCH_LOGIN';
// export const LOGOUT = 'auth/LOGOUT';
const FETCH_SOME_DATA = 'user/FETCH_SOME_DATA';
// Auth Store initial state
// notice slice intit state
const initialState = {
  notices: [],
  notice: {
    id: null,
    label: [],
    title: '',
    body: '',
    writer: '',
  }
}

// ACTION CREATORS for FETCH_LOGIN
// thunk action creator will pass to createSlice's extraReducers
export const getNotices = createAsyncThunk('notice/GET_NOTICES', async (arg, { extra }) => {
  const { service } = extra;
  const { data } = await service.noticeService.getNotices();
  // 임시로 fulfilled 상태로 만듬
  // const { data } = await Promise.resolve({
  //   data: { problem :{ id: 1, title: '제목', content: '내용', input: '', output: '' } },
  // });

  return data.result;
});

// not user getNotice in V1 API
// export const getNotice = createAsyncThunk('notice/GET_NOTICE', async ({ extra }, { id }) => {
//   const { service } = extra;
//    
//   const { data } = await service.noticeService.getNotice(id);
//   return data;
// });

const noticeSlice = createSlice({
  name: 'notice',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getNotices.fulfilled, (state, action) => {
      state.notices = action.payload.notices;
    });
    // builder.addCase(getNotice.fulfilled, (state, action) => {
    //    
    //   state.notice = action.payload.notice;
    // });
  },

});

const { reducer } = noticeSlice;
export default reducer;
