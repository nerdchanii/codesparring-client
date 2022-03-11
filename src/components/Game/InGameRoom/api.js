import axios from 'axios';
import env from '../../../env';

// eslint-disable-next-line arrow-body-style
export const joinGame = (gameId) => {
  return axios(`${env.API_URL}/game/join/${gameId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage?.LOGIN_TOKEN,
    },
  }).then((res) => {
    return res.data;
  });
};

export const leaveGame = (gameId) => {
  return axios(`${env.API_URL}/game/leave/${gameId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage?.LOGIN_TOKEN,
    },
  }).then((res) => res.data);
};

export const gameStart = async (roomId) => {
  const response = await axios.get(`${env.API_URL}/game/start/${roomId}`);
  return response;
};
