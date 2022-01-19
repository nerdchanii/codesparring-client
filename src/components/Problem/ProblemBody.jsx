import React from 'react';

const TestCase = (props) => {
  const { input, output } = props;
  return (
    <tr>
      <td>{input}</td>
      <td>{output}</td>
    </tr>
  );
};

const ProblemBody = (props) => {
  const { data } = props;
  const { problemDescription, requirement, testcase } = data;

  return (
    <div>
      <p>문제설명</p>
      <p>{problemDescription}</p>
      <p>제안사항</p>
      <p>{requirement}</p>
      <table>
        <thead>
          <tr>
            <th>인풋</th>
            <th>아웃풋</th>
          </tr>
        </thead>
        <tbody>
          {testcase.map((eachCase, idx) => (
            <TestCase
              key={idx}
              input={eachCase.input}
              output={eachCase.ouput}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProblemBody;
