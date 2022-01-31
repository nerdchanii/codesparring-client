import React, { useCallback, useEffect, useState } from 'react';
import Chat from '../../../Pages/Chat/Chat';
import InGameHeader from './InGameHeader';
import InGameUserListContainer from './InGameUserListContainer';
import InGameProblemContianer from './InGameProblemContianer';
import { CircularProgress } from '@mui/material';
import './InGame.scss';
import { Box } from '@mui/system';

const InGameRoom = () => {
  const [roomInfo, setRoomInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchRoom = useCallback(async () => {
    setLoading(true);
    try {
      const mock = {
        id: '1',
        level: '2',
        title: '개블리셔 쌉고수? ㅋㅋ',
        data: {
          problemDescription:
            '올해 가계부를 정리해야 하는 일이 생겼습니다. 그런데, 가지고 있는 영수증의 수는 몇장인지 모르지만, 일단 금액을 전부 정리한 배열을 만들었습니다. 입력 된 수들을 더해서 출력해주세요! :)',
          requirement: [
            '금액의 배열의 길이는 2개 이상  100개 이하 입니다.',
            '출력은 정수로 출력해야 합니다. ',
          ],
          testcase: [
            {
              input: '[1,2,3]',
              output: 6,
              description: '주어진 수 1, 2, 3을 더하면 6이 나옵니다.',
            },
            {
              input: '[10,10,20]',
              output: 40,
              description: '주어진 [10,10,20]을 더하면 40이나옵니다',
            },
            {
              input: '[100,200,200,200]',
              output: 700,
              description: '주어진 [100,200,200,200]을 더하면 700이나옵니다',
            },
          ],
        },
      };
      const response = await Promise.resolve(mock);
      setRoomInfo(response);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRoom();
  }, []);

  if (!roomInfo) {
    return <></>;
  }
  if (loading) {
    return (
      <Box className="loading">
        <CircularProgress />
      </Box>
    );
  }
  if (roomInfo) {
    return (
      <>
        <InGameHeader title={roomInfo.title} level={roomInfo.level} />
        <InGameUserListContainer />
        <InGameProblemContianer data={roomInfo.data} />
        <Chat />
      </>
    );
  }
};

export default InGameRoom;
