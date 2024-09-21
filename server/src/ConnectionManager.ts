import WebSocket, { WebSocketServer } from "ws";
import BotInitMessage from "../../shared/messages/BotInitMessage";
import WebClientInitMessage from "../../shared/messages/WebClientInitMessage";

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
}