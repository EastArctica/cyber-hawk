export namespace Inventory {


    export function getAllItems(): any {
        let inventory: any = {};
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

    export function dumpExtraItems(): boolean {
        return true;
    }
}