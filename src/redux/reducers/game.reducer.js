import { createAsyncThunk, createAction, createSlice } from '@reduxjs/toolkit';
import { emitJoin, emitLeave } from './socket.reducer';

const DEFAULT_ROOM = 'Hello World';
/**
 * @typedef {{id: string,
 * users: string[],
 * title: string,
 * roomNumber: number}} room
 *   
 */
const ACTION = {
  ROOMS: 'game/ROOMS',
  JOIN: 'game/JOIN',
  CREATE: 'game/CREATE',
  LEAVE: 'game/LEAVE',
}

// initial state
const initialState =
{
  /**
   * @type {room[]}
   */
  rooms: [],
  /**
   * @type {room}
   */
  room: {
    id: null,
    roomNumber: null,
    title: DEFAULT_ROOM,
    users: [],

  }

};


// Thunk action creator
export const getRooms = createAsyncThunk(ACTION.ROOMS, async (arg, { extra }) => {
  const { service } = extra;
  const { data } = await service.gameService.getRooms();
  return data.result;
});

export const joinRoom = createAsyncThunk(ACTION.JOIN, async ({ id, username }, { extra, dispatch }) => {
  const { service } = extra;
  console.log(id, username);
  const { data } = await service.gameService.joinRoom({ id, username });
  dispatch(emitJoin({ room: data.result.title, username }));
  // service.socketService.emitJoin({ username, room: data.result.title })
  // service.socketService.emitJoin({ username, room: id });
  console.log(data.result);
  return data.result;
});

export const createRoom = createAsyncThunk(ACTION.CREATE, async ({ title }, { getState, extra }) => {
  const { username } = getState().auth.profile;
  const { service } = extra;
  const { data } = await service.gameService.createRoom({ title, username });

  return data.result;
});

export const leaveRoom = createAsyncThunk(ACTION.LEAVE, async ({ username }, options) => {
  const { extra, getState, dispatch } = options;
  const { service } = extra;
  const { id, title } = getState().game.room;
  const { data } = await service.gameService.leaveRoom({ id, username });
  dispatch(emitLeave({ room: title, username }));
  return data.result;
});



const gameSlice = createSlice({
  name: 'game',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getRooms.fulfilled, (state, action) => {
      state.rooms = action.payload.rooms;

    }),
      builder.addCase(joinRoom.fulfilled, (state, action) => {

        state.room = action.payload;

      }),
      builder.addCase(createRoom.fulfilled, (state, action) => {
        state.room = action.payload;
      }),
      builder.addCase(leaveRoom.fulfilled, (state, action) => {
        if (action.payload) {
          state.room = {
            id: null,
            roomNumber: null,
            title: DEFAULT_ROOM,
            users: [],

          }
        }
      })
  }
});


const { actions, reducer } = gameSlice;
export const { init } = actions;
export default reducer;
