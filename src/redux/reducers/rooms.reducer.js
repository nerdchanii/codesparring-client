import { createAsyncThunk, createAction, createSlice } from '@reduxjs/toolkit';
import { emitJoin, emitLeave } from './room.reducer';

const DEFAULT_ROOM = 'Hello World';
/**
 * @typedef {{id: string,
 * users: string[],
 * title: string,
 * roomNumber: number}} room
 *   
 */
export const ACTION = {
  GET_ROOMS: 'game/ROOMS',
  EMIT_GET_ROOMS: 'game/EMIT/ROOMS',
  // JOIN: 'game/JOIN',
  // CREATE: 'game/CREATE',

}

// initial state 
/**
* @type {room[]}
*/
const initialState = [];

// Thunk action creator
export const getRooms = createAsyncThunk(ACTION.EMIT_GET_ROOMS, async (arg, { extra }) => {
  const { service } = extra;
  await service.socketService.emitGetRooms();
});



const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    [ACTION.GET_ROOMS]: (state, action) => {
      const { rooms } = action.payload;
      return rooms;

    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRooms.fulfilled, (state, action) => {
      // no work here
    })
  }
});


export const { actions } = roomsSlice;
const { reducer } = roomsSlice;
export default reducer;
