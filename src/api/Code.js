class Code {
  constructor({ axios }) {
    this._axios = axios;
  }

  test({ input, lang, code, output }) {
    return this._axios.post(`/codes/test`, { input, lang, code, output });
  }

  submit({ problemId, lang, code }) {
    return this._axios.post('/codes/submit', { problemId, lang, code });
  }


}
export default Code;
