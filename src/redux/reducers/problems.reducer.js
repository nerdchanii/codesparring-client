import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit"

/**
 * @typedef {{
 * id: null,
 * level: null,
 * title: null,
 * type: null,
 * test_output: null,
 * test_input: null,
 * requirement: null,
 * description: null,
 * is_stable: null,
 * not_stable: null,
 * vote_count: null}} problem
 * 
 */

/**
 * @type {problem[]}
 */
const ACTION = {
  GET_PROBLEMS: "problem/GET_PROBLEMS",
}
const initialState = { problems: [] }

export const getProblems = createAsyncThunk(ACTION.GET_PROBLEMS, async (arg, { extra }) => {
  const { service } = extra;
  const { data } = await service.problemService.getProblems();
  return data.result;
});


const problemsReducer = createSlice({
  name: 'problems',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProblems.fulfilled, (state, action) => {
      if (state !== action) {
        state.problems = action.payload.problems;
      }
      return state;

    })
  }
})

const { reducer } = problemsReducer;
export default reducer;
