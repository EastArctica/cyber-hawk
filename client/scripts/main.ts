namespace Task {
    function chat(type: string, message: string): number {
        
       /* if(type == "Log") {
            Chat.log(message);
        } else */

        return 1;
    }
}

namespace Inventory {

    function getAllItems(): any {
        let inventory = {};
        Player.openInventory().getItems().forEach(JavaWrapper.methodToJava((e) => {
    
            try {
                if(inventory[e.getName().getString()] == undefined) {
                    inventory[e.getName().getString()] = e.getCount();
                } else {
                    inventory[e.getName().getString()] += e.getCount();
                }
            } catch(e) {
                Chat.log("Error: "+e); 
            }
    
        }));
        return inventory;
    }

    
}


const BaritoneAPI: any = Java.type("baritone.api.BaritoneAPI");
Chat.log("Provider: " + BaritoneAPI.getProvider());
BaritoneAPI.getSettings().logger.value = JavaWrapper.methodToJava((_) => {});
// BaritoneAPI.getSettings().logger.value = JavaWrapper.methodToJava((_) => { Chat.log(_) });

// for(let i: int = 0; i<Player.openInventory().getItems().length(); i++);




