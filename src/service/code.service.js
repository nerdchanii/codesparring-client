class CodeService {
  constructor({ apis }) {
    this._apis = apis;
  }

  test(data) {
    return this._apis.code.test(data);
  }

  submit(data) {
    return this._apis.code.submit(data);
  }
  

}

export default CodeService;
