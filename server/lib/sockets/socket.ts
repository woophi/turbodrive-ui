import { Server } from 'http';
import socket from 'socket.io';
import { Logger } from 'server/logger';

export const registerSocket = (server: Server) => {
  const IO = socket(server);
  Logger.debug('Storage register events');
};
