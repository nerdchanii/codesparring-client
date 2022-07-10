import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import MESSAGE from '../../config/message';


export const ACTION = {
  TEST: 'code/TEST',
  SUBMIT: 'code/SUBMIT',
  ON: {
    TEST: 'code/ON/TEST',
    SUBMIT: 'code/ON/SUBMIT',
  }
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
  result: []
};



export const test = createAsyncThunk(ACTION.TEST, async ({ code }, { getState, extra }) => {
  if (code.trim() === '') {
    alert(MESSAGE.PROBLEM.WRITE_CODE);
    return Promise.reject();
  }
  const { service } = extra;
  const { language: lang } = getState().ideOption;
  const { testInput: inputs, testOutput: outputs } = getState().problem;
  // const response = await service.test({ code, lang, inputs, outputs });
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

export const submit = createAsyncThunk(ACTION.SUBMIT, async ({ code }, { getState, extra }) => {
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
    [ACTION.ON.TEST]: (state, action) => {
      console.log(state, action)
      return { result: action.payload.results }

    },
    [ACTION.ON.SUBMIT]: (state, action) => {
      return {
        // ...state,
        result: action.payload.results,
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
        result
      };
    }),
      builder.addCase(submit.fulfilled, (state, action) => {
        const result = action.payload;
        const isFail = result.some((eachResult) => !eachResult.correct);
        isFail ? alert(MESSAGE.PROBLEM.FAIL) : alert(MESSAGE.PROBLEM.SUCCESS);
        return {
          ...state,
          result: action.payload
        }
      });

  },
});

const { reducer } = codeSlice;
export const { actions } = codeSlice;
export default reducer;
