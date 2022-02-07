import React from 'react';

// Component: ResultMessage
function ResultMessage(props) {
  const { idx, stdout, status, stderr } = props;

  return (
    <div>
      <span>{idx + 1}</span>
      <span>출력: {stdout === '' ? '!출력이 없습니다!' : stdout}</span>
      <span style={status === '성공' ? { color: 'lightGreen' } : { color: 'red' }}>{status}</span>
      {stderr !== '' ? <span>{`오류: ${stderr}`}</span> : null}
    </div>
  );
}

// Component: Result
function Result(props) {
  const { result } = props;
  if (result.length === 0) {
    return null;
  }
  return (
    <div>
      {result.map((eachResult, idx) => (
        <ResultMessage
          key={idx}
          idx={idx}
          stdout={eachResult.stdout}
          stderr={eachResult.stderr}
          status={eachResult.status}
        />
      ))}
    </div>
  );
}

export default Result;
