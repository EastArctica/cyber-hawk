export namespace Inventory {
  export function getInventory(): {[key: string]: number} {
    let inventory: any = {};
    Player.openInventory()
      .getItems()
      .forEach(
        JavaWrapper.methodToJava((e) => {
          try {
            if (inventory[e.getName().getString()] == undefined) {
              inventory[e.getName().getString()] = e.getCount();
            } else {
              inventory[e.getName().getString()] += e.getCount();
            }
          } catch (e) {
            Chat.log('Error: ' + e);
          }
        }),
      );
    return inventory;
  }

  export function getExtraItems(items: {[key: string]: number}): {[key: string]: number} {
    let inventory: {[key: string]: number} = getInventory();
    let itemdelta: {[key: string]: number} = {};
    Object.keys(items).forEach((e) => {
        itemdelta[e] = (inventory[e] || 0) - items[e];
    })

    return itemdelta;
  }

  export function dropExtraItems(itemdelta: {[key: string]: number}) {
    let inventory: {[key: string]: number} = getInventory();
    Object.keys(itemdelta).forEach((e) => {
        if(itemdelta[e] > 0) {
            dropItems(e, itemdelta[e]);
            //Time.sleep(500);
        }
    })
  }

  export function dropItems(name: string, amount: number) {
    // Chat.log("Dropping "+name+" x"+amount);
    for(let i = 0; i<46; i++) {
        Time.sleep(500);
        if(amount <= 0)
            return;

        let e = Player.openInventory().getSlot(i);

        //optimization: drops entire stack if applicable to avoid spamming drop and crashing the client
        if(amount >= e.getCount()) {
            amount -= e.getCount();
            Player.openInventory().dropSlot(i, true);
            continue;
        }

        while(e.getName().getString() == name && amount > 0) {
            Player.openInventory().dropSlot(i);
            amount--;
        }
    }
  }
}
