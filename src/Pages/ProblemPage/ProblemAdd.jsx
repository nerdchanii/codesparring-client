import axios from 'axios';
import React, { useState } from 'react';
import env from '../../env';

const testCases = [1, 2, 3];

function ProblemAdd({ back }) {
  // set metaData
  const [metaData, setMetaData] = useState({
    title: '',
    level: '',
    description: '',
  });
  // const [form, setForm] = useState({});

  // // set testCase
  // const [testCase, setTestCase] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMetaData({ ...metaData, [name]: value });
  };

  // submit to server json data and redirect to problem page
  const submitAdd = async (event) => {
    event.preventDefault();
    const { target } = event;
    switch ('') {
      case target.title.value:
        alert('제목을 입력해주세요');
        return;
      case target.level.value:
        alert('난이도를 선택해주세요');
        return;
      case target.problemType.value:
        alert('문제 유형을 선택해주세요');
        return;
      case target.problemDescription.value:
        alert('문제 설명을 입력해주세요');
        return;
      case target.requirement.value:
        alert('제출 시 요구사항을 입력해주세요');
        return;
      case target['testCase1-input'].value:
        alert('테스트 케이스1의 입력을 입력해주세요');
        return;
      case target['testCase1-output'].value:
        alert('테스트 케이스1의 출력을 입력해주세요');
        return;
      case target['testCase1-description'].value:
        alert('테스트 케이스1의 설명을 입력해주세요');
        return;
      case target['testCase2-input'].value:
        alert('테스트 케이스2의 입력을 입력해주세요');
        return;
      case target['testCase2-output'].value:
        alert('테스트 케이스2의 출력을 입력해주세요');
        return;
      case target['testCase2-description'].value:
        alert('테스트 케이스2의 설명을 입력해주세요');
        return;
      case target['testCase3-input'].value:
        alert('테스트 케이스3의 입력을 입력해주세요');
        return;
      case target['testCase3-output'].value:
        alert('테스트 케이스3의 출력을 입력해주세요');
        return;
      case target['testCase3-description'].value:
        alert('테스트 케이스3의 설명을 입력해주세요');
        return;
      default:
        break;
    }

    const data = {
      title: target.title.value,
      level: target.level.value,
      problemType: target.problemType.value,
      data: {
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
      },
    };
    const stringData = JSON.stringify(data);
    try {
      const response = await axios(`${env.API_URL}/api/problem/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: stringData,
      });

      const result = response.data;
      console.log(result);
      // back();
    } catch (e) {
      console.log(e);
    }
  };

  // form to sumbit Problem Add data to server and redirect to problem page
  return (
    <div className="ProblemAdd">
      <div className="backButtonContainer">
        <button className="backButton" onClick={back}>
          뒤로가기
        </button>
      </div>
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
            <textarea
              name="problemDescription"
              id="problemDescription"
              rows="5"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="requirement">
            <div>조건</div>
            <textarea name="requirement" id="requirement" rows="5" onChange={handleChange} />
          </label>

          <div className="ProblemAdd-testCase">
            {testCases.map((number) => (
              <div className="testCaseContainer">
                <div className="testCase-title">테스트 케이스{number}</div>
                <div className="testCase">
                  <label htmlFor={`testCase${number}-input`}>
                    <div>입력</div>
                    <textarea
                      name={`testCase${number}-input`}
                      id={`testCase${number}-input`}
                      rows="3"
                      onChange={handleChange}
                    />
                  </label>
                  <label htmlFor={`testCase${number}-output`}>
                    <div>출력</div>
                    <textarea
                      name={`testCase${number}-output`}
                      id={`testCase${number}-output`}
                      rows="3"
                      onChange={handleChange}
                    />
                  </label>
                  <label htmlFor={`testCase${number}-description`}>
                    <div>설명</div>
                    <textarea
                      name={`testCase${number}-description`}
                      id={`testCase${number}-description`}
                      rows="3"
                      onChange={handleChange}
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
