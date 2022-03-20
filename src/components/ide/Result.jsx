import React, { useEffect, useState } from 'react';

const STATUS_TYPE = {
  SUCCESS: 'success',
  FAIL: 'failed',
  ERROR: 'runError',
};

// Component: ResultMessage
function ResultMessage(props) {
  const { idx, stdout, status, stderr } = props;
  const [msg, setMsg] = useState({ type: '', text: '' });

  useEffect(() => {
    switch (status) {
      case STATUS_TYPE.ERROR:
        setMsg({ type: STATUS_TYPE.ERROR, text: stderr });
        break;
      case STATUS_TYPE.FAIL:
        // return failed message
        setMsg({ type: STATUS_TYPE.FAIL, text: stdout || '출력이 없습니다' });
        break;
      case STATUS_TYPE.SUCCESS:
        setMsg({ type: STATUS_TYPE.SUCCESS, text: stdout });
        break;
      default:
        break;
    }
  }, [status, stdout, stderr]);

  // return message component
  return (
    <div className="ResultMessage">
      <div className={`result-message ${msg.type}`}>
        <div className="result-message-title">{`case ${idx + 1}: ${msg.type}`}</div>
        <div className="result-message-text">{msg.text}</div>
      </div>
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
