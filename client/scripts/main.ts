import { Inventory } from "./Inventory";
import { ChatType } from "../../shared/messages/tasks/ChatTask";



const BaritoneAPI: any = Java.type("baritone.api.BaritoneAPI");
Chat.log("Provider: " + BaritoneAPI.getProvider());
BaritoneAPI.getSettings().logger.value = JavaWrapper.methodToJava((_) => {});
// BaritoneAPI.getSettings().logger.value = JavaWrapper.methodToJava((_) => { Chat.log(_) });

// for(let i: int = 0; i<Player.openInventory().getItems().length(); i++);


Chat.log(Inventory.getAllItems());

