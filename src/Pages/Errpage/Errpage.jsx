import React from 'react';

function Errpage(props) {
  const { log } = props;
  if (!log) {
    return <h1>hi</h1>;
  }
  return (
    <div>
      <h1>Error!</h1>
      <details>
        <summary>show log</summary>
        <div>{log}</div>
      </details>
    </div>
  );
}

export default Errpage;
