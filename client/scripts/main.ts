import { Inventory } from './Inventory';
import { Task } from './Task';
import ChatTask, { ChatType } from '../../shared/messages/tasks/ChatTask';
import BotInitMessage from '../../shared/messages/BotInitMessage';

const BaritoneAPI: any = Java.type('baritone.api.BaritoneAPI');
Chat.log('Provider: ' + BaritoneAPI.getProvider());
BaritoneAPI.getSettings().logger.value = JavaWrapper.methodToJava((_) => {});
// BaritoneAPI.getSettings().logger.value = JavaWrapper.methodToJava((_) => { Chat.log(_) });

// for(let i: int = 0; i<Player.openInventory().getItems().length(); i++);

let items: {[key: string]: number} = {
    "Block of Redstone": 20,
    "Stripped Oak Log": 12,
    "Diamond": 22
};

    
// let itemdelta = Inventory.getExtraItems(items);
// Chat.log(itemdelta);

// Player.openInventory().openGui();
// Time.sleep(1000);

let deltaitems = Inventory.getExtraItems(items);
Inventory.dropExtraItems(deltaitems);

// for(let i = 0; i<46; i++) {
//     Chat.log(Player.openInventory().getSlot(i));
//     Player.openInventory().dropSlot(i);
//     Time.sleep(500);
// }

// Time.sleep(1000);
// Player.openInventory().close();


//Chat.log(Inventory.getAllItems());

// WebSocket stuff
let ws = Request.createWS('ws://localhost:8080');

ws.onConnect = JavaWrapper.methodToJava(() => {
    Chat.log('Connected to server');
    let username = Client.getMinecraft().method_1548().method_1676() // .session.getUsername()
    ws.sendText(JSON.stringify(new BotInitMessage(username, World.getCurrentServerAddress() || "", 0)));
});

ws.onTextMessage = JavaWrapper.methodToJava((_, message: string) => {
    
});

ws.connect();
