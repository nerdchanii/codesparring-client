import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// ACTION TYPES
export const ACTION = {
  GET_PROBLEM: 'problem/GET_PROBLEM',
  ADD_PROBLEM: 'problem/ADD_PROBLEM',
  UPDATE_PROBLEM: 'problem/UPDATE_PROBLEM',
  SET_PROBLEM: 'problem/SET_PROBLEM',
  INIT_PROBLEM: 'problem/INIT_PROBLEM',
}


/**
   * 
 * @typedef { {id: number,
 * level: number,
 * title: string,
 * type: string,
 * test_output: Any[],
 * test_input: Any[],
 * requirement : string[],
 * description: string,
 * is_stable: number,
 * not_stable: number,
 * vote_count: number}
 * } problem
 * @type { problem }
 */

const initialState =
{
  id: null,
  level: null,
  title: null,
  type: null,
  test_output: null,
  test_input: null,
  requirement: null,
  description: null,
  is_stable: null,
  not_stable: null,
  vote_count: null,
  problemAdded: false,
};


export const getProblem = createAsyncThunk(ACTION.GET_PROBLEM, async ({ id }, { extra }) => {
  const { service } = extra;
  const { data } = await service.problemService.getProblem({ id });
  return data.result;
});

export const addProblem = createAsyncThunk(ACTION.ADD_PROBLEM, async (arg, { extra }) => {
  const { service } = extra;
  const { data } = await service.problemService.addProblem(arg);
  return data.result;
});

export const updateProblem = createAsyncThunk(ACTION.UPDATE_PROBLEM, async (arg, { extra }) => {
  const { service } = extra;
  const { data } = await service.problemService.addProblem(arg);
  return data.result;
});





// problem reducer 
// user가 채점서버의 inputCase, outputCase를 받아도 되는가? 
// 이걸 클라이언트 쪽에서 조작한다? 신뢰 불가 
// 그리고 클라이언트는 그런 거 모르고 해야한다.
// 여기에 graphql를 사용하면 좋지 않을까 싶다. graphql사용하고 api를 분리하면 좋을까?

const problemReducer = createSlice({
  name: 'problem',
  initialState,
  reducers: {

    [ACTION.SET_PROBLEM]: (state, action) => {
      const {
        test_output: testOutput, test_input: testInput, is_stable: isStable, not_stable: notStable, vote_count: voteCount, id, level, title, type, requirement, description
      } = action.payload.problem;
      return state = {
        ...state,
        id, level, title, type,
        requirement, description,
        testOutput, testInput,
        isStable, notStable, voteCount,
        inputCase: null,
        outputCase: null,
      };
    },
    [ACTION.INIT_PROBLEM]: (state, action) => {
      return state = initialState;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getProblem.fulfilled, (state, action) => {
      const {
        test_output: testOutput, test_input: testInput, is_stable: isStable, not_stable: notStable, vote_count: voteCount, id, level, title, type, requirement, description
      } = action.payload.problem;
      return {
        id, level, title, type,
        requirement, description,
        testOutput, testInput,
        isStable, notStable, voteCount,
        inputCase: null,
        outputCase: null,
      };
    }),
      // TODO
      builder.addCase(addProblem.fulfilled, (state, action) => {
        alert('문제 추가 성공');
        return state = {
          ...state,
          problemAdded: true,
        }
      })
  }
});




export const { actions } = problemReducer;
const { reducer } = problemReducer;
export default reducer;
