import ChatTask, { ChatType } from '../../shared/messages/tasks/ChatTask';

export namespace Task {
  export function chat(task: ChatTask): number {
    if (task.chatType == ChatType.Log) {
      Chat.log(task.message);
    } else if (task.chatType == ChatType.Chat) {
      Chat.say(task.message);
    }

    return 1;
  }
}
