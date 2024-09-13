import { Inventory } from "./Inventory";

namespace Task {
    function chat(type: string, message: string): number {
        
       /* if(type == "Log") {
            Chat.log(message);
        } else */

        return 1;
    }
}


const BaritoneAPI: any = Java.type("baritone.api.BaritoneAPI");
Chat.log("Provider: " + BaritoneAPI.getProvider());
BaritoneAPI.getSettings().logger.value = JavaWrapper.methodToJava((_) => {});
// BaritoneAPI.getSettings().logger.value = JavaWrapper.methodToJava((_) => { Chat.log(_) });

// for(let i: int = 0; i<Player.openInventory().getItems().length(); i++);


Chat.log(Inventory.getAllItems());

