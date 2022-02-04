import React, { useEffect } from 'react';
import './Ide.scss';

// Component: ResultMessage
function ResultMessage(props) {
  const { key, result, expectedOut, stderr } = props;
  if (result === expectedOut) {
    return (
      <div>
        <span>{key + 1}:</span>
        <span>출력:{result}</span>
        <span>성공</span>
      </div>
    );
  }
  return (
    <div>
      <span>{key + 1}:</span>
      <span>출력: {result}</span>
      <span>실패</span>
      {(stderr !== '') ? <span>{`오류: ${stderr}`}</span> : null}
    </div>
  );
}

function Output(props) {
  const { result, runTest, expectedOut } = props;

  useEffect(() => {
    console.log(result);
  }, [result]);

  if (!result) {
    return null;
  }
  return (
    <div className="Output">
      <div className="body">
        <div className="title">실행결과</div>

        {result.map((item, idx) => (
          <ResultMessage
            key={idx}
            result={item.stdout}
            stderr={item.stderr}
            expectedOut={expectedOut[idx]}
          />
        ))}
      </div>
      <div className="run">
        <button className="button" formMethod="POST" type="button" onClick={runTest}>
          테스트케이스 실행하기
        </button>
        <button className="button">제출하기</button>
      </div>
    </div>
  );
}
export default Output;
