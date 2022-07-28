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
        <button className="tertiary" type="button" onClick={runTest}>
          테스트
        </button>
        <button className="primary" type="button" onClick={onSubmit}>
          제출
        </button>
      </div>
    </div>
  );
}

export default Output;
