import WebSocket, { WebSocketServer } from "ws";
import BotInitMessage from "../../shared/messages/BotInitMessage";
import WebClientInitMessage from "../../shared/messages/WebClientInitMessage";
import BaseMessage from "../../shared/messages/BaseMessage";

export default class ConnectionManager {
    private webClients: WebSocket[] = [];
    private botClients: WebSocket[] = [];
    private wss: WebSocketServer;
    
    constructor(wss: WebSocketServer) {
        this.wss = wss;
    }

    public addWebClient(client: WebSocket, initMessage: WebClientInitMessage) {
        this.webClients.push(client);
        
        // Greet web client
    }

    public addBotClient(client: WebSocket, initMessage: BotInitMessage) {
        this.botClients.push(client);

        // Greet bot client
    }

    public sendAllWebClients(message: BaseMessage) {
        this.webClients.forEach((client) => {
            client.send(JSON.stringify(message));
        });
    }

    public sendAllBotClients(message: BaseMessage) {
        this.botClients.forEach((client) => {
            client.send(JSON.stringify(message));
        });
    }
}
