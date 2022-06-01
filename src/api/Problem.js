class Problem {
  constructor({ axios }) {
    this._axios = axios;
  }

  getProblems() {
    return this._axios.get('problems');
  }

  addProblem(data) {
    return this._axios.post('problems', data);
  }

  getProblem({ id }) {
    return this._axios.get(`problems/${id}`);
  }

  updateProblem({ id, data }) {
    return this._axios.put(`problems/${id}`, data);
  }

}

export default Problem;
