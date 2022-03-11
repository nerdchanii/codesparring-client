import { io } from 'socket.io-client';
import env from '../../env';

export const ANONY = `ANONYMOUS ${Math.floor(Math.random() * 10000).toString()}`;

const socket = io(env.END_POINT);

export default socket;
