import axios from 'axios';
import React from 'react';

import AddButton from './AddButton';

const MESSAGE = {
  SUCCESS: '문제가 추가 되었습니다.',
  FAIL: {
    NOT_INPUT_TITLE: '제목을 입력해주세요',
    NOT_INPUT_LEVEL: '난이도을 입력해주세요',
    NOT_INPUT_PROBLEM_TYPE: '문제 유형을 입력해주세요',
    NOT_INPUT_PROBLEM_DESC: '문제 설명 입력해주세요',
    NOT_INPUT_REQUIREMENT: '문제 조건 입력해주세요',
    NOT_INPUT_TESTCASE_INPUT: '테스트케이스 입력해주세요',
    NOT_INPUT_TESTCASE_OUTPUT: '테스트케이스 출력해주세요',
    NOT_INPUT_TESTCASE_DESC: '테스트케이스 설명 입력해주세요',
    DUPLICATE_TITLE: '중복된 제목입니다',
    CAN_NOT_ADD_PROBLEM: '문제를 추가할 수 없습니다.',
  },
};

function ProblemAdd({ back }) {
  const submitAdd = async (event) => {
    event.preventDefault();
    const { target } = event;
    switch ('') {
      case target.title.value:
        alert(MESSAGE.FAIL.NOT_INPUT_TITLE);
        return;
      case target.level.value:
        alert(MESSAGE.FAIL.NOT_INPUT_LEVEL);
        return;
      case target.problemType.value:
        alert(MESSAGE.FAIL.NOT_INPUT_PROBLEM_TYPE);
        return;
      case target.problemDescription.value:
        alert(MESSAGE.FAIL.NOT_INPUT_PROBLEM_DESC);
        return;
      case target.requirement.value:
        alert(MESSAGE.FAIL.NOT_INPUT_REQUIREMENT);
        return;
      case target['testCase1-input'].value:
      case target['testCase2-input'].value:
      case target['testCase3-input'].value:
        alert(MESSAGE.FAIL.NOT_INPUT_TESTCASE_INPUT);
        return;
      case target['testCase1-output'].value:
      case target['testCase2-output'].value:
      case target['testCase3-output'].value:
        alert(MESSAGE.FAIL.NOT_INPUT_TESTCASE_OUTPUT);
        return;
      case target['testCase1-description'].value:
      case target['testCase2-description'].value:
      case target['testCase3-description'].value:
        alert(MESSAGE.FAIL.NOT_INPUT_TESTCASE_DESC);
        return;
      default:
        break;
    }

    const data = {
      title: target.title.value,
      level: target.level.value,
      problemType: target.problemType.value,

      description: target.problemDescription.value,
      requirement: target.requirement.value.split('\n'),
      testcase: [
        {
          input: target['testCase1-input'].value,
          output: target['testCase1-output'].value,
          description: target['testCase1-description'].value,
        },
        {
          input: target['testCase2-input'].value,
          output: target['testCase2-output'].value,
          description: target['testCase2-description'].value,
        },
        {
          input: target['testCase3-input'].value,
          output: target['testCase3-output'].value,
          description: target['testCase3-description'].value,
        },
      ],
    };

    const stringData = JSON.stringify(data);
    try {
      const response = await axios(`${process.env.REACT_APP_API_DEFAULTS_URL}/problem/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: stringData,
      });
      if (response.data.result === 'success') {
        alert(MESSAGE.SUCCESS);
        back();
      } else {
        alert(MESSAGE.FAIL.CAN_NOT_ADD_PROBLEM);
      }
      // back();
    } catch (e) {
      switch (e.response.data.message) {
        case 'DUPLICATE_TITLE':
          alert(MESSAGE.FAIL.DUPLICATE_TITLE);
          break;
        default:
          alert(MESSAGE.FAIL.CAN_NOT_ADD_PROBLEM);
          break;
      }
    }
  };

  // form to sumbit Problem Add data to server and redirect to problem page
  return (
    <div className="ProblemAdd">
      <AddButton buttonClick={back} />
      <div className="ProblemAdd-title">문제 추가</div>
      <div className="ProblemAdd-form">
        <form onSubmit={submitAdd}>
          <div className="ProblemAdd-metaData">
            <div className="metaData-left">
              <label htmlFor="title">
                <div>문제 제목</div>
                <input type="text" name="title" id="title" />
              </label>
            </div>
            <div className="metaData-right">
              <label htmlFor="level">
                <div>난이도</div>
                <select name="level" id="level">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </label>
              <label htmlFor="problemType">
                <div>문제 유형</div>
                <input type="text" name="problemType" id="problemType" />
              </label>
            </div>
          </div>
          <label htmlFor="problemDescription">
            <div>문제 설명</div>
            <textarea name="problemDescription" id="problemDescription" rows="5" />
          </label>
          <label htmlFor="requirement">
            <div>조건</div>
            <textarea name="requirement" id="requirement" rows="5" />
          </label>

          <div className="ProblemAdd-testCase">
            {[1, 2, 3].map((number) => (
              <div className="testCaseContainer">
                <div className="testCase-title">
                  테스트 케이스
                  {number}
                </div>
                <div className="testCase">
                  <label htmlFor={`testCase${number}-input`}>
                    <div>입력</div>
                    <textarea
                      name={`testCase${number}-input`}
                      id={`testCase${number}-input`}
                      rows="3"
                    />
                  </label>
                  <label htmlFor={`testCase${number}-output`}>
                    <div>출력</div>
                    <textarea
                      name={`testCase${number}-output`}
                      id={`testCase${number}-output`}
                      rows="3"
                    />
                  </label>
                  <label htmlFor={`testCase${number}-description`}>
                    <div>설명</div>
                    <textarea
                      name={`testCase${number}-description`}
                      id={`testCase${number}-description`}
                      rows="3"
                    />
                  </label>
                </div>
              </div>
            ))}
          </div>

          <div className="submitButtonContainer">
            <button className="submitButton" type="submit">
              문제 추가
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ProblemAdd;
