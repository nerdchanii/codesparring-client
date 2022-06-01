class CodeService {
  constructor({ apis }) {
    this._apis = apis;
  }

  test({ input, lang, code, output }) {
    return this._apis.code.test({ input, lang, code, output });
  }

  submit({ problemId, lang, code }) {
    return this._apis.code.submit({ problemId, lang, code });
  }


}

export default CodeService;
