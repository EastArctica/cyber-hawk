const BaritoneAPI: any = Java.type("baritone.api.BaritoneAPI");

Chat.log("Provider: " + BaritoneAPI.getProvider());

BaritoneAPI.getSettings().logger.value = JavaWrapper.methodToJava((_) => {});
// BaritoneAPI.getSettings().logger.value = JavaWrapper.methodToJava((_) => { Chat.log(_) });