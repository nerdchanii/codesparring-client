class Code {
  constructor({ axios }) {
    this._axios = axios;
  }

  test(data) {
    return this._axios.post(`/codes/test`, data);
  }
  
  submit(data) {
    return this._axios.post('/codes/submit', data);
  }
  
  
}
export default Code;
