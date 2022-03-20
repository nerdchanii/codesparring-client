import { io } from 'socket.io-client';

export const ANONY = `ANONYMOUS ${Math.floor(Math.random() * 10000).toString()}`;

const socket = io(process.env.REACT_APP_SOCKET_END_POINT);

export default socket;
