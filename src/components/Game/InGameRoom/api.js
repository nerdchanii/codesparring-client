import axios from 'axios';

// eslint-disable-next-line arrow-body-style
export const joinGame = (gameId) => {
  return axios(`${process.env.REACT_APP_API_DEFAULTS_URL}/game/join/${gameId}`, {
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
  return axios(`${process.env.REACT_APP_API_DEFAULTS_URL}/game/leave/${gameId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage?.LOGIN_TOKEN,
    },
  }).then((res) => res.data);
};

const defaultErrorDispatch = {
  400: {
    action() {
      alert('400번에러');
    },
  },
  401: {
    action() {
      alert('401번에러');
    },
  },
  403: {
    action() {
      alert('403번에러');
    },
  },
};

export function errorSwitcher(errStatus, dispatch = defaultErrorDispatch) {
  switch (errStatus) {
    case 400:
      dispatch[400].action();
      break;
    case 401:
      dispatch[401].action();
      break;
    case 403:
      dispatch[403].action();
      break;
    default:
      dispatch[errStatus].action();
  }
}
