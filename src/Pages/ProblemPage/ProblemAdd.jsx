import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProblem } from '../../redux/reducers/problem.reducer';

function ProblemAdd({ back }) {
  const { problemAdded } = useSelector((state) => state.problem);
  const dispatch = useDispatch();
  const [verifycase, setVerifycase] = React.useState([{ input: '', output: '' }]);
  const submitAdd = async (event) => {
    event.preventDefault();

    const { target } = event;
    const data = {
      title: target.title.value,
      level: target.level.value,
      problemType: target.problemType.value,

      description: target.problemDescription.value,
      requirement: target.requirement.value.split('\n'),
      testcase: [
        {
          input: target['testCase1-input'].value,
          output: target['testCase1-output'].value,
        },
        {
          input: target['testCase2-input'].value,
          output: target['testCase2-output'].value,
        },
        {
          input: target['testCase3-input'].value,
          output: target['testCase3-output'].value,
        },
      ],
      verifycase,
    };
    const stringData = JSON.stringify(data);
    dispatch(addProblem(stringData));
  };

  useEffect(() => {
    if (problemAdded) {
      back();
    }
  }, [problemAdded]);
  // form to sumbit Problem Add data to server and redirect to problem page
  return (
    <div className="ProblemAdd">
      <div className="ProblemAdd-title">문제 추가</div>
      <div className="ProblemAdd-form">
        <form onSubmit={submitAdd}>
          <div className="ProblemAdd-metaData">
            <div className="metaData-left">
              <label htmlFor="title">
                <div>문제 제목</div>
                <input type="text" name="title" id="title" required />
              </label>
            </div>
            <div className="metaData-right">
              <label htmlFor="level">
                <div>난이도</div>
                <select name="level" id="level" required>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </label>
              <label htmlFor="problemType">
                <div>문제 유형</div>
                <input type="text" name="problemType" id="problemType" required />
              </label>
            </div>
          </div>
          <label htmlFor="problemDescription">
            <div>문제 설명</div>
            <textarea name="problemDescription" id="problemDescription" rows="5" required />
          </label>
          <label htmlFor="requirement">
            <div>조건</div>
            <textarea name="requirement" id="requirement" rows="5" required />
          </label>

          <div className="ProblemAdd-testCase">
            {[1, 2, 3].map((number) => (
              <div className="testCaseContainer">
                <div className="testCase-title">
                  테스트 케이스
                  {number}
                </div>
                <div className="testCase">
                  <label htmlFor={`testCase${number}-input`}>
                    <div>입력</div>
                    <textarea
                      name={`testCase${number}-input`}
                      id={`testCase${number}-input`}
                      rows="3"
                      required
                    />
                  </label>
                  <label htmlFor={`testCase${number}-output`}>
                    <div>출력</div>
                    <textarea
                      name={`testCase${number}-output`}
                      id={`testCase${number}-output`}
                      rows="3"
                      required
                    />
                  </label>
                </div>
              </div>
            ))}
            {verifycase.map((cases, idx) => {
              return (
                <div className="testCaseContainer">
                  <label htmlFor={`cases${idx}--input`}>
                    <div>입력</div>
                    <textarea
                      name={`cases${idx}-input`}
                      id={`cases${idx}-input`}
                      rows="3"
                      onChange={(e) => {
                        const { value } = e.target;
                        setVerifycase((prev) => {
                          const newVerifycase = [...prev];
                          newVerifycase[idx] = { ...newVerifycase[idx], input: value };
                          return newVerifycase;
                        });
                      }}
                      required
                    />
                  </label>
                  <label htmlFor={`cases${idx}-output`}>
                    <div>출력</div>
                    <textarea
                      onChange={(e) => {
                        const { value } = e.target;
                        setVerifycase((prev) => {
                          const newVerifycase = [...prev];
                          newVerifycase[idx] = { ...newVerifycase[idx], output: value };
                          return newVerifycase;
                        });
                      }}
                      name={`cases${idx}-output`}
                      id={`cases${idx}-output`}
                      rows="3"
                      required
                    />
                  </label>
                </div>
              );
            })}
          </div>
          <div className="verifycase--button--container">
            <button
              className="addCaseButton"
              type="button"
              onClick={() => setVerifycase([...verifycase, { input: '', output: '' }])}
            >
              +
            </button>
          </div>
          <div className="submitButtonContainer">
            <button className="submitButton" type="submit">
              문제 추가
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ProblemAdd;
