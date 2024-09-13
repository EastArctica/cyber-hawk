import { ChatType } from "../../shared/messages/tasks/ChatTask";

export namespace Task {
    export function chat(type: ChatType, message: string): number {
        
        if(type == ChatType.Log) {
            Chat.log(message);
        } else if (type == ChatType.Chat) {
            Chat.say(message);
        }

        return 1;
    }
}
