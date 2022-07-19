import React from 'react';
import './Ide.scss';
import Result from './Result';

function Output(props) {
  const { onSubmit, runTest } = props;
  return (
    <div className="Output">
      <div className="title">실행결과</div>
      <div className="body">
        <Result />
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
