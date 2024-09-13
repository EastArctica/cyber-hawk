import WebSocket, { WebSocketServer } from 'ws';
import ErrorMessage from '../../shared/messages/ErrorMessage';
import GenericMessage from '../../shared/messages/GenericMessage';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws: WebSocket) => {
    // TODO: Make getter increment
    let messageIndex = 0;

    ws.on('message', (message: string) => {
        let messageObj: GenericMessage;
        try {
            messageObj = JSON.parse(message);
        } catch (e) {
            // Send error message to client
            let errMessage: ErrorMessage = {
                type: 'ErrorMessage',
                data: {
                    message: 'Failed to parse message',
                    raw: `${e}`,
                },
                id: messageIndex++,
            };

            ws.send(JSON.stringify(errMessage));
            return;
        }

        switch (messageObj.type) {
            case 'TaskMessage':
                console.log('Task received? Client sending us a mfing task wtf do you mean');
                console.log(messageObj.data);
                break;
            case 'ErrorMessage':
                console.log('Error received');
                console.log(messageObj.data);
                break;
            default:
                console.log(`Received message =>`, messageObj);
                break;
        }

        console.log(`Received message => ${message}`);
    });
    
    ws.send('Hello! Message From Server!!');
});
