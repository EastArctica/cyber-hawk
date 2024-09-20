import BaseTask, { isBaseTask } from './BaseTask';

export enum ChatType {
  Log = 'Log',
  Chat = 'Chat',
}

export default class ChatTask extends BaseTask {
  public chatType: ChatType;
  public message: string;

  constructor(chatType: ChatType, message: string) {
    super('ChatTask');
  }
}

export function isChatTask(json: any): json is ChatTask {
  let jsonClone = json;
  if (!isBaseTask(jsonClone)) return false;
  
  return (
    json.type == 'ChatTask' &&
    typeof json.chatType === 'string' &&
    typeof json.message === 'string'
  );
}
