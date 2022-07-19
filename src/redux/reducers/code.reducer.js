import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import MESSAGE from '../../config/message';


export const ACTION = {
  TEST: 'code/TEST',
  SUBMIT: 'code/SUBMIT',
  ON: {
    TEST: 'code/ON/TEST',
    SUBMIT: 'code/ON/SUBMIT',
  },
  LOADDING: 'code/LOADING',
}

const serverError = [{
  correct: false,
  error: 'Server error',
  stderr: '',
  stdout: '',
}]

const defaultoutput = [{
  corret: false,
  error: '',
  stderr: '',
  stdout: '',
}]


const initialState = {
  result: [],
  loading: false,
};


export const test = createAsyncThunk(ACTION.TEST, async ({ code }, { getState, extra, dispatch }) => {
  if (code.trim() === '') {
    alert(MESSAGE.PROBLEM.WRITE_CODE);
    return Promise.reject();
  }
  // dispatch code/LOADING true
  const { service } = extra;
  const { language: lang } = getState().ideOption;
  const { testInput: inputs, testOutput: outputs } = getState().problem;
  const response = await Promise.allSettled(inputs.map((input, idx) => service.codeService.test({ lang, input, code, output: outputs[idx] })));
  const result =
    response.map(({ status, value }) => {
      if (status === 'fulfilled') {
        return value?.data?.result || defaultoutput;
      } else {
        return serverError;
      }
    })
  return result;
});

export const submit = createAsyncThunk(ACTION.SUBMIT, async ({ code }, { getState, extra, dispatch }) => {
  if (code.trim() === '') {
    alert(MESSAGE.PROBLEM.WRITE_CODE);
    return Promise.reject();
  }
  const { service } = extra;
  const { language: lang } = getState().ideOption;
  const { id: problemId } = getState().problem;
  const { data } = await service.codeService.submit({ lang, code, problemId });
  return data.result;
});


const codeSlice = createSlice({
  name: 'code',
  initialState,
  reducers: {
    // loading state
    [ACTION.LOADDING]: (state, action) => {
      console.log('action', action);
      console.log('payload', action.payload);
      return {
        ...state,
        loading: action.payload.loading,
      }
    },
    [ACTION.ON.TEST]: (state, action) => {
      console.log(state, action)
      return { result: action.payload.results, loading: false }

    },
    [ACTION.ON.SUBMIT]: (state, action) => {
      return {
        // ...state,
        result: action.payload.results,
        loading: false
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(test.fulfilled, (state, action) => {
      const result = action.payload;
      const isFail = result.some((eachResult) => !eachResult.correct);
      isFail ? alert(MESSAGE.PROBLEM.FAIL) : alert(MESSAGE.PROBLEM.SUCCESS);
      return {
        ...state,
        result,
        loading: false
      };
    }),
      builder.addCase(submit.fulfilled, (state, action) => {
        const result = action.payload;
        const isFail = result.some((eachResult) => !eachResult.correct);
        isFail ? alert(MESSAGE.PROBLEM.FAIL) : alert(MESSAGE.PROBLEM.SUCCESS);
        return {
          ...state,
          result: action.payload,
          loading: false
        }
      }),
      builder.addCase(test.pending, (state, action) => {
        return {
          ...state,
          loading: true
        }
      }),
      builder.addCase(submit.pending, (state, action) => {
        return {
          ...state,
          loading: true
        }
      });
  }
});

const { reducer } = codeSlice;
export const { actions } = codeSlice;
export default reducer;
