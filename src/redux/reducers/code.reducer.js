import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const ACTION = {
  TEST: 'code/TEST',
  SUBMIT: 'code/SUBMIT',
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
    alert('코드를 입력해주세요.');
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
    alert('코드를 입력해주세요.');
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
  extraReducers: (builder) => {
    builder.addCase(test.fulfilled, (state, action) => {
      const result = action.payload;
      const isFail = result.some((eachResult) => !eachResult.correct);
      isFail ? alert('틀렸습니다') : alert('정답입니다');
      return {
        ...state,
        result
      };
    }),
      builder.addCase(submit.fulfilled, (state, action) => {
        const result = action.payload;
        const isFail = result.some((eachResult) => !eachResult.correct);
        isFail ? alert('틀렸습니다') : alert('정답입니다');
        return {
          ...state,
          result: action.payload
        }
      });

  },
});

const { reducer } = codeSlice;

export default reducer;
