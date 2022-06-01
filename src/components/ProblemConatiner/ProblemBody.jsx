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
        <div style={{ display: 'flex', flex: 1, columnGap: '20px', textAlign: 'center' }}>
          <div className="Problem-section-body">
            <p>인풋</p>
            <hr style={{ margin: '20px 0' }} />
            {testInput.map((item) => {
              return (
                <>
                  <span>{item}</span>
                  <hr style={{ margin: '20px 0' }} />
                </>
              );
            })}
          </div>
          <div className="Problem-section-body">
            <p>아웃풋</p>
            <hr style={{ margin: '20px 0' }} />
            {testOutput.map((item) => {
              return (
                <>
                  <span>{item}</span>
                  <hr style={{ margin: '20px 0' }} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProblemBody;
