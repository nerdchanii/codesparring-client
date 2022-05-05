class ProblemService {
  constructor({ apis }) {
    this._apis = apis;
  }

  getProblems() {
    return this._apis.problem.getProblems();
  }

  getProblem(id) {
    return this._apis.problem.getProblem(id);
  }

  addProblem(data) {
    return this._apis.problem.addProblem(data);
  }

  updateProblem({ id, data }) {
    return this._apis.problem.updateProblem({ id, data });
  }

}

export default ProblemService;
