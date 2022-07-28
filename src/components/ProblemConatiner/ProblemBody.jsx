import React, { useEffect } from 'react';
import './Problem.scss';

function ProblemBody(props) {
  const { data } = props;
  const { testOutput, testInput, description, requirement } = data;

  useEffect(() => {}, []);

  if (!data) {
    return <div>Error!</div>;
  }
  return (
    <div className="ProblemBody">
      <div className="Problem-section">
        <p className="Problem-section-title">문제설명</p>
        <p className="Problem-section-body">{description}</p>
      </div>
      <div className="Problem-section">
        <p className="Problem-section-title">제안사항</p>
        <p className="Problem-section-body">
          {requirement.map((text) => (
            <>
              <span>{text}</span>
              <br />
            </>
          ))}
        </p>
      </div>
      <div className="Problem-section">
        <div className="Problem-section">
          <p className="Problem-section-title">테스트 케이스</p>
        </div>
        <div>
          <div className="testcase">
            <div className="testcase--header">
              <p className="input">인풋</p>
              <p className="output">아웃풋</p>
            </div>
            {testInput.map((item, idx) => {
              return (
                <div className="testcase--item">
                  <span className="input">{item}</span>
                  <span className="output">{testOutput[idx]}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProblemBody;
