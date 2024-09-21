import WebSocket, { WebSocketServer } from 'ws';
import ErrorMessage, { isErrorMessage } from '../../shared/messages/ErrorMessage';
import { isBotInitMessage } from '../../shared/messages/BotInitMessage';
import { isTaskMessage } from '../../shared/messages/TaskMessage';
import { isWebClientInitMessage } from '../../shared/messages/WebClientInitMessage';
import ConnectionManager from './ConnectionManager';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (client: WebSocket) => {
  const connectionManager = new ConnectionManager(wss);

  client.on('message', (message: string) => {
    let messageObj: object;
    try {
      messageObj = JSON.parse(message);
    } catch (e: any) {
      let errMessage = new ErrorMessage('Failed to parse message', "" + e);

      client.send(JSON.stringify(errMessage));
      return;
    }

    if (isBotInitMessage(messageObj)) {
      connectionManager.addBotClient(client, messageObj);
      console.log('Client sent bot init');
      console.log(`${messageObj.username} connected from ${messageObj.address}`);
    } else if (isErrorMessage(messageObj)) {
      console.log('Error received');
      console.log(messageObj.message, messageObj.raw);
    } else if (isTaskMessage(messageObj)) {
      console.log('Task received? Client sending us a mfing task wtf do you mean');
    } else if (isWebClientInitMessage(messageObj)) {
      connectionManager.addWebClient(client, messageObj);
    } else {
      console.log(`Received message =>`, messageObj);
    }
  });
});
