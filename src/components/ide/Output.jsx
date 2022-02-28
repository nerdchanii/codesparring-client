import React from 'react';
import './Ide.scss';
import Result from './Result';

function Output(props) {
  const { onSubmit, result, runTest } = props;
  if (!result) {
    return null;
  }
  return (
    <div className="Output">
      <div className="body">
        <div className="title">실행결과</div>
        <Result result={result} />
      </div>
      <div className="run">
        <button className="button" formMethod="POST" type="button" onClick={runTest}>
          테스트케이스 실행하기
        </button>
        <button className="button" formMethod="POST" type="button" onClick={onSubmit}>
          제출하기
        </button>
      </div>
    </div>
  );
}

export default Output;
