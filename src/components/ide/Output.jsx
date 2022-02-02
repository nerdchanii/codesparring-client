import React from 'react';
import './Ide.scss';

function Output(props) {
  const { result, runTest } = props;
  return (
    <div className="Output">
      <div className="title">실행결과</div>
      <div className="body"> 진짜 결과</div>
      <div>{result ? <>{result}</> : <></>}</div>
      <div className="run">
        <button className="button">테스트케이스 추가</button>
        <button className="button" onClick={runTest}>
          테스트케이스 실행하기
        </button>
        <button className="button">제출하기</button>
      </div>
    </div>
  );
}
export default Output;
