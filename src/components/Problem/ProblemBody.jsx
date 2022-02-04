import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import testCaseState from '../../state/problem/testCaseState';
import './Problem.scss';

function TestCase(props) {
  const { input, output } = props;

  return (
    <tr>
      <td>{input}</td>
      <td>{output}</td>
    </tr>
  );
}

function ProblemBody(props) {
  const { data } = props;
  const { problemDescription, requirement, testcase } = data;
  const setTestCaseState = useSetRecoilState(testCaseState);

  useEffect(() => {
    setTestCaseState(testcase);
    return () => {
      setTestCaseState(null);
    };
  }, []);

  if (!data) {
    <div>Error!</div>;
  }
  return (
    <div className="ProblemBody">
      <div className="Problem-section">
        <p className="Problem-section-title">문제설명</p>
        <p className="Problem-section-body">{problemDescription}</p>
      </div>
      <div className="Problem-section">
        <p className="Problem-section-title">제안사항</p>
        <p className="Problem-section-body">{requirement}</p>
      </div>
      <div className="Problem-section">
        <div className="Problem-section">
          <p className="Problem-section-title">테스트 케이스</p>
          <table className="Problem-section-table">
            <thead className="Problem-section-table-head">
              <tr>
                <th>인풋</th>
                <th>아웃풋</th>
              </tr>
            </thead>
            <tbody className="Problem-section-table-body">
              {testcase.map((eachCase, idx) => (
                <TestCase key={idx} input={eachCase.input} output={eachCase.output} />
              ))}
            </tbody>
          </table>
        </div>
        {testcase.map((eachCase, idx) => (
          <div key={idx}>
            <div className="Problem-section-title">
              # 입출력예시
              {idx + 1}
            </div>
            <div className="Problem-section-body">{eachCase.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProblemBody;
