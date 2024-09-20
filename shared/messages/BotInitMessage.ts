import BaseMessage, { isBaseMessage } from './BaseMessage';

export default class BotInitMessage extends BaseMessage {
  // Minecraft account username
  public username: string;
  // Server info
  public address: string;
  public port: number;

  constructor(username: string, address: string, port: number, id?: number, timestamp?: number) {
    super('BotInitMessage', id, timestamp);

    this.username = username;
    this.address = address;
    this.port = port;
  }
}

export function isBotInitMessage(json: any): json is BotInitMessage {
  let jsonClone = json;
  if (!isBaseMessage(jsonClone)) return false;

  return (
    json.type === 'BotInitMessage' &&
    typeof json.username === 'string' &&
    typeof json.address === 'string' &&
    typeof json.port === 'number'
  );
}
